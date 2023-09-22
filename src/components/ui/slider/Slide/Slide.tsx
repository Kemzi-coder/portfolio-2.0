import {FC, HTMLAttributes} from "react";
import {SwiperSlideProps} from "swiper/react";

type Props = HTMLAttributes<HTMLElement> & SwiperSlideProps;

const Slide: FC<Props> = ({children, ...rest}) => {
	return <swiper-slide {...rest}>{children}</swiper-slide>;
};

export default Slide;
