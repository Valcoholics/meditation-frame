import { getFrameAccountAddress } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {


  return new NextResponse(`<!DOCTYPE html>
    <html>
    <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://meditation-frame.vercel.app/breathe.gif" />
        <meta property="fc:frame:button:1" content="Stop" />
        <meta property="fc:frame:button:1:action" content="navigate" />
        <meta property="fc:frame:button:1:url" content="https://meditation-frame.vercel.app/" />
        <meta property="fc:frame:post_url" content="https://meditation-frame.vercel.app/api/frame" />
    </head>
    </html>`);
}



export async function POST(req: NextRequest): Promise<Response> {

  if(req.url === '/api/frame') {
    return NextResponse.redirect(new URL('/', req.url)); 
  }

  return getResponse(req);
}

export const dynamic = 'force-dynamic';
