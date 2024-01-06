import type { CSSProperties, FunctionComponent } from 'react';
import { useMemo } from 'react';

import type { IProjectItem } from '../../../types';
import Carousel from '../Carousel';

interface IProjectProps {
	item: IProjectItem;
	style?: CSSProperties;
}

const Project: FunctionComponent<IProjectProps> = ({ item, style }) => {
	const descriptionElement = useMemo(() => {
		const description = item.description['sub-discription'];
		if (Array.isArray(description)) {
			return (
				<ul>
					{description.map((desc, index) => (
						<li
							key={`discription_${index}`}
							className="flex items-baseline before:inline before:content-['●']"
						>
							<span className="pl-[var(--spacing-5)] leading-5">{desc}</span>
						</li>
					))}
				</ul>
			);
		}
		return (
			<p className="whitespace-pre-line mt-[16px] lg:mt-0">{description}</p>
		);
	}, [item.description]);

	return (
		<div
			className="flex flex-col p-8 bg-white rounded-[8px] h-auto lg:h-[500px]"
			style={style}
		>
			<div className="flex flex-col items-center justify-center">
				<h2 className="font-bold text-center title-1">{item.title}</h2>
				<p className="mb-8 font-normal text-[1rem] text-[#6c757d] text-center opacity-80">
					{item.date}
				</p>
			</div>
			<div className="flex flex-col flex-1 lg:flex-row">
				<div className="mr-12 w-full h-[200px] lg:w-[40%] lg:h-auto">
					<Carousel images={item.images} />
				</div>
				<div className="w-full lg:w-[calc(60%_-_3rem)]">
					{descriptionElement}
					<hr className="m-[var(--spacing-5)]" />
					{item.description.labels.length > 0 && (
						<ol className="[&_*]:break-all">
							{item.description.labels.map((label, index) => (
								<li
									className="flex mb-[var(--spacing-5)] flex-col lg:flex-row"
									key={`Description_${index}`}
								>
									<span className="inline-block align-top w-[50px] min-w-[150px] font-extrabold mb-[4px] lg:mb-0 before:content-['●'] before:inline before:pr-2">
										{label.name}
									</span>
									{label.value.type === 'link' && (
										<a
											className="flex-1 text-[blue] underline"
											href={label.value.data}
											target="_blank"
											rel="noopener noreferrer"
										>
											{label.value.title || label.value.data}
										</a>
									)}
									{label.value.type === 'text' && (
										<span className="flex-1">{label.value.data}</span>
									)}
								</li>
							))}
						</ol>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
