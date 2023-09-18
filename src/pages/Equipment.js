import React from "react";
import image1 from '../media/lyd-086_downsized.jpg'
import image2 from '../media/lyd-124_downsized.jpg'
import image3 from '../media/lyd-129-crop_downsized.jpg'
import image4 from '../media/lyd-120_downsized.jpg'
import image5 from '../media/lyd-143_downsized.jpg'
import BackButton from "../components/BackButton";

const Equipment = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex lg:flex-row flex-col justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-neutral-300 pb-4">Equipment</h1>
                    <p className="font-normal text-base leading-6 text-white ">We have a variety of quality condensor, electret condensor, dynamic moving-coil and dynamic ribbon mics. Recording components are arranged for working quickly. Most of our recording, mixing and/or mastering is done "in the box" using Avid Pro Tools, Harrison Mixbus or PreSonus StudioOne. Outboard gear can also be utilized. Other redundant (but high-quality) systems are available. Isolated, balanced power and high-quality cabling ensure recordings with inaudible low noise and distortion.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md bg-neutral-800">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={image2} alt="Mixer featured Img" />
                            <img className="md:hidden block" src={image2} alt="Mixer featured Img" />
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={image3} alt="Mic1 featured Img" />
                            <img className="md:hidden block" src={image3} alt="Mic1 featured Img" />
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={image4} alt="Mic2 featued Img" />
                            <img className="md:hidden block" src={image4} alt="Mic2 featued Img" />
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={image5} alt="Piano featured img" />
                            <img className="md:hidden block" src={image5} alt="Piano featured img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-neutral-300 pb-4">Monitoring</h1>
                    <p className="font-normal text-base leading-6 text-white ">We use a "home-stereo" style monitor setup to listen to our mixes the way they would be heard on a home-stereo setup, but in a pro environment. But we also use nearfield monitors and multiple sets of headphones to check mixes and make sure they sound great, no matter where they are played.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={image1} alt="A studio control room" />
                </div>
            </div>

            <div className="pt-16 pb-0">
                <BackButton />
            </div>
        </div>
    );
};

export default Equipment;
