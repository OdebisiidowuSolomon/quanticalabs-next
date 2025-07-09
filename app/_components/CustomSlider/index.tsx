'use client'


import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/app/globals.css';
import './style.css';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';



function CustomSlider() {

    const swiperRef = useRef<SwiperType | null>(null)

    const progressCircle: React.Ref<SVGSVGElement> = useRef(null);
    const progressContent: React.Ref<HTMLSpanElement> = useRef(null);
    // wiper: Swiper, timeLeft: number, percentage: number
    const onAutoplayTimeLeft = (_swiper: SwiperType, time: number, progress: number) => {
        progressCircle!.current!.style.setProperty('--progress', `${1 - progress}`);
        progressContent!.current!.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                // spaceBetween={30}
                // centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onSwiper={(swiper) => swiperRef.current = swiper}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><SingleSlider imagePath='/images/image_01_3.jpg' /></SwiperSlide>
                <SwiperSlide><SingleSlider imagePath='/images/image_02_2.jpg' /></SwiperSlide>
                <SwiperSlide><SingleSlider imagePath='/images/image_03_2.jpg' /></SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>

            </Swiper>
        </>
    );
}

export default CustomSlider



const SingleSlider = ({ imagePath }: { imagePath: string }) => {

    return <div className={`single-slider`} style={{ backgroundImage: `url(${imagePath})` }}>
        <div className='w-[1270px]! mx-auto!'>
            <div>
                {/* <p className='text-5xl! text-white! text-left! py-0! '> */}
                <p className='strong-p'>
                    You go about your <br />
                    business. We'll do <br />
                    the rest.
                </p>
            </div>


            <div>
                <p className='medium-p'>Accounting office and tax advisory services.</p>
                {/* <p className='text-2xl! text-white! text-left!'>Accounting office and tax advisory services.</p> */}
            </div>

            <div className='flexjustify-start!gap-7' style={{ display: 'flex', justifyContent: 'start', gap: 7 }}>
                <a className="more" href="/bookkeeping-quoting-calculator" title="Let's get started">Let's get
                    started</a>
                <a className="more style-4 template-video1 prettyPhoto"
                    href="https://www.youtube.com/watch?v=AivyFZXT2ek&amp;width=800&amp;height=450"
                    title="Accounting office and tax advisory services">Watch the video</a>
            </div>

        </div>
    </div>
    // return <div className={`h-full w-full items-center flex bg-[url('/images/image_01_3.jpg')]l bg-auto bg-center bg-no-repeat`} style={{ backgroundImage: `url(${imagePath})` }}>
    //     <div className='lg:ml-[15%] md:ml-[10%] flex flex-col items-start mt-16 bg-red-9001'>
    //         <div className='mx-auto flex justify-center md:mx-0 md:justify-start lg:mx-0 lg:justify-start'>
    //             <p className='text-[orange] text-[35px] text-center w-[70%] md:text-7xl md:text-start lg:text-7xl lg:leading-[80px] lg:w-[45%] lg:text-start'>The Story Of Modern Stylish Salon</p>
    //         </div>

    //         <div>
    //             <p className='text-white text-center text-[16px] w-[85%] mx-auto mt-8 md:w-[50%] md:text-start md:text-base md:mx-0 lg:w-[45%] lg:text-start lg:text-base lg:mx-0'>The Tale of the Chic Modern SalonExpert stylists in a lighthearted and welcoming setting. This is something you deserve.</p>
    //         </div>

    //         <button className='mt-16 py-3 px-6 text-base text-white mx-auto md:mx-0 lg:mx-0'>
    //             Shop Now
    //         </button>

    //     </div>
    // </div>
}

