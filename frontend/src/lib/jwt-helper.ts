/**
 * JWT Token Helper for Backend Authentication
 * Creates JWT tokens compatible with the secured backend
 */

import jwt from 'jsonwebtoken';

export interface BackendTokenPayload {
  sub: string;        // User ID
  email: string;
  name: string;
  role: string;
  exp?: number;       // Expiration timestamp
}

/**
 * Create a signed JWT token for backend authentication
 * Uses NEXTAUTH_SECRET from environment variables
 */
export function createBackendToken(user: {
  id: string;
  email?: string | null;
  name?: string | null;
  role?: string;
}): string {
  const secret = process.env.NEXTAUTH_SECRET;
  
  if (!secret) {
    throw new Error('NEXTAUTH_SECRET is not configured');
  }

  const payload: BackendTokenPayload = {
    sub: user.id,
    email: user.email || 'unknown@authenex.com',
    name: user.name || 'Anonymous User',
    role: user.role || 'USER',
    exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour expiration
  };

  return jwt.sign(payload, secret, { algorithm: 'HS256' });
}

/**
 * Decode a JWT token (for debugging)
 */
export function decodeToken(token: string): BackendTokenPayload | null {
  try {
    return jwt.decode(token) as BackendTokenPayload;
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
}
