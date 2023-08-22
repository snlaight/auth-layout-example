import { NextRequest, NextResponse } from 'next/server'
import {cookies} from 'next/headers'
import jwt from 'jsonwebtoken'

export const GET = async (req: NextRequest, res: NextResponse) => {

  const token = cookies().get('jwt')?.value

  if(!token) {
    return NextResponse.json({
      error: 'Unauthorized',
      status: 401
    })
  }

  const decoded = await jwt.decode(token) as {email: string}

  return NextResponse.json({
    message: 'Success',
    data: {
      user: {
        email: decoded.email
      }
    },
    status: 200
  })
}
