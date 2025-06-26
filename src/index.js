import { authenticator } from 'otplib';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const secret = url.searchParams.get("secret");
    const digits = parseInt(url.searchParams.get("digits") || "6"); // default to 6 digits

    if (!secret) {
      return new Response(JSON.stringify({ error: "Missing 'secret' query param" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      // Clean the secret (remove spaces, convert to uppercase)
      const cleanSecret = secret.replace(/[\s\-]/g, '').toUpperCase();
      
      // Configure authenticator with specified digits
      authenticator.options = { 
        digits: digits,
        step: 30,      // 30 second window (Google Authenticator default)
        window: 1      // Allow 1 window of tolerance
      };
      
      // Generate TOTP token
      const token = authenticator.generate(cleanSecret);
      
      return new Response(JSON.stringify({
        token: token
      }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ 
        error: err.message
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
