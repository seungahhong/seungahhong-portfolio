import React, { FunctionComponent, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useInView from '../../helpers/hooks/useInView';
import { ICardItemProps } from './type';

const CardC: FunctionComponent<ICardItemProps> = ({
  href,
  image,
  title,
  description,
  date,
}) => {
  const { ref, inView } = useInView();

  const withAnchore = useCallback(
    (href: string | undefined, WrappedComponent: React.ReactNode) => {
      if (!href) {
        return WrappedComponent;
      }

      return <Link href={href}>{WrappedComponent}</Link>;
    },
    []
  );

  return (
    <div className="animate-card relative top-0 left-0 right-0 bottom-0 pt-[100%] will-change-transform cursor-pointer">
      <figure className="absolute left-0 top-0 right-0 bottom-0 overflow-hidden rounded-[8px] shadow-[rgb(0_0_0_/_50%)_0px_0px_8px]">
        {withAnchore(
          href,
          <>
            <div className="absolute top-0 left-0 right-0 bottom-[30%] lg:bottom-0">
              <Image
                ref={ref}
                loading="eager"
                src={inView ? image.src : ''}
                alt={image.alt}
                fill
                style={{ objectFit: image.objectFit }}
              />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0)] hidden lg:block hover:bg-[rgba(0,0,0,0.7)] group">
              <figcaption className="flex flex-col items-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 transition-all duration-500 p-[var(--spacing-8)] title-4 text-white group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                <h2 className="m-[var(--spacing-4)_0] text-[1.5em] font-bold leading-[26px] tracking-[-0.6px]">
                  {title}
                </h2>
                {description && (
                  <p className="text-[16px] mt-[var(--spacing-4)]">
                    {description}
                  </p>
                )}
                {date && (
                  <p className="text-[16px] mt-[var(--spacing-4)]">{date}</p>
                )}
              </figcaption>
            </div>
            <div className="absolute w-full bottom-0 p-[var(--spacing-5)_var(--spacing-6)] bg-white shadow-[rgb(0_0_0_/_10%)_0px_0px_8px] text-[rgb(30,30,30)] block lg:hidden">
              <h2 className="m-[var(--spacing-4)_0] text-[1.5em] font-bold leading-[26px] tracking-[-0.6px]">
                {title}
              </h2>
              {description && (
                <p className="text-[16px] mt-[var(--spacing-4)]">
                  {description}
                </p>
              )}
              {date && (
                <p className="text-[16px] mt-[var(--spacing-4)] text-[#7e7e7e]">
                  {date}
                </p>
              )}
            </div>
          </>
        )}
      </figure>
    </div>
  );
};

export default CardC;
