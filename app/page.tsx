import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['Start breathing exercise'],
  image: 'https://meditation-frame.vercel.app/park-1.png',
  post_url: 'https://meditation-frame.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Deep Breathing',
  description: 'Take a Breath',
  openGraph: {
    title: 'Deep Breathing',
    description: 'Take a Breath',
    images: ['https://meditation-frame.vercel.app/park-1.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Deep Breathing</h1>
    </>
  );
}
