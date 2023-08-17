import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="hidden xl:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img src={mainHero.img} className="side-image" alt="happy team image" />
    </div>
  );
};

export default MainHeroImage;
