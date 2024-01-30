// Importing necessary modules
import { getFrameAccountAddress } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

// Defining an async function to handle responses
async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Check if the request includes a parameter indicating the current button state
  const currentButtonState = (req as any).parameters && (req as any).parameters['fc:frame:button:1'];

  // Determine the new button state and set the image URL accordingly
  const newButtonState = currentButtonState === 'Start breathing exercise' ? 'Stop' : 'Start breathing exercise';
  const imageUrl = newButtonState === 'Stop'
    ? 'https://meditation-frame.vercel.app/breathe.gif'
    : 'https://meditation-frame.vercel.app/start.png';

  // Construct the HTML response with dynamic content
  const htmlContent = `<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${imageUrl}" />
    <meta property="fc:frame:button:1" content="${newButtonState}" />
    <meta property="fc:frame:post_url" content="https://meditation-frame.vercel.app/api/frame" />
    
    <!-- JavaScript logic for handling button click -->
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        const stopButton = document.querySelector('[property="fc:frame:button:1"]');
        stopButton.addEventListener('click', function() {
          // Reload the page to handle the button toggle
          window.location.reload();
        });
      });
    </script>
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
