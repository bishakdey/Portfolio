import React from 'react'
import { useState, useRef } from 'react'
import { useEffect } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti'
import { IoCodeDownloadSharp } from 'react-icons/io5'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoPreview from './VideoPreview';

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [previewIndex, setPreviewIndex] = useState(2); // Start with 2 since 1 is current
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4; // Total number of videos to load
    const nextVideoRef = useRef(null);
    const mainVideoRef = useRef(null);

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1; // Calculate the next video index

    const handleMiniVDclick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex); // Increment the index for the next video
        setIsLoading(false); // Set loading state to true when clicked
        }

    const handleVideoLoad = () => {
        setLoadedVideos((prevCount) => prevCount + 1);    
    }

    useEffect(() => {
        if (loadedVideos === totalVideos - 1 ) {
            setIsLoading(false); // Set loading state to false when all videos are loaded
        }
    }, [loadedVideos])

    // Preload videos
    useEffect(() => {
        if (nextVideoRef.current) {
          // Update video src manually (in case it's not remounting)
          nextVideoRef.current.src = getVideoSrc((currentIndex % totalVideos) + 1);
      
          // Reset scale so it's visible on hover again
          gsap.set(nextVideoRef.current, {
            scale: 1,
            opacity: 1,
          });
        }
      }, [currentIndex]);

      useEffect(() => {
        const video = mainVideoRef.current;
        if (!video) return;
      
        const handleEnded = () => {
            // Fade out
            gsap.to(video, {
              opacity: 0,
              duration: 0.6,
              onComplete: () => {
                // Change to next video
                const nextIndex = (currentIndex % totalVideos) + 1;
                setCurrentIndex(nextIndex);
        
                // Delay fade-in slightly
                setTimeout(() => {
                  if (mainVideoRef.current) {
                    mainVideoRef.current.play();
                    gsap.to(mainVideoRef.current, {
                      opacity: 1,
                      duration: 0.6,
                      ease: 'power2.out',
                    });
                  }
                }, 100);
              },
            });
        };
      
        video.addEventListener('ended', handleEnded);
      
        return () => {
          video.removeEventListener('ended', handleEnded);
        };
      }, [currentIndex]);
      
      

    useGSAP(() => {
        if (hasClicked){
            gsap.set('#next-video', {visibility: 'visible'});
            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                duration: 1,
                width: '100%',
                height: '100%',
                ease: 'power1.inOut',
                onStart: () =>  nextVideoRef.current.play(),
            });

            gsap.to('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
                
            });
        }
    }, {dependencies: [currentIndex], revertOnUpdate: true})

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%',

        });

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        }
        )
    },)

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;



  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>

        {isLoading && (
            <div className='flex center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
                <div className='three-body'>
                    <div className='three-body__dot'></div>
                    <div className='three-body__dot'></div>
                    <div className='three-body__dot'></div>
                </div>
            </div>
        )}
        <div id="video-frame" className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-gradient-to-b from-[#0f3266] to-[#00000FFA] text-white'>
            <div>
           
                <div className='mask-clip-path absolute-center absolute z-50 size-64 
                cursor-pointer overflow-hidden rounded-lg '>
                    
                    <VideoPreview>
                    <div onClick={handleMiniVDclick} className='origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-500 ease-in-out'>
                        <video
                            ref={nextVideoRef}
                            src={getVideoSrc(upcomingVideoIndex)}
                            loop
                            muted
                            id='current-video'
                            className='size-64 origin-center scale-150 object-cover object-center'
                            onLoadedData={handleVideoLoad}
                            
                            
                        />
                    </div>
                    </VideoPreview>
                    
                </div>
                <video
                ref={mainVideoRef}
                src={getVideoSrc(currentIndex)}
                loop={false} 
                muted
                autoPlay
                id='next-video'
                className='absolute-center invisible absolute z-20 size-64 object-cover object-center opacity-100 transition-opacity duration-500'
                onLoadedData={handleVideoLoad}
                />

                <video 
                src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                loop
                autoPlay
                muted
                className='absolute left-0 top-0 size-full object-cover object-center' 
                onLoadedData={handleVideoLoad}
                />

                {/* <video
                src={getVideoSrc((currentIndex % totalVideos) + 1)}
                preload="auto"
                muted
                style={{ display: 'none' }}
                />  */}
                
            </div>
            <p className='absolute right-5 bottom-5 z-50 text-xs md:text-md lg:text-lg font-orbitron-regular text-blue-50 right-6 opacity-0.5'>Keep clicking in the center for Magic</p>
            <h1 className='absolute right-5 bottom-5 z-50 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-orbitron-extra-bold text-blue-50 opacity-100 transition-all duration-500 animate-font bottom-8'>IMAGINE </h1>

                <div className='absolute left-5 top-20 z-40 size-full sm:px-10'>
                    <div className='mt-24 px-5 text-blue-50'>Bishak's Work</div>
                    <p className='mb-5 max-w-64 font-robert-regular px-10 text-xs'>Check out my work</p>
                    <div className='px-5'>
                    <a href='/files/BishakDey_Software_Engineer_Resume.pdf' target='_blank' rel='noopener noreferrer'>
                        <Button id='download-resume' title='Resume' leftIcon={<IoCodeDownloadSharp />} containerClass='bg-yellow-300 flex-center gap-1' />
                    </a>     
                    </div>
                </div>
            </div>
            <p className='absolute right-5 bottom-5 text-xs md:text-md lg:text-lg  font-orbitron-regular text-black right-6 opacity-0.5'>Keep clicking in the center for Magic</p>
            <h1 className='absolute right-5 bottom-5 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-orbitron-extra-bold text-black opacity-100 transition-all duration-500 animate-font bottom-8'>IMAGINE </h1>
           
    </div>
  )
}

export default Hero