import { FunctionComponent, useCallback } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import useInView from "../../../helpers/hooks/useInView";
import { ICardItemProps } from "../../../types";

const CardA: FunctionComponent<ICardItemProps> = ({
  href,
  image,
  title,
  description,
  date,
}) => {
  const { ref, inView } = useInView();

  const withAnchore = useCallback(
    (_href: string | undefined, WrappedComponent: ReactNode) => {
      if (!_href) {
        return WrappedComponent;
      }

      return <Link href={_href}>{WrappedComponent}</Link>;
    },
    [],
  );

  return (
    <div className="animate-card will-change-transform p-[20px] [&_a]:no-underline [&_a]:text-inherit">
      <div className="rounded-[16px] transform translate-x-0 transition-[all_0.2s] h-full cursor-pointer shadow-[rgb(0_0_0_/_15%)_0px_0px_8px] overflow-hidden hover:transform hover:translate-x-0 hover:translate-y-[-10px] hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]">
        {withAnchore(
          href,
          <>
            <div className="relative h-0 pb-[70%] overflow-hidden">
              <Image
                ref={ref}
                loading="eager"
                src={inView ? image.src : ""}
                alt={image.alt}
                fill
                aria-label="logo"
                style={{ objectFit: image.objectFit }}
              />
            </div>
            <div className="relative z-[1] p-5 bg-[rgba(248,249,250,0.8)] shadow-[rgb(0_0_0_/_10%)_0px_0px_8px]">
              <h2 className="m-[var(--spacing-5)_0] text-[1.5em] font-bold leading-[26px] tracking-[-0.6px]">
                {title}
              </h2>
              {description && (
                <p className="text-[16px] mt-[var(--spacing-2)]">
                  {description}
                </p>
              )}
              {date && (
                <p className="text-[16px] mt-[var(--spacing-4)] text-[#7e7e7e]">
                  {date}
                </p>
              )}
            </div>
          </>,
        )}
      </div>
    </div>
  );
};

export default CardA;
