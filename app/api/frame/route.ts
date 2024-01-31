//import { FrameRequest, getFrameAccountAddress, getFrameMessage } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

const NEXT_PUBLIC_URL = 'https://meditation-frame.vercel.app';
type Action = 'start' | 'stop';

async function getResponse(req: NextRequest): Promise<NextResponse> {

  //---------------------------------/
  // Get account address 

/*let accountAddress: string | undefined = '';
  
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body);

  if (isValid) {
    try {
      accountAddress = await getFrameAccountAddress(message, { NEYNAR_API_KEY: 'NEYNAR_API_DOCS' });
    } catch (err) {
      console.error(err);
    }
  } */

  //---------------------------------/
  // Dynamic post URL based on the action parameter

  const postUrl = action === 'start'
    ? 'https://meditation-frame.vercel.app/api/frame/start/'
    : 'https://meditation-frame.vercel.app/api/frame/stop/';


  //---------------------------------/
  // Common response structure for both start and stop with dynamic post URL

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${NEXT_PUBLIC_URL}/breathe.gif" />
    <meta property="fc:frame:button:1" content="Stop" />
    <meta property="fc:frame:post_url" content="${postUrl}" />
  </head></html>`);
}

export const dynamic = 'force-dynamic';
