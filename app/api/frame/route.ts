// Importing necessary modules
import { getFrameAccountAddress } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

// Function to handle button click and toggle the state
function toggleButtonState(currentState: string): string {
  return currentState === 'Start breathing exercise' ? 'Stop' : 'Start breathing exercise';
}

// Defining an async function to handle responses
async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Check if the request includes a parameter indicating the current button state
  const currentButtonState = (req as any).parameters && (req as any).parameters['fc:frame:button:1'];

  // Determine the new button state and set the image URL accordingly
  const newButtonState = toggleButtonState(currentButtonState);
  const imageUrl = newButtonState === 'Stop'
    ? 'https://meditation-frame.vercel.app/breathe.gif'
    : 'https://meditation-frame.vercel.app/start.png';

  // Construct the HTML response with dynamic content
  const htmlContent = `<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${imageUrl}" />
    <meta property="fc:frame:button:1" content="${newButtonState}" />
    <meta property="fc:frame:post_url" content="https://meditation-frame.vercel.app/api/frame" />
  </head></html>`;

  // Return the NextResponse with the dynamic HTML content
  return new NextResponse(htmlContent);
}

// Handling POST requests
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

// Exporting a constant variable
export const dynamic = 'force-dynamic';
