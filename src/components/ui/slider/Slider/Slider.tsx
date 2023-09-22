"use client";

import {FC, HTMLAttributes, useEffect, useRef, useState} from "react";
import {SwiperContainer, register} from "swiper/element";
import {SwiperProps} from "swiper/react";
import styles from "./Slider.module.scss";
import classNames from "classnames";

type Props = HTMLAttributes<HTMLElement> & SwiperProps;

const Slider: FC<Props> = ({children, ...rest}) => {
	const swiperRef = useRef<SwiperContainer>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		register();

		if (swiperRef.current) {
			const params: SwiperProps = {...rest};
			Object.assign(swiperRef.current, params);

			swiperRef.current.initialize();
		}

		setIsLoaded(true);
	}, [rest]);

	return (
		<div
			className={classNames(styles.slider, {
				[styles["slider--loaded"]]: isLoaded
			})}>
			<swiper-container init={false} ref={swiperRef}>
				{children}
			</swiper-container>
		</div>
	);
};

export default Slider;
