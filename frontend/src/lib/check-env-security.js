// Security verification script - Check which env vars are exposed to client
console.log('=== CLIENT-SIDE ENVIRONMENT VARIABLES ===');
console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL || 'NOT SET');
console.log('');
console.log('=== SENSITIVE KEYS (Should be UNDEFINED on client) ===');
console.log('NEXTAUTH_SECRET:', typeof process.env.NEXTAUTH_SECRET === 'undefined' ? '✓ SECURE (not exposed)' : '✗ EXPOSED! (security risk)');
console.log('GOOGLE_CLIENT_SECRET:', typeof process.env.GOOGLE_CLIENT_SECRET === 'undefined' ? '✓ SECURE (not exposed)' : '✗ EXPOSED! (security risk)');
console.log('GOOGLE_CLIENT_ID:', typeof process.env.GOOGLE_CLIENT_ID === 'undefined' ? '✓ SECURE (not exposed)' : '✗ EXPOSED! (security risk)');
console.log('GEMINI_API_KEY:', typeof process.env.GEMINI_API_KEY === 'undefined' ? '✓ SECURE (not exposed)' : '✗ EXPOSED! (security risk)');
console.log('');
console.log('=== RESULT ===');
const allSecure = typeof process.env.NEXTAUTH_SECRET === 'undefined' && 
                  typeof process.env.GOOGLE_CLIENT_SECRET === 'undefined' &&
                  typeof process.env.GOOGLE_CLIENT_ID === 'undefined' &&
                  typeof process.env.GEMINI_API_KEY === 'undefined';
console.log(allSecure ? '✓ ALL SENSITIVE KEYS ARE SECURE!' : '✗ SECURITY ISSUE DETECTED!');
