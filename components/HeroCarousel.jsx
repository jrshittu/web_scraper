"use client"
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const heroImg = [
    {imgUrl: "/assets/images/hero-1.svg", alt: "Image 1"},
    {imgUrl: "/assets/images/hero-2.svg", alt: "Image 2"},
    {imgUrl: "/assets/images/hero-3.svg", alt: "Image 3"},
    {imgUrl: "/assets/images/hero-4.svg", alt: "Image 4"},
    {imgUrl: "/assets/images/hero-5.svg", alt: "Image 5"},
]

const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={2000}
        autoPlay
        showArrows={false}
      >
            {
                heroImg.map((image) => 
                    <Image 
                        src={image.imgUrl}
                        alt={image.alt}
                        width={424}
                        height={424}
                        className='object-fit'
                        key={image.alt}
                    />
                )
            }
      </Carousel>
    </div>
  )
}

export default HeroCarousel
