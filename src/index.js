export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const secret = url.searchParams.get("secret");

    if (!secret) {
      return new Response(JSON.stringify({ error: "Missing 'secret' query param" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const token = generateTOTP(secret);
      return new Response(JSON.stringify({ token }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};

function generateTOTP(secret) {
  const key = base32ToBytes(secret.replace(/[\s\-]/g, '').toUpperCase());
  const timeStep = 30;
  const epoch = Math.floor(Date.now() / 1000);
  const counter = Math.floor(epoch / timeStep);

  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  view.setUint32(4, counter, false);

  const cryptoKey = crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-1" }, false, ["sign"]);

  return cryptoKey.then((key) =>
    crypto.subtle.sign("HMAC", key, buffer).then((signature) => {
      const offset = new Uint8Array(signature)[19] & 0xf;
      const binCode =
        ((new Uint8Array(signature)[offset] & 0x7f) << 24) |
        ((new Uint8Array(signature)[offset + 1] & 0xff) << 16) |
        ((new Uint8Array(signature)[offset + 2] & 0xff) << 8) |
        (new Uint8Array(signature)[offset + 3] & 0xff);

      const otp = (binCode % 1000000).toString().padStart(6, "0");
      return otp;
    })
  );
}

function base32ToBytes(base32) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let bits = "";
  for (let i = 0; i < base32.length; i++) {
    const val = alphabet.indexOf(base32[i]);
    if (val === -1) continue;
    bits += val.toString(2).padStart(5, "0");
  }

  const bytes = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    bytes.push(parseInt(bits.substring(i, i + 8), 2));
  }

  return new Uint8Array(bytes);
}
