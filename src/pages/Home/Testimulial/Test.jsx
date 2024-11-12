import { useState } from 'react';
import ReactPlayer from 'react-player';

const Test = ({url}) => {
    const [playing, setPlaying] = useState(false);

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    return (
        <div className="flex flex-col-reverse md:flex-row gap-0  max-w-full mt-16">
            
            <div className="bg-[#FEBF00] min-w-[300px] min-h-[300px] relative p-4 flex flex-col items-center pb-16 md:pb-0 md:w-1/2">
                <p className="text-center mb-4 p-4 mt-12 text-[20px]"><span className='text-5xl'>“</span>
                    You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.
                </p>
                <img className="mt-12 w-full md:w-1/2 " src="man.png" alt="User testimonial" />
                <hr style={{ borderColor: '#655417', borderWidth: '1px', borderStyle: 'solid'}} className='w-[250px] mt-4' />

                <img src="aaaaaaa.png" alt="" className="absolute left-0 bottom-0 md:bottom-12 " />
                <img src="line.png" alt="" className='ml-[200px] -mt-1' />
            </div>

            
            <div className="sm:w-[400px] md:w-full lg:max-w-[760px]} flex justify-center mt-4 md:mt-0">
                <ReactPlayer
                    url={url}
                    playing={true}
                    controls={true}
                    muted
                    width="100%"  
                    height="auto"
                    onPlay={handlePlayPause}
                    onPause={handlePlayPause}
                />
            </div>
        </div>
    );
};

export default Test;
