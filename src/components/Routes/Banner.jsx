import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-[95%] mx-auto"
    >
       <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='lg:relative bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src="https://i.ibb.co/yV4vx7F/crafts-banner-image-1.jpg" alt="" className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-4xl lg:text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-24 w-1/3">
          
          Welcome to Misty Mrittika
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-2xl lg:text-3xl font-bold text-white text-left pt-8 lg:top-64 top-32 left-24 w-3/5">
          
          Crafts that touch your soul & mind
          </p></Fade>
          <Fade direction="up">
              <Link to="/allCraft"><button className="absolute btn btn-secondary text-xl font-semibold text-white text-left mt-6 bg-pink-400 lg:top-80 left-24">All Arts & Crafts</button></Link>
          </Fade>
        </div>
       </SwiperSlide>
       <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='relative  bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl   w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src="https://i.ibb.co/PD2n1z7/crafts-banner-image-11.jpg" alt="" className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-24 w-1/3">
          
          Welcome to Misty Mrittika
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-3xl font-bold text-white text-left pt-8 top-64 left-24 w-3/5">
          
          Crafts that touch your soul & mind
          </p></Fade>
          <Fade direction="up">
          <Link to="/allCraft"><button className="absolute btn btn-secondary text-xl font-semibold text-white text-left mt-6 bg-pink-400 lg:top-80 left-24">All Arts & Crafts</button></Link>
          </Fade>
        </div>
       </SwiperSlide>
       <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='relative  bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl   w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src="https://i.ibb.co/r7FnZYV/crafts-banner-image-2.jpg" alt="" className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-24 w-1/3">
          
          Welcome to Misty Mrittika
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-3xl font-bold text-white text-left pt-8 top-64 left-24 w-3/5">
          
          Crafts that touch your soul & mind
          </p></Fade>
          <Fade direction="up">
          <Link to="/allCraft"><button className="absolute btn btn-secondary text-xl font-semibold text-white text-left mt-6 bg-pink-400 lg:top-80 left-24">All Arts & Crafts</button></Link>
          </Fade>
        </div>
       </SwiperSlide>
       <SwiperSlide
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="1000"
      > 
    <div className='relative  bg-gradient-to-r from-slate-950 to-gray-950 rounded-xl   w-full h-[450px] lg:h-[550px] '> 
        <div className=" ">
        <img src="https://i.ibb.co/KzT13pn/crafts-banner-image-3.jpg" alt="" className="absolute opacity-50  w-full h-[450px] lg:h-[550px] rounded-xl  mx-auto"/>
        </div>
        <Fade direction="down">
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="2000"
            className="text-6xl absolute font-extrabold text-white text-left pt-4 lg:pt-20 top-1 left-24 w-1/3">
          
          Welcome to Misty Mrittika
          </h1></Fade>
          <Fade>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="2400"
            className="absolute text-3xl font-bold text-white text-left pt-8 top-64 left-24 w-3/5">
          
          Crafts that touch your soul & mind
          </p></Fade>
          <Fade direction="up">
          <Link to="/allCraft"><button className="absolute btn btn-secondary text-xl font-semibold text-white text-left mt-6 bg-pink-400 lg:top-80 left-24">All Arts & Crafts</button></Link>
          </Fade>
        </div>
       </SwiperSlide>
    </Swiper>
  );
};

export default Banner;