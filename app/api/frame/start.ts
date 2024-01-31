import { NextRequest, NextResponse } from 'next/server';
import { getResponse } from './route'; 

export async function POST(req: NextRequest): Promise<NextResponse> {
  return getResponse(req, 'start');
}


