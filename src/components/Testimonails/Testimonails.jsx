import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
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
      <div
        id
        className="image-with-text fullwidth bg-theme-bg text-theme-text color-group-1 pt-0 pb-0 responsive"
      >
        <div className="grid md:grid-cols-2">
          <section className="h-full w-full flex flex-col py-8 pr-container xl:pl-20 pl-16 max-md:px-4 justify-center items-start text-left">
            <div className="grid gap-3">
              <div
                id="block--8ba04371-8046-4c49-90ca-9b5a3b413d3b"
                className="w-full max-w-2xl responsive [text-align:inherit] max-md:[text-align:inherit]"
                style={{ marginBottom: 0, marginTop: 0 }}
              >
                <div className="font-group-3 ">
                  <h2 className="text-[36px] font-bold px-6">
                    MUNITA{" "}
                    <a href="" title="MUNITA">
                      COLLECTION
                    </a>
                  </h2>
                </div>
              </div>
              <div
                id="block--86d6405b-845c-4278-9e51-45db81f5f52c"
                className="w-full max-w-2xl responsive [text-align:inherit] max-md:[text-align:inherit]"
                style={{ marginBottom: 0, marginTop: 0 }}
              >
                <div className="font-group-1 ">
                  <p className="">
                    Our Munita Collection was first introduced in 2019, when we
                    introduced designs inspired by the old Maltese currency. The
                    result was ornate vintage jewellery infused with romantic
                    memories. The new Munita Collection continues to be a
                    celebration of heritage, reminiscing our Maltese Lira days,
                    and indigenous animals that beautifully represent Malta’s
                    rich biodiversity.{" "}
                  </p>
                  <p className="_p" />
                  <p className="_p">
                    The garden is still home to these amazing birds, which
                    brought about the initial idea for the{" "}
                    <a
                      href="https://mvintage.com/collections/san-anton-gardens"
                      title="San Anton Gardens Collections"
                    >
                      San Anton Gardens Collection.
                    </a>
                  </p>
                </div>
              </div>
              <div
                id="block--0f2508d3-a2e6-4e16-8399-db2e79c1cfda"
                className="-mx-2 flex flex-col md:flex-row w-full flex max-w-full responsive sm:justify-start text-left"
                style={{ marginBottom: 0, marginTop: 0 }}
              >
                <a
                  href=""
                  className="button-primary m-2 bg-black text-white p-4"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </section>
          <section className="flex-1 w-full flex items-center justify-center overflow-hidden -order-1 max-md:-order-1">
            <figure className="relative grid flex-1 min-h-full pb-[100%]">
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="//mvintage.com/cdn/shop/files/MNT_MOD002_4x5_fcaa44d2-7903-476d-a10a-af16cc28473a.jpg?v=1718960842&width=1400"
                  width={1400}
                  height={1750}
                  loading="lazy"
                  className="relative w-full h-full object-cover select-none"
                  style={{ objectPosition: "50.0% 50.0%" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  role="presentation"
                  srcSet="//mvintage.com/cdn/shop/files/MNT_MOD002_4x5_fcaa44d2-7903-476d-a10a-af16cc28473a.jpg?v=1718960842&width=180 180w,//mvintage.com/cdn/shop/files/MNT_MOD002_4x5_fcaa44d2-7903-476d-a10a-af16cc28473a.jpg?v=1718960842&width=300 300w,//mvintage.com/cdn/shop/files/MNT_MOD002_4x5_fcaa44d2-7903-476d-a10a-af16cc28473a.jpg?v=1718960842&width=400 400w,//mvintage.com/cdn/shop/files/MNT_MOD002_4x5_fcaa44d2-7903-476d-a10a-af16cc28473a.jpg?v=1718960842&width=600 600w,//mvintage.com/cdn/shop/files/MNT_MOD002_4x5_fcaa44d2-7903-476d-a10a-af16cc28473a.jpg?v=1718960842&width=800 800w,//mvintage.com/cdn/shop/files/MNT_MOD002_4x5_fcaa44d2-7903-476d-a10a-af16cc28473a.jpg?v=1718960842&width=1000 1000w,//mvintage.com/cdn/shop/files/MNT_MOD002_4x5_fcaa44d2-7903-476d-a10a-af16cc28473a.jpg?v=1718960842&width=1200 1200w"
                  data-image="lazy"
                />
              </div>
            </figure>
          </section>
        </div>
      </div>

      <div
        id
        className="testimonials container-bg-full responsive pt-md pb-md bg-theme-bg text-theme-text color-group-1 grid lg:grid-cols-[300px_1fr] gap-6 p-10"
      >
        <header>
          <div className="font-group-1 ">
            <h4 className="_h4">
              <strong>WHAT PEOPLE ARE SAYING</strong>
            </h4>
          </div>
        </header>
        <section
          className="relative overflow-hidden pb-10"
          data-slideshow-new="template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f"
          data-slideshow-auto-rotate="true"
          data-slideshow-slide-duration={16}
        >

          <div
            className="grid relative min-h-[var(--min-h-mobile)] md:min-h-[var(--min-h)] overflow-x-auto scrollbar-none snap-mandatory snap-x"
            data-slideshow-container
          // style={{ gridTemplateColumns: "repeat(3, 100%)" }}
          >
            <Carousel
              swipeable={true}
              showDots={true}
              arrows={false}
              responsive={responsive}
              autoPlaySpeed={10000}
              infinite={true}
              autoPlay={true}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-100-px"
              beforeChange={(nextSlide) => handleBeforeChange(nextSlide)}
            >
              <div>
                <figure
                  id="block--template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2"
                  data-slideshow-slide={0}
                  className="snap-start group w-full h-full relative overflow-hidden grid gap-6"
                >
                  <header>
                    <div className="relative flex items-center h-6">
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_0_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_0_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={0}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={0}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_1_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_1_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={1}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={1}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_2_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_2_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={2}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={2}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_3_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_3_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={3}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={3}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_4_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-2_4_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={4}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={4}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                    </div>
                  </header>
                  <div className="font-group-1 ">
                    <h4 className="_h4">
                      <em>“</em>Have bought items both online and from stores
                      multiple times. Very happy with the excellent service.
                      Moreover, the communication with the customer is exceptional .
                      Keep it up!<em>”</em>
                    </h4>
                  </div>
                  <footer>
                    <div className="font-group-1 ">
                      <p className="_p">Jacqueline Sammut</p>
                    </div>
                  </footer>
                </figure>
              </div>
              <div>
                <figure
                  id="block--template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0"
                  data-slideshow-slide={1}
                  className="snap-start group w-full h-full relative overflow-hidden grid gap-6"
                >
                  <header>
                    <div className="relative flex items-center h-6">
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_0_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_0_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={0}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={0}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_1_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_1_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={1}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={1}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_2_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_2_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={2}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={2}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_3_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_3_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={3}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={3}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_4_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-0_4_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={4}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={4}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                    </div>
                  </header>
                  <div className="font-group-1 ">
                    <h4 className="_h4">
                      <em>“</em>A 5 star experience at the Iklin store. The staff
                      are professional, dedicated, amazing, and very helpful. The
                      jewellery is affordable and the quality is one of the best
                      around. All their collections are spectacular and unique.
                      Highly recommended!<em>”</em>
                    </h4>
                  </div>
                  <footer>
                    <div className="font-group-1 ">
                      <p className="_p">Valentina Tonna</p>
                      <p className="_p" />
                    </div>
                  </footer>
                </figure>
              </div>
              <div>
                <figure
                  id="block--template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1"
                  data-slideshow-slide={2}
                  className="snap-start group w-full h-full relative overflow-hidden grid gap-6"
                >
                  <header>
                    <div className="relative flex items-center h-6">
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_0_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_0_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={0}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={0}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_1_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_1_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={1}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={1}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_2_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_2_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={2}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={2}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_3_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_3_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={3}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={3}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                      <svg
                        className="w-auto h-full"
                        fill="url(#template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_4_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_)"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                        <linearGradient id="template--16211183272135__42d755bb-df97-44ec-8137-08107a944f3f-1681261669d8d76a32-1_4_template--21894178308430__42d755bb-df97-44ec-8137-08107a944f3f_">
                          <stop
                            offset="0%"
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={4}
                            stopColor="var(--color-review-stars--hex)"
                          />
                          <stop
                            offset="100%"
                            data-star-rating={4}
                            stopColor="rgb(var(--color-gray-400))"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgb(var(--color-gray-400))"
                          />
                        </linearGradient>
                      </svg>
                    </div>
                  </header>
                  <div className="font-group-1 ">
                    <h4 className="_h4">
                      <em>“The s</em>taff is very helpful. A selection of beautiful
                      jewelry with a touch of Maltese culture. All jewelry can be
                      personalised according to ones liking.<em>”</em>
                    </h4>
                  </div>
                  <footer>
                    <div className="font-group-1 ">
                      <p className="_p">Mary Rose Buhagiar</p>
                    </div>
                  </footer>
                </figure>
              </div>
            </Carousel>
          </div>
          <div className="absolute bottom-0 left-0 h-min items-end justify-center z-10 grid grid-flow-col-dense auto-cols-min gap-3 text-theme-text">
            {/* <button
              type="button"
              className="group -m-1 p-1 active"
              data-slideshow-slide-duration={16}
              data-slideshow-button={0}
            >
              <span className="sr-only">View Review 1</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 30 30"
                xmlSpace="preserve"
              >
                <circle
                  cx={15}
                  cy={15}
                  r={13}
                  fill="currentColor"
                  strokeWidth={4}
                  strokeDasharray={90}
                  className="group-ac:animate-dot -rotate-90 origin-center"
                  style={{ animationDuration: "16s" }}
                ></circle>
                <circle
                  cx={15}
                  cy={15}
                  r={13}
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth={4}
                  strokeDasharray={90}
                  className="group-ac:animate-circle -rotate-90 origin-center"
                  style={{ animationDuration: "16s" }}
                ></circle>
              </svg>
            </button> */}
            {/* <button
              type="button"
              className="group -m-1 p-1"
              data-slideshow-slide-duration={16}
              data-slideshow-button={1}
            >
              <span className="sr-only">View Review 2</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 30 30"
                xmlSpace="preserve"
              >
                <circle
                  cx={15}
                  cy={15}
                  r={13}
                  fill="currentColor"
                  strokeWidth={4}
                  strokeDasharray={90}
                  className="group-ac:animate-dot -rotate-90 origin-center"
                  style={{ animationDuration: "16s" }}
                ></circle>
                <circle
                  cx={15}
                  cy={15}
                  r={13}
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth={4}
                  strokeDasharray={90}
                  className="group-ac:animate-circle -rotate-90 origin-center"
                  style={{ animationDuration: "16s" }}
                ></circle>
              </svg>
            </button> */}
            {/* <button
              type="button"
              className="group -m-1 p-1"
              data-slideshow-slide-duration={16}
              data-slideshow-button={2}
            >
              <span className="sr-only">View Review 3</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 30 30"
                xmlSpace="preserve"
              >
                <circle
                  cx={15}
                  cy={15}
                  r={13}
                  fill="currentColor"
                  strokeWidth={4}
                  strokeDasharray={90}
                  className="group-ac:animate-dot -rotate-90 origin-center"
                  style={{ animationDuration: "16s" }}
                ></circle>
                <circle
                  cx={15}
                  cy={15}
                  r={13}
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth={4}
                  strokeDasharray={90}
                  className="group-ac:animate-circle -rotate-90 origin-center"
                  style={{ animationDuration: "16s" }}
                ></circle>
              </svg>
            </button> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Testimonials;
