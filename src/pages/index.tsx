import React from 'react';

import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      {/* <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/images/background.mp4" type="video/mp4" />
      </video> */}
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <ContactUs />
          <Canvas />
        </>
      </LazyShow>
      {/* <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow> */}
      {/* <LazyShow>
        <Pricing />
      </LazyShow> */}
      {/* <LazyShow>
        <>
          <Canvas />
          <Teams />
        </>
      </LazyShow> */}
      <Analytics />
    </div>
  );
};

export default App;
