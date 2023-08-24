import React from 'react';

import { TypeAnimation } from 'react-type-animation';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{' '}
          <span className={`block main-hero-subtitle xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          <p style={{ fontSize: '1.5em' }}>A VS Code extension to unlock</p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              mainHero.descriptionArr[0] || '',
              1000,
              mainHero.descriptionArr[1] || '',
              1000,
              mainHero.descriptionArr[2] || '',
              1000,
              mainHero.descriptionArr[3] || '',
              1000,
              mainHero.descriptionArr[4] || '',
              1000,
            ]}
            speed={50}
            style={{ fontSize: '1.5em' }}
            repeat={Infinity}
          />
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background get-started md:py-4 md:text-lg md:px-10`}
            >
              {/* <img src={mainHero.primaryAction.img} alt="VS code"></img> */}
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary email-us bg-background md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
