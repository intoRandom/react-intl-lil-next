'use client';

import React from 'react';

import { useLangContext } from 'next-static-intl';

const Home = () => {
  const { lang, setLang } = useLangContext();
  return (
    <div>
      Home
      <div onClick={() => setLang('en')}>{lang}</div>
    </div>
  );
};

export default Home;
