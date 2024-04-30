import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-[95%] mx-auto"
    >
      <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      >

        <div className=' bg-opacity-25 bg-[url("https://i.ibb.co/yV4vx7F/crafts-banner-image-1.jpg")]  bg-no-repeat bg-cover rounded-xl   w-full h-[450px] lg:h-[550px] '>
        
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-4xl font-extrabold text-orange-500 text-center pt-4 lg:pt-32"
          >
            Welcome to Misty Mrittika
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="text-xl font-semibold text-orange-500 text-center pt-8"
          >
            Crafts that touch your soul & mind
          </p></Fade>
          <Fade direction="up">
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="2800"
            className="text-xl w-4/5 mx-auto font-semibold text-orange-500 text-center pt-8"
          >
            WE CURATE INSPIRATION FOR THE HOME, CONNECTING THE CREATIVE WORK OF ARTISANS & DESIGNERS TO PEOPLE AND PLACES AROUND THE WORLD
          </p></Fade>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"
          src="https://i.ibb.co/PD2n1z7/crafts-banner-image-11.jpg"
          alt="real estate image"
        />
       
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"
          src="https://i.ibb.co/r7FnZYV/crafts-banner-image-2.jpg"
          alt="real estate image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[450px] lg:h-[550px] rounded-xl mx-auto"
          src="https://i.ibb.co/KzT13pn/crafts-banner-image-3.jpg"
          alt="real estate image"
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;