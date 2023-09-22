"use client";

import {FC, HTMLAttributes, useEffect, useRef} from "react";
import {SwiperContainer, register} from "swiper/element";
import {SwiperProps} from "swiper/react";

type Props = HTMLAttributes<HTMLElement> & SwiperProps;

const Slider: FC<Props> = ({children, ...rest}) => {
	const swiperRef = useRef<SwiperContainer>(null);

	useEffect(() => {
		register();

		if (swiperRef.current) {
			const params: SwiperProps = {...rest};
			Object.assign(swiperRef.current, params);

			swiperRef.current.initialize();
		}
	}, [rest]);

	return (
		<swiper-container init={false} ref={swiperRef}>
			{children}
		</swiper-container>
	);
};

export default Slider;
