"use client";

import {FC, useEffect, useState} from "react";
import styles from "./FloatingCircle.module.scss";

interface Props {
	radius?: number;
}

const FloatingCircle: FC<Props> = ({radius = 25}) => {
	const [translateX, setTranslateX] = useState(0);
	const [translateY, setTranslateY] = useState(0);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = e.pageX / window.innerWidth;
			const y = e.pageY / window.innerHeight;

			setTranslateX(-(x * 15));
			setTranslateY(-(y * 15));
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<svg
			className={styles.circle}
			style={{transform: `translate(${translateX}px, ${translateY}px)`}}
			viewBox={`0 0 ${radius * 2} ${radius * 2}`}
			width={radius * 2}
			height={radius * 2}
			xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_df_2_129)">
				<circle cx={radius} cy={radius} r={radius} />
			</g>
			<defs>
				<filter
					id="filter0_df_2_129"
					x="0"
					y="0"
					width={radius * 2}
					height={radius * 2}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="16" />
					<feGaussianBlur stdDeviation="32" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.00392157 0 0 0 0 0.466667 0 0 0 0 0.992157 0 0 0 0.15 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2_129"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_2_129"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="1.5"
						result="effect2_foregroundBlur_2_129"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default FloatingCircle;
