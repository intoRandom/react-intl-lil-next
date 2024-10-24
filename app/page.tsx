'use client';

import Link from 'next/link';
import React from 'react';

import { useLanguage } from 'react-intl-lil';
import Image from 'next/image';

const Home = () => {
  const { gs, ga } = useLanguage();
  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col gap-6 w-full max-w-3xl p-5'>
        <div>{gs('home.subtitle')}</div>

        <section className='flex flex-col gap-3'>
          <h3 className='text-end'>
            {gs('home.developer')}
            <Link href={'https://intorandom.com'} className='underline'>
              intoRandom
            </Link>
          </h3>
        </section>
        <hr />

        <section className='flex flex-col gap-2'>
          <h3 className='text-lg'>{gs('home.sum.title')}</h3>
          <div>
            {gs('home.sum.data')}
            <Link href={'https://intorandom.com'} className='underline'>
              {gs('home.sum.repository')}
            </Link>
          </div>
        </section>

        <section className='flex flex-col gap-3'>
          <h3 className='text-lg'>{gs('home.inst.title')}</h3>
          <div>{gs('home.inst.data')}</div>
          <pre className='border-2 p-3'>npm install react-intl-lil</pre>
        </section>

        <section className='flex flex-col gap-3'>
          <h3 className='text-lg'>{gs('home.config.title')}</h3>
          <div>{gs('home.config.data')}</div>
          <Image alt='files' src={'/capture.png'} width={251} height={158} />
          <ul className='flex flex-col gap-3'>
            {ga('home.config.files').map((file, index) => (
              <li key={index} className='flex flex-col gap-2'>
                <div>{file.data}</div>
                <pre className='border-2 p-3'>{file.file}</pre>
              </li>
            ))}
          </ul>
        </section>

        <section className='flex flex-col gap-3 py-10'>
          <div>{gs('home.final')}</div>
          <Link
            href={'https://buymeacoffee.com/intorandom'}
            className='underline'
          >
            Buy me a coffee
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;
