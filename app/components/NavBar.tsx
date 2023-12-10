'use client';
import { FunctionComponent, useCallback, useState } from 'react';
import Image from 'next/image';
import useInView from '../../helpers/hooks/useInView';
import Social from '../components/Socials/Social';

import NavLink from './NavLink';
import Link from 'next/link';

const Navbar: FunctionComponent = () => {
  const { ref, inView } = useInView();
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleNavClose = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleNavOpen = useCallback(() => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <>
      <header className="relative left-0 top-0 bottom-0 w-[100%] p-[var(--spacing-7)] lg:fixed lg:w-[25%] lg:p-0">
        <Image
          ref={ref}
          src={inView ? '/background-NavBar.jpg' : ''}
          loading="eager"
          alt=""
          role="presentation"
          fill
          quality={80}
          aria-hidden
        />
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-[rgb(22,27,33)] bg-opacity-70" />
        <div className="flex absolute left-0 top-0 right-0 bottom-0 text-white font-semibold [&>a]:no-underline items-center flex-row p-[var(--spacing-5)] justify-between lg:left-auto lg:top-auto lg:right-auto lg:items-stretch lg:flex-col lg:p-[60px_30px_52px] lg:justify-normal">
          <Link href="/">
            <h3 className="text-white mb-0 text-[20px] lg:mb-[var(--spacing-5)] lg:text-[28px]">
              홍승아 포트폴리오
            </h3>
          </Link>
          <div
            className="block relative w-[24px] h-[20px] ml-[8px] [&>span:before]:top-[-8px] [&>span:after]:top-[8px] lg:hidden"
            role="button"
            aria-label="navigation-button"
            onClick={handleNavOpen}
          >
            <span className="absolute top-[8px] left-0 w-[100%] h-[3px] transition-all duration-100 bg-white opacity-70 before:absolute before:content-[''] before:top-[8px] before:left-0 before:w-[100%] before:h-[100%] before:transition-all before:duration-100 before:bg-white before:opacity-70 after:content-[''] after:absolute after:top-[8px] after:left-0 after:w-[100%] after:h-[100%] after:transition-all after:duration-100 after:bg-white after:opacity-70" />
          </div>
          <div className="hidden lg:block" aria-label="desktop-navigation">
            <div className="mt-[30px] [&>ul]:list-none [&>ul]:text-[20px] [&>ul]:leading-[1.6] [&>ul_a]:no-underline [&>ul_a]:font-normal [&>ul_a]:text-[#ffffff]">
              <NavLink />
            </div>
            <Social />
          </div>
        </div>
      </header>
      <section
        className={`fixed left-0 right-0 top-0 bottom-0 z-[2] bg-white transition-all ease duration-1000 p-[var(--spacing-5)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="title-1">Menu</h2>
          <Image
            src="/close_circle.svg"
            alt="Close Button"
            width={32}
            height={32}
            onClick={handleNavClose}
          />
        </div>
        <div className="mt-[30px] [&>ul]:list-none [&>ul]:text-[20px] [&>ul]:leading-[1.6] [&>ul_a]:no-underline [&>ul_a]:font-bold [&>ul_a]:text-[#000000]">
          <NavLink handleClose={handleNavClose} />
        </div>
        <Social />
      </section>
    </>
  );
};

export default Navbar;
