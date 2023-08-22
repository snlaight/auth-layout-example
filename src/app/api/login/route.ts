import { NextRequest, NextResponse } from 'next/server'
import * as jose from 'jose'

const JWT_SECRET = new TextEncoder().encode('jwt-secret');
const algorithm = 'HS256';

export const POST = async (req: NextRequest, res: NextResponse) => {
  const email = await req.json();

  const token = await new jose.SignJWT({email}).setProtectedHeader({alg: algorithm}).setExpirationTime('720h').sign(JWT_SECRET)

  const response = NextResponse.json({
    message: 'User signed in successfully',
    data: {
      user: {
        email
      }
    },
    status: 200
  });

  response.cookies.set('jwt', token, {maxAge: 30 * 24 * 60 * 60})

  return response;
}
