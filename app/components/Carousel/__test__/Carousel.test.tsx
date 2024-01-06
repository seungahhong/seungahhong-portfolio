import { render, screen, within } from '@testing-library/react';
import Carousel from '../Carousel';

describe('<Carousel />', () => {
	const setup = (
		images: {
			src: string;
			alt: string;
		}[] = [],
	) => render(<Carousel images={[...images]} />);

	it('should Carousel default render', () => {
		const images = [
			{
				src: 'https://seungahhong-portfolio.vercel.app/_next/image?url=%2Fwadiz-msw-logo1.png&w=3840&q=75',
				alt: '이미지 1',
			},
			{
				src: 'https://seungahhong-portfolio.vercel.app/_next/image?url=%2Fwadiz-msw-logo2.webp&w=3840&q=75',
				alt: '이미지 2',
			},
		];
		setup(images);

		// 화살표 버튼 엘리먼트 유무
		expect(screen.getAllByRole('button').length).toBeGreaterThan(0);

		// 왼쪽 버튼 엘리먼트 유무
		expect(screen.getByLabelText('LEFT 화살표 버튼')).toBeInTheDocument();

		// 오른쪽 버튼 엘리먼트 유무
		expect(screen.getByLabelText('RIGHT 화살표 버튼')).toBeInTheDocument();

		// 이미지 슬라이드 이미지 여부
		const list = screen.getByRole('list');
		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(images.length * 2);
	});
});
