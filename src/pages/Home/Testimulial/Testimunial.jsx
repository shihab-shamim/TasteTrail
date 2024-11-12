import { useEffect, useState } from "react";
import Test from "./Test";

const Testimunial = ({ title, dis, videoData = [] }) => {
    const autoSlide = true; 
    const autoSlideInterval = 3000; 
    const [curr, setCurr] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

    const prev = () => setCurr((curr) => (curr === 0 ? videoData.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === videoData.length - 1 ? 0 : curr + 1));

    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval); 
    }, [autoSlide, autoSlideInterval, videoData.length]);

 
    const getTranslateValue = () => {
        const cardWidth = windowWidth <= 400 ? windowWidth : 1344; 
        const totalCards = videoData.length;
        const maxTranslateX = cardWidth * (totalCards - 1); 

        
        const translateValue = curr * cardWidth;
        return `translateX(-${Math.min(translateValue, maxTranslateX)}px)`;
    };

    return (
        <div className=" py-12 md:py-28 px-5 md:px-10 relative">
            
            <div className="max-w-[1320px] mx-auto">
                <div className="flex items-center">
                    <div className="">
                        <p className="text-[#BD1F17] text-[20px] leading-[32px] flex items-center gap-2">
                            <img src="carosel.png" alt="" />
                            {title}
                        </p>
                        <h2 className="text-[20px] md:text-[62px] leading-[62px] text-[#181818] font-bold mt-2">
                            {dis}
                        </h2>
                    </div>

                    
                    <div className="hidden md:flex ml-auto">
                        <div className="flex">
                            <img
                                onClick={prev}
                                src="arrow.png"
                                className="cursor-pointer"
                                alt="Previous"
                            />
                            <img
                                onClick={next}
                                src="redArow.png"
                                className="cursor-pointer"
                                alt="Next"
                            />
                        </div>
                    </div>
                </div>

                
                <div className="overflow-hidden relative mt-6">
                    <div
                        className="flex gap-8 transition-transform ease-out duration-500"
                        style={{ transform: getTranslateValue() }}
                    >
                        {videoData.map((item, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 ${windowWidth <= 400 ? 'w-full' : 'max-w-[1320px]'}`}
                            >
                                <Test url={item?.url}></Test>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="flex justify-center md:hidden mt-10">
                    <div className="flex">
                        <img
                            onClick={prev}
                            src="arrow.png"
                            className="cursor-pointer"
                            alt="Previous"
                        />
                        <img
                            onClick={next}
                            src="redArow.png"
                            className="cursor-pointer"
                            alt="Next"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimunial;