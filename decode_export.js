// Simple Google Authenticator export decoder
// Based on the protobuf format used by Google Authenticator

function decodeGoogleAuthExport(exportUrl) {
  try {
    // Extract the data parameter from the URL
    const url = new URL(exportUrl);
    const data = url.searchParams.get('data');
    
    if (!data) {
      throw new Error('No data parameter found in URL');
    }
    
    // Decode base64
    const buffer = Buffer.from(data, 'base64');
    console.log('Raw buffer length:', buffer.length);
    console.log('Raw buffer hex:', buffer.toString('hex'));
    
    // Simple parsing - this is a basic implementation
    // For a full implementation, you'd need a proper protobuf parser
    
    let offset = 0;
    const accounts = [];
    
    while (offset < buffer.length) {
      // Look for account entries (field 1, wire type 2 = length-delimited)
      if (buffer[offset] === 0x0A) { // field 1, wire type 2
        offset++; // skip field byte
        
        // Read length
        let length = buffer[offset];
        offset++;
        
        // Extract account data
        const accountData = buffer.slice(offset, offset + length);
        const account = parseAccount(accountData);
        if (account) {
          accounts.push(account);
        }
        
        offset += length;
      } else {
        offset++;
      }
    }
    
    return accounts;
  } catch (error) {
    console.error('Error decoding export:', error);
    return null;
  }
}

function parseAccount(data) {
  try {
    let offset = 0;
    const account = {};
    
    while (offset < data.length) {
      const fieldByte = data[offset];
      const fieldNumber = fieldByte >> 3;
      const wireType = fieldByte & 0x07;
      
      offset++;
      
      if (wireType === 2) { // length-delimited
        const length = data[offset];
        offset++;
        const value = data.slice(offset, offset + length);
        
        switch (fieldNumber) {
          case 1: // secret
            account.secret = Buffer.from(value).toString('base32');
            break;
          case 2: // name/account
            account.name = value.toString('utf8');
            break;
          case 3: // issuer
            account.issuer = value.toString('utf8');
            break;
        }
        
        offset += length;
      } else if (wireType === 0) { // varint
        let value = 0;
        let shift = 0;
        while (offset < data.length && (data[offset] & 0x80)) {
          value |= (data[offset] & 0x7F) << shift;
          shift += 7;
          offset++;
        }
        if (offset < data.length) {
          value |= data[offset] << shift;
          offset++;
        }
        
        switch (fieldNumber) {
          case 4: // algorithm (1 = SHA1, 2 = SHA256, 3 = SHA512)
            account.algorithm = value;
            break;
          case 5: // digits
            account.digits = value;
            break;
          case 6: // type (1 = HOTP, 2 = TOTP)
            account.type = value;
            break;
          case 7: // counter (for HOTP)
            account.counter = value;
            break;
        }
      } else {
        offset++;
      }
    }
    
    return account;
  } catch (error) {
    console.error('Error parsing account:', error);
    return null;
  }
}

// Helper function to convert bytes to base32
Buffer.prototype.toString = function(encoding) {
  if (encoding === 'base32') {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let result = '';
    let bits = 0;
    let value = 0;
    
    for (let i = 0; i < this.length; i++) {
      value = (value << 8) | this[i];
      bits += 8;
      
      while (bits >= 5) {
        result += alphabet[(value >>> (bits - 5)) & 31];
        bits -= 5;
      }
    }
    
    if (bits > 0) {
      result += alphabet[(value << (5 - bits)) & 31];
    }
    
    return result;
  }
  
  // Fall back to original toString for other encodings
  return Buffer.prototype.toString.call(this, encoding);
};

// Your export URL
const exportUrl = 'otpauth-migration://offline?data=ClgKFDY2ejJjfXI7cCF0W3JyMGQpYXN5Ehptb2hhbi5rc3QuaHArbjhuQGdtYWlsLmNvbRoJS2FqYWJpIElEIAEoATACQhM0MjYzOTAxNzUwODg2NTQ5NzUyEAIYASAA';

console.log('Decoding Google Authenticator export...\n');
const accounts = decodeGoogleAuthExport(exportUrl);

if (accounts && accounts.length > 0) {
  accounts.forEach((account, index) => {
    console.log(`Account ${index + 1}:`);
    console.log(`  Name: ${account.name || 'N/A'}`);
    console.log(`  Issuer: ${account.issuer || 'N/A'}`);
    console.log(`  Secret: ${account.secret || 'N/A'}`);
    console.log(`  Type: ${account.type === 1 ? 'HOTP' : account.type === 2 ? 'TOTP' : 'Unknown'}`);
    console.log(`  Algorithm: ${account.algorithm === 1 ? 'SHA1' : account.algorithm === 2 ? 'SHA256' : account.algorithm === 3 ? 'SHA512' : 'Unknown'}`);
    console.log(`  Digits: ${account.digits || 6}`);
    if (account.type === 1) {
      console.log(`  Counter: ${account.counter || 0}`);
    }
    console.log('');
  });
} else {
  console.log('No accounts found or error in decoding.');
}
