import React from 'react'

function NewCollection() {
  return (
    <>
      <div className="image-banner mb-10 mt-10 bg-theme-bg text-theme-text color-group-1 fullwidth pt-0 pb-sm responsive">
        <figure className="relative isolate grid w-full md:min-h-[620px] min-h-[340px]" >
          <div className="absolute inset-0 z-0 h-full w-full">
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" preload="none" className="absolute inset-0 w-full h-full z-0 object-cover" poster="//mvintage.com/cdn/shop/files/preview_images/448a628059184dbb8760c17d553a4e7f.thumbnail.0000000000_2048x.jpg?v=1718957965"><source src="//mvintage.com/cdn/shop/videos/c/vp/448a628059184dbb8760c17d553a4e7f/448a628059184dbb8760c17d553a4e7f.HD-1080p-7.2Mbps-30727116.mp4?v=0" type="video/mp4" /><img src="//mvintage.com/cdn/shop/files/preview_images/448a628059184dbb8760c17d553a4e7f.thumbnail.0000000000_2048x.jpg?v=1718957965" /></video>
          </div>
          <figcaption className="z-10 h-full w-full px-6 py-8" style={{ backgroundImage: 'linear-gradient(134deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05) 100%)' }}>
            <div className="max-w-2xl mx-auto h-full w-full flex flex-col justify-end items-center text-center space-y-3">
              <div id="block--buttons_qGYQKh" className="-mx-2 flex max-md:flex-col max-md:w-full  max-w-full responsive " style={{ marginBottom: 0, marginTop: 0 }}>
                <a href="" className="button-primary bg-black text-white font-semibold  uppercase m-2" style={{ padding: "5px 15px 5px 15px" }}>
                  Shop now
                </a>
              </div>
              <div id="block--text_nXgaVC" className="w-full max-w-2xl responsive [text-align:inherit] max-md:[text-align:inherit]" style={{ marginBottom: 0, marginTop: 0 }}>
                <div className="font-group-3 text-theme-overlay-text"><h3 className="text-[36px] text-white font-bold">THE MADUMA <a href="" title="MADUMA COLLECTION">COLLECTION </a></h3></div>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>


    </>
  )
}

export default NewCollection
