import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Trending() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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


  const handleBeforeChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  const getLineWidth = () => {
    if (window.innerWidth >= 1024) return 100 / 5;
    if (window.innerWidth >= 464) return 100 / 2;
    return 100;
  };
  return (
    <>
      <header className="container  flex justify-between mb-3 relative mt-5 px-4" style={{ marginBottom: 28 }}>
        <div>
          <div className="font-group-1 "><h3 className="text-[36px] font-normal uppercase"><strong>TRENDING NOW</strong></h3></div>
        </div>
        <a href="/collections/trending-now" className="hf:underline group flex gap-2 items-center text-secondary-text">
          <div className="font-group-3 text-secondary-text"><p className="text-sm font-normal"><strong>SEE ALL</strong></p></div>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
            <path d="M3.33334 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </header>

      <Carousel
        swipeable={true}
        showDots={false}
        draggable={true}
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-100-px"
        beforeChange={(nextSlide) => handleBeforeChange(nextSlide)}

      >
        {
          [0, 1, 2, 3, 4, 5].map(() => {
            return (
              <article className="product-card overflow-hidden rounded-theme-lg flex flex-col space-y-1 relative items-stretch min-w-[180px] w-[calc(100vw/2)] md:w-[calc(var(--layout-page-width)/4)]" data-scroll-item style={{ background: '#ffffff' }} >
                <a className="product-card__image grid relative outline-none hf:outline-none h-0 pb-[125%]" href="/products/sliema-sandy-tortoise-shell-sunglasses" style={{ marginBottom: 12 }} aria-label="Sliema Sandy Tortoise Shell Sunglasses">
                  <div className="absolute inset-0 mx-4 h-full w-full overflow-hidden" style={{ background: '' }}>
                    <img src="https://mvintage.com/cdn/shop/files/SUN24_PRD014_CIKKASeaGreenSunglasses_frontal.jpg?v=1719556918&width=600" alt="Sliema Sandy Tortoise Shell Sunglasses" width={500} height={625} loading="eager" className="w-full h-full object-cover inset-0 drop-shadow-product select-none" sizes="(max-width: 768px) 98vw, (max-width: 1200px) 50vw, 28vw" srcSet="//mvintage.com/cdn/shop/files/SUN24_PRD016_SliemaSandyTortoiseShellSunglasses.jpg?v=1719387686&width=180 180w,//mvintage.com/cdn/shop/files/SUN24_PRD016_SliemaSandyTortoiseShellSunglasses.jpg?v=1719387686&width=300 300w,//mvintage.com/cdn/shop/files/SUN24_PRD016_SliemaSandyTortoiseShellSunglasses.jpg?v=1719387686&width=400 400w,//mvintage.com/cdn/shop/files/SUN24_PRD016_SliemaSandyTortoiseShellSunglasses.jpg?v=1719387686&width=600 600w" data-image="lazy" />
                  </div>
                  <div className="absolute inset-0 h-full w-full overflow-hidden opacity-0 transition-all duration-75 hf:opacity-100" style={{ background: '#ffffff' }}>
                    <div className="absolute inset-0" style={{ background: '' }} />
                    <img src="//mvintage.com/cdn/shop/files/SUN24_PRD016_FRONTAL_SliemaSandyTortoiseShellSunglasses.jpg?v=1719557001&width=500" alt="Sliema Sandy Tortoise Shell Sunglasses" width={500} height={625} loading="eager" className="w-full h-full object-cover inset-0 drop-shadow-product select-none" sizes="(max-width: 768px) 98vw, (max-width: 1200px) 50vw, 28vw" srcSet="//mvintage.com/cdn/shop/files/SUN24_PRD016_FRONTAL_SliemaSandyTortoiseShellSunglasses.jpg?v=1719557001&width=180 180w,//mvintage.com/cdn/shop/files/SUN24_PRD016_FRONTAL_SliemaSandyTortoiseShellSunglasses.jpg?v=1719557001&width=300 300w,//mvintage.com/cdn/shop/files/SUN24_PRD016_FRONTAL_SliemaSandyTortoiseShellSunglasses.jpg?v=1719557001&width=400 400w,//mvintage.com/cdn/shop/files/SUN24_PRD016_FRONTAL_SliemaSandyTortoiseShellSunglasses.jpg?v=1719557001&width=600 600w" data-image="lazy" />
                  </div>
                  <div className="absolute top-3 right-3 max-w-[65%] flex flex-wrap gap-1 justify-end responsive">
                  </div>
                </a>
                <div className="product-card__title relative flex flex-1 flex-col items-stretch space-y-1 px-3 pb-3">
                  <div style={{ marginBottom: 0 }}>
                    <a className="outline-none hf:outline-none hf:underline product-card-title font-semibold font-['Work Sans', sans-serif] text-[18px]" href="/products/sliema-sandy-tortoise-shell-sunglasses">
                      Sliema Sandy Tortoise Shell Sunglasses
                    </a>
                  </div>
                  <div className="product-card__price responsive" style={{ marginBottom: 0 }}>
                    <div className="product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap ">
                      {/* <span data-product-price-from-regular className="text-xs font-normal hidden">From:</span>
                      <span data-product-price-from-compare className="text-xs font-normal hidden">On Sale from:</span> */}
                      <span data-product-price-regular className>
                        <span className="money text-[14px] font-normal font-[Montserrat, sans-serif] text-gray-600">€69.99</span>
                      </span>
                      <span data-product-price-compare className="text-theme-text/50 line-through text-xs hidden">
                      </span>
                    </div>
                  </div>
                  <div className="product-card__button mt-auto flex w-full flex-1 flex-col justify-end self-end text-center ">
                    {/* <a className="button-primary w-full" style={{ display: 'var(--product-quick-view-off-display, flex)' }} href="/products/sliema-sandy-tortoise-shell-sunglasses">
                      View Product
                    </a> */}
                    <button className="mt-2 w-full button-primary bg-black text-white flex justify-center items-center p-2" data-product-quick-view-add-button="sliema-sandy-tortoise-shell-sunglasses" style={{ display: 'var(--product-quick-view-on-display, flex)' }}>
                      Add to Cart
                      <div data-loading-spinner className="absolute w-full h-full pointer-events-none z-50 transition-all duration-75 opacity-0  bg-inherit">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 2" preserveAspectRatio="xMidYMid" className="absolute left-1/2 top-1/2 h-full w-14 -translate-x-1/2 -translate-y-1/2 ">
                          <g transform="translate(20 1)">
                            <circle cx={0} cy={0} r={6} fill="currentColor">
                              <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
                            </circle>
                          </g>
                          <g transform="translate(40 1)">
                            <circle cx={0} cy={0} r={6} fill="currentColor">
                              <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
                            </circle>
                          </g>
                          <g transform="translate(60 1)">
                            <circle cx={0} cy={0} r={6} fill="currentColor">
                              <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
                            </circle>
                          </g>
                          <g transform="translate(80 1)">
                            <circle cx={0} cy={0} r={6} fill="currentColor">
                              <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
                            </circle>
                          </g>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </article>
            )
          })
        }

      </Carousel>
      <div className="relative mt-3 h-1 w-full bg-gray-300">
        <div
          className="absolute h-1 bg-black transition-all duration-500"
          style={{
            width: `${getLineWidth()}%`,
            left: `${currentSlide * getLineWidth()}%`,
          }}
        ></div>
      </div>

    </>
  )
}

export default Trending
