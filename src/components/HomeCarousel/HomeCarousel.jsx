import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function HomeCarousel() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div>
      <Carousel
        swipeable={false}
        showDots={true}
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          [0, 1, 2].map(() => {
            return (
              <>
                <div>
                  <section id className="slideshow relative overflow-hidden min-h-[460px] md:min-h-[460px]  max-md:hidden pt-0 pb-0"  >
                    <div className="relative overflow-hidden max-w-full w-full">
                      <div className="grid relative min-h-[460px] md:min-h-[460px] overflow-x-auto scrollbar-none grid-cols-[var(--slideshow-grid-cols-mobile)] md:grid-cols-[var(--slideshow-grid-cols-desktop)] snap-mandatory snap-x" data-slideshow-container >
                        <figure id="block--slide_LgRD6U" data-slideshow-slide={0} className="snap-start group w-full h-full relative overflow-hidden bg-theme-bg text-theme-text color-inherit responsive">
                          <img src="//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396" width={4049} height={1800} loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-110 group-ac:scale-100 transition-all select-none" style={{ objectPosition: '50.0% 50.0%' }} sizes="100vw" role="presentation" srcSet="//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396&width=404 180w,//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396&width=674 300w,//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396&width=899 400w,//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396&width=1349 600w,//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396&width=1799 800w,//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396&width=2249 1000w,//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396&width=2699 1200w,//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396&width=4049 1800w,//mvintage.com/cdn/shop/files/DESKTOP_daf67b67-cc67-4edc-ba3a-1d12a7c09469.jpg?v=1720015396&width=5398 2400w" data-image="lazy" />
                          <figcaption className="relative z-10 inset-0 w-full h-full md:px-6 py-12" style={{ backgroundImage: 'linear-gradient(134deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.05) 100%)' }}>
                            <div className="container h-full w-full flex flex-col justify-end items-start text-left">
                              <div className="max-w-2xl grid" style={{ gap: 8 }}>
                                <div className="font-group-1 text-theme-overlay-text"><h2 className="text-[40px] font- text-white "><strong>NEW IN</strong></h2></div>
                                <div className="font-group-1 text-theme-overlay-text"><h2 className="text-[40px] font-normal text-white "><strong>STARLIGHT HOOP EARRINGS</strong></h2></div>
                                <div className="mt-4 -mx-2 flex flex-col sm:flex-row sm:justify-start text-left ">
                                  <a href="/products/starlight-hoop-earrings" className="button-primary bg-black text-white font-semibold  uppercase p-4 m-2">
                                    Shop now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </section>

                </div>
              </>
            )
          })
        }

      </Carousel>;
    </div>
  )
}

export default HomeCarousel
