'use client';

import React from 'react';
import { useLanguage } from 'react-intl-lil';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

const Navigation = () => {
  const { gs, getLanguage, setLanguage } = useLanguage();

  const SetLang = () => {
    if (getLanguage === 'es') {
      setLanguage('en');
    } else {
      setLanguage('es');
    }
  };

  return (
    <nav className='sticky top-0 mx-auto p-5 flex flex-row justify-between items-center w-full max-w-3xl backdrop-blur-sm bg-background/50'>
      <div className='text-red-500 text-3xl font-bold'>{gs('home.title')}</div>
      <div>
        <Button variant={'outline'} onClick={SetLang}>
          {getLanguage.toUpperCase()}
          <Languages />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
