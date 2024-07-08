import React from 'react'

function Header() {
  return (
    <>
      <section className="header header--desktop z-50 relative  shadow-md   color-group-1 mx-12" >
        <div className="container flex justify-around items-center w-full h-[70px]">
          <button type="button" className="flex items-center w-8 h-8 mr-4 text-gray-500 hf:text-gray-900 flex-grow basis-0 justify-start lg:hidden" data-drawer-open="nav" data-hamburger-menu>
            <span className="sr-only">
              Menu
            </span>
            <svg viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-2">
              <path d="M1 7H19M1 1H19M1 13H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a href="/" className="grid max-lg:items-center   z-10 min-w-min lg:min-w-max max-h-full pr-4 md:pr-0 h-[35px] flex-grow lg:basis-0 max-lg:justify-center " >
            <img src="//mvintage.com/cdn/shop/files/logotype.png?height=70&v=1681160518" alt="Mvintage" width={243} height={70} loading="eager" className="h-auto w-auto max-h-[35px] max-w-full select-none" style={{ objectPosition: '50.0% 50.0%' }} sizes="(max-width: 768px) 98vw, (max-width: 1200px) 50vw, 28vw" srcSet="//mvintage.com/cdn/shop/files/logotype.png?v=1681160518&width=625 180w,//mvintage.com/cdn/shop/files/logotype.png?v=1681160518&width=1041 300w" data-image="eager" />
          </a>
          <nav className="z-20 self-start top-0 px-12 relative max-h-header overflow-y-hidden hidden mt-4  lg:grid" >
            <ul role="menu" className="flex space-x-2 overflow-x-clip snap-mandatory snap-always scrollbar-none relative overflow-y-hidden snap-x" >
              <li role="menuitem" className="group snap-start relative flex cursor-pointer items-center whitespace-nowrap border-y-2 border-transparent px-2 hover:border-b-gray-900 h-header pointer-events-auto " data-header-link="summer-sale" data-scroll-item>
                <a href="/collections/summer-sale-1" className="p-1 nav-link">
                  SUMMER SALE
                </a>
              </li>
              <li role="menuitem" className="group snap-start relative flex cursor-pointer items-center whitespace-nowrap border-y-2 border-transparent px-2 hover:border-b-gray-900 h-header pointer-events-auto " data-header-link="maduma" data-scroll-item>
                <a href="/collections/maduma-2" className="p-1 nav-link">
                  MADUMA
                </a>
              </li>
              <li role="menuitem" className="group snap-start relative flex cursor-pointer items-center whitespace-nowrap border-y-2 border-transparent px-2 hover:border-b-gray-900 h-header pointer-events-auto " data-header-link="new-in" data-scroll-item>
                <a href="/collections/collections-new-in" className="p-1 nav-link">
                  NEW IN
                </a>
              </li>
              <li role="menuitem" className="group snap-start relative flex cursor-pointer items-center whitespace-nowrap border-y-2 border-transparent px-2 hover:border-b-gray-900 h-header pointer-events-auto" data-header-link="jewellery" data-scroll-item>
                <a href="#" className="p-1 nav-link">
                  JEWELLERY
                </a>
              </li>
              <li role="menuitem" className="group snap-start relative flex cursor-pointer items-center whitespace-nowrap border-y-2 border-transparent px-2 hover:border-b-gray-900 h-header pointer-events-auto" data-header-link="collections" data-scroll-item>
                <a href="#" className="p-1 nav-link">
                  COLLECTIONS
                </a>
              </li>
              <li role="menuitem" className="group snap-start relative flex cursor-pointer items-center whitespace-nowrap border-y-2 border-transparent px-2 hover:border-b-gray-900 h-header pointer-events-auto" data-header-link="accessories" data-scroll-item>
                <a href="/pages/accessories" className="p-1 nav-link">
                  ACCESSORIES
                </a>
              </li>
              <li role="menuitem" className="group snap-start relative flex cursor-pointer items-center whitespace-nowrap border-y-2 border-transparent px-2 hover:border-b-gray-900 h-header pointer-events-auto" data-header-link="gifts" data-scroll-item>
                <a href="/pages/gifting" className="p-1 nav-link">
                  GIFTS
                </a>
              </li>
              <li role="menuitem" className="group snap-start relative flex cursor-pointer items-center whitespace-nowrap border-y-2 border-transparent px-2 hover:border-b-gray-900 h-header pointer-events-auto" data-header-link="mpowered" data-scroll-item>
                <a href="/" className="p-1 nav-link">
                  MPOWERED
                </a>
              </li>
            </ul>
            <button className="absolute top-1/2 -translate-y-1/2 left-4 p-1 text-gray-400 hf:text-gray-900 transition-all stroke-2" style={{ opacity: 0, pointerEvents: 'none' }} data-scroll-prev>
              <span className="sr-only">
                Show Previous Item
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="absolute top-1/2 -translate-y-1/2 right-4 p-1 text-gray-400 hf:text-gray-900 transition-all stroke-2" style={{ opacity: 1, pointerEvents: 'inherit' }} data-scroll-next>
              <span className="sr-only">
                Show Next Item
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
          <div className="absolute inset-0 w-full h-full  z-50 ac:opacity-100 ac:pointer-events-auto opacity-0 pointer-events-none transition-all duration-75" data-header-search-bar>
            <div className="container h-full flex items-center justify-end">
              <button type="button" className="flex items-center w-8 h-8 mr-4 text-gray-500 hf:text-gray-900 flex-grow basis-0 justify-start lg:hidden" data-drawer-open="nav" data-hamburger-menu>
                <span className="sr-only">
                  Menu
                </span>
                <svg viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-2">
                  <path d="M1 7H19M1 1H19M1 13H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <a href="/" className="grid max-lg:items-center max-lg:justify-center  z-10 min-w-min lg:min-w-max max-h-full pr-4 md:pr-0 h-[35px] flex-grow lg:basis-0 max-lg:justify-center !hidden md:!flex">
                <img src="//mvintage.com/cdn/shop/files/logotype.png?height=70&v=1681160518" alt="Mvintage" width={243} height={70} loading="eager" className="h-auto w-auto max-h-[35px] max-w-full select-none" style={{ objectPosition: '50.0% 50.0%' }} sizes="(max-width: 768px) 98vw, (max-width: 1200px) 50vw, 28vw" srcSet="//mvintage.com/cdn/shop/files/logotype.png?v=1681160518&width=625 180w,//mvintage.com/cdn/shop/files/logotype.png?v=1681160518&width=1041 300w" data-image="eager" />
              </a>
              <div className="hidden md:flex justify-end space-x-4 pl-4 basis-0 flex-grow flex-1 ">
                <div className="hidden md:flex justify-end space-x-4 items-center">
                  <button type="button" data-drawer-open="search" data-header-search-button className="relative text-primary-outline hover:text-primary-outline">
                    <span className="sr-only">
                      Search
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[1.5px]" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fillRule="evenodd" d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <a href="/account/login" className="hidden md:inline-flex relative text-primary-outline hover:text-primary-outline">
                    <span className="sr-only">
                      Login
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[1.5px]" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" fillRule="evenodd" d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM6.5 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM12 17c-3.191 0-6.107 1.389-8.272 3.686a1 1 0 0 1-1.456-1.372C4.778 16.656 8.205 15 12 15s7.222 1.656 9.728 4.314a1 1 0 0 1-1.456 1.372C18.107 18.389 15.192 17 12 17Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <button type="button" data-drawer-open="cart" className="hidden md:inline-flex relative text-primary-outline hover:text-primary-outline">
                    <span className="sr-only">
                      Cart
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[1.5px]">
                      <path d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute flex items-center justify-center bg-primary-bg text-primary-text rounded-full -right-1.5 -top-1 h-4 w-4 text-[10px] font-medium tracking-tight leading-none">
                      <span data-cart-item-count>0</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-4 pl-4 basis-0 flex-grow flex-1 ">
            <div className="flex justify-end space-x-4 items-center">
              <button type="button" data-drawer-open="search" className="relative text-primary-outline hover:text-primary-outline">
                <span className="sr-only">
                  Search
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[1.5px]" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10Z" clipRule="evenodd" />
                </svg>
              </button>
              <a href="/account/login" className="hidden md:inline-flex relative text-primary-outline hover:text-primary-outline">
                <span className="sr-only">
                  Login
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[1.5px]" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM6.5 7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM12 17c-3.191 0-6.107 1.389-8.272 3.686a1 1 0 0 1-1.456-1.372C4.778 16.656 8.205 15 12 15s7.222 1.656 9.728 4.314a1 1 0 0 1-1.456 1.372C18.107 18.389 15.192 17 12 17Z" clipRule="evenodd" />
                </svg>
              </a>
              <button type="button" data-drawer-open="cart" className="relative text-primary-outline hover:text-primary-outline">
                <span className="sr-only">
                  Cart
                </span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-[1.5px]">
                  <path d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute flex items-center justify-center bg-primary-bg text-primary-text rounded-full -right-1.5 -top-1 h-4 w-4 text-[10px] font-medium tracking-tight leading-none">
                  <span data-cart-item-count>0</span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <nav className="hidden lg:block">
          {/* <div className="absolute top-full -mt-4 pt-[1.25rem] cursor-default opacity-0 transition-all duration-75 pointer-events-none hfwa:!pointer-events-auto hfwa:!opacity-100" data-header-link-dropdown="jewellery">
            <ul role="list" className=" p-6 shadow-xl drop-shadow-lg space-y-3 min-w-[220px]">
              <li className="relative">
                <a href="/collections/necklaces-chains" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Chains</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/pendants" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Pendants</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="https://mvintage.com/pages/engravables-collection" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Engravings</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Twists</span>
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[1.5px]">
                    <path d="M3.33334 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="absolute left-full -top-4 -m-4 p-4 pl-[2.625rem] pointer-events-none transition-all opacity-0 peer-hfwa:opacity-100 peer-hfwa:pointer-events-auto hfwa:pointer-events-auto hfwa:opacity-100">
                  <ul role="menu" className=" p-6 shadow-md drop-shadow-sm space-y-3">
                    <li role="menuitem">
                      <a href="https://mvintage.com/pages/twist-1" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Twist</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="https://mvintage.com/pages/mvintage-mini-twists" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Mini Twist</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative">
                <a href="/collections/bracelets-1" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Bracelets</span>
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[1.5px]">
                    <path d="M3.33334 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="absolute left-full -top-4 -m-4 p-4 pl-[2.625rem] pointer-events-none transition-all opacity-0 peer-hfwa:opacity-100 peer-hfwa:pointer-events-auto hfwa:pointer-events-auto hfwa:opacity-100">
                  <ul role="menu" className=" p-6 shadow-md drop-shadow-sm space-y-3">
                    <li role="menuitem">
                      <a href="/collections/bangles" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Bangles</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/charm-bracelets" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Charm Bracelets</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative">
                <a href="/collections/anklet" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Anklets</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="#" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Earrings</span>
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[1.5px]">
                    <path d="M3.33334 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="absolute left-full -top-4 -m-4 p-4 pl-[2.625rem] pointer-events-none transition-all opacity-0 peer-hfwa:opacity-100 peer-hfwa:pointer-events-auto hfwa:pointer-events-auto hfwa:opacity-100">
                  <ul role="menu" className=" p-6 shadow-md drop-shadow-sm space-y-3">
                    <li role="menuitem">
                      <a href="/collections/studs" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Stud Earrings</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/hoops" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Hoop Earrings</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/earring-pendants" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Earring Pendants</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative">
                <a href="/collections/rings" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Rings</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/jewellery-boxes" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Jewel Boxes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/other-accessories" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Other Accessories </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div className="absolute top-full -mt-4 pt-[1.25rem] cursor-default opacity-0 transition-all duration-75 pointer-events-none hfwa:!pointer-events-auto hfwa:!opacity-100" data-header-link-dropdown="collections">
            <ul role="list" className=" p-6 shadow-xl drop-shadow-lg space-y-3 min-w-[220px]">
              <li className="relative">
                <a href="/collections/pink-vibes" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Pink Vibes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/anklet" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Anklets</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/birthstones" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Birthstones</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/birthflowers" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Birth Flowers</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/sigill" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Initials</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/zodiac-lp" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Zodiac</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/meaningful-stone-page" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Meaningful Stones </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="https://mvintage.com/pages/cikka" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">ĊIKKA</span>
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[1.5px]">
                    <path d="M3.33334 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="absolute left-full -top-4 -m-4 p-4 pl-[2.625rem] pointer-events-none transition-all opacity-0 peer-hfwa:opacity-100 peer-hfwa:pointer-events-auto hfwa:pointer-events-auto hfwa:opacity-100">
                  <ul role="menu" className=" p-6 shadow-md drop-shadow-sm space-y-3">
                    <li role="menuitem">
                      <a href="/collections/all-cikka-products" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">ALL ĊIKKA PRODUCTS</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-empowerment" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Empowerment</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/ikka-birthstones" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Birthstones</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-zodiac" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Zodiac</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-friendship" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Friendship</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-initials" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Intitials</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-love" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Love</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-humour" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Humour</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-gifting" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Gifts</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/ikka-heritage" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Heritage</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-travel" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Wanderlust</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-pets" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Pet Lovers</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/cikka-sale" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Sale</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative">
                <a href="https://mvintage.com/pages/heritage-collections" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Heritage</span>
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[1.5px]">
                    <path d="M3.33334 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="absolute left-full -top-4 -m-4 p-4 pl-[2.625rem] pointer-events-none transition-all opacity-0 peer-hfwa:opacity-100 peer-hfwa:pointer-events-auto hfwa:pointer-events-auto hfwa:opacity-100">
                  <ul role="menu" className=" p-6 shadow-md drop-shadow-sm space-y-3">
                    <li role="menuitem">
                      <a href="/collections/festa" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Festa</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/speranza" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Speranza</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/creatures" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Creatures</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/habbata-3" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Ħabbata</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/kavallieri-all" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Kavallieri</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/reign-products" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Fleur de Lis</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/sigill" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Is-Siġill </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/muftieh-lp-1" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Il-Muftieħ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/ta-pinu-pendants" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Ta' Pinu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/maduma-2" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Maduma</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/goddesses" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Goddess</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative">
                <a href="/collections/pearls" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Pearls</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="https://mvintage.com/pages/special-moments" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Special Moments</span>
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-[1.5px]">
                    <path d="M3.33334 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="absolute left-full -top-4 -m-4 p-4 pl-[2.625rem] pointer-events-none transition-all opacity-0 peer-hfwa:opacity-100 peer-hfwa:pointer-events-auto hfwa:pointer-events-auto hfwa:opacity-100">
                  <ul role="menu" className=" p-6 shadow-md drop-shadow-sm space-y-3">
                    <li role="menuitem">
                      <a href="/collections/butterfly" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Renewal</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/clock" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">The Clock</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/good-luck" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Good Luck</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/compass-lp" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">The Compass</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="/collections/keep-dreaming" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Keep Dreaming</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                    <li role="menuitem">
                      <a href="tel:273628201159" className="megamenu-link flex items-center w-full justify-between hfa:/70 stroke-0 hfa:stroke-2">
                        <span className="pr-6 whitespace-nowrap">Anchor Of Friendship</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                          <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="relative">
                <a href="/collections/men" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">For Him</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/girls-just-wanna" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">For Girls</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="/collections/pets" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">Pets &amp; Friends</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className="relative">
                <a href="https://mvintage.com/pages/cikka" className="nav-link peer flex items-center w-full justify-between hfa:/70 stroke-0 [&:hover_>_svg]:stroke-2 [&:focus_>_svg]:stroke-2 [&:active_>_svg]:stroke-2">
                  <span className="pr-6 whitespace-nowrap">CIKKA</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
            </ul>
          </div> */}
        </nav>
        <nav>
        </nav>
      </section>

    </>
  )
}

export default Header
