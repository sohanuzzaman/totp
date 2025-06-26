const base32Encode = require('base32-encode').default;

// Simplified decoder for Google Authenticator export
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
    
    // Manual parsing of the protobuf data
    // This is based on analyzing the structure of Google Authenticator exports
    
    const accounts = [];
    let offset = 0;
    
    while (offset < buffer.length) {
      // Look for the start of an account entry
      if (buffer[offset] === 0x0A) { // field 1, wire type 2 (length-delimited)
        offset++; // skip field byte
        
        // Read the length of this account entry
        let entryLength = 0;
        let shift = 0;
        while (offset < buffer.length && (buffer[offset] & 0x80)) {
          entryLength |= (buffer[offset] & 0x7F) << shift;
          shift += 7;
          offset++;
        }
        if (offset < buffer.length) {
          entryLength |= buffer[offset] << shift;
          offset++;
        }
        
        // Parse the account entry
        const entryEnd = offset + entryLength;
        const account = {};
        
        while (offset < entryEnd && offset < buffer.length) {
          const fieldByte = buffer[offset];
          const fieldNumber = fieldByte >> 3;
          const wireType = fieldByte & 0x07;
          offset++;
          
          if (wireType === 2) { // length-delimited (string or bytes)
            let fieldLength = 0;
            let shift = 0;
            while (offset < buffer.length && (buffer[offset] & 0x80)) {
              fieldLength |= (buffer[offset] & 0x7F) << shift;
              shift += 7;
              offset++;
            }
            if (offset < buffer.length) {
              fieldLength |= buffer[offset] << shift;
              offset++;
            }
            
            const fieldData = buffer.slice(offset, offset + fieldLength);
            
            switch (fieldNumber) {
              case 1: // secret (bytes)
                account.secret = base32Encode(fieldData, 'RFC4648');
                break;
              case 2: // name/account (string)
                account.name = fieldData.toString('utf8');
                break;
              case 3: // issuer (string)
                account.issuer = fieldData.toString('utf8');
                break;
            }
            
            offset += fieldLength;
          } else if (wireType === 0) { // varint
            let value = 0;
            let shift = 0;
            while (offset < buffer.length && (buffer[offset] & 0x80)) {
              value |= (buffer[offset] & 0x7F) << shift;
              shift += 7;
              offset++;
            }
            if (offset < buffer.length) {
              value |= buffer[offset] << shift;
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
            // Skip unknown wire types
            offset++;
          }
        }
        
        if (account.secret) {
          accounts.push(account);
        }
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
    console.log(`  Type: ${account.type === 1 ? 'HOTP' : account.type === 2 ? 'TOTP' : account.type || 'Unknown'}`);
    console.log(`  Algorithm: ${account.algorithm === 1 ? 'SHA1' : account.algorithm === 2 ? 'SHA256' : account.algorithm === 3 ? 'SHA512' : account.algorithm || 'SHA1 (default)'}`);
    console.log(`  Digits: ${account.digits || 6}`);
    if (account.type === 1) {
      console.log(`  Counter: ${account.counter || 0}`);
    }
    console.log('');
  });
} else {
  console.log('No accounts found or error in decoding.');
}
