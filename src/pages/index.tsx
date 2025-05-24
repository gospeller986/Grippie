import React from 'react'
import Inner from '@/components/Layout/Inner';
import { FullScreenLandingPage } from '@/components/FullScreenLandingPage';
import { SmallScreenLandingPage } from '@/components/SmallScreenLandingPage';


export default function Home() {
  return (
    <Inner>
      <div>
        <div className='hidden md:block'>
          <FullScreenLandingPage />
        </div>
        <div className='md:hidden block'>
          <SmallScreenLandingPage />
        </div>
      </div>
    </Inner>
  );
}
