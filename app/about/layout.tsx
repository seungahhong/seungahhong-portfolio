import { ReactNode } from 'react';

export default function AboutLayout({ children }: { children: ReactNode }) {
	return (
		<section className="flex flex-col flex-1 max-w-[1024px] pt-[96px] pb-[60px] mx-[auto] my-[0]">
			{children}
		</section>
	);
}
