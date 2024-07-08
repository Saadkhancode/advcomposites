import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaPinterestP } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-between">
            <div>
              <h5 className="uppercase font-bold mb-4">Discover</h5>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Store Locator
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase font-bold mb-4">Customer Support</h5>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Jewellery Care
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Sunglasses Care
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Delivery & Returns
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Warranty
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase font-bold mb-4">Legal</h5>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Data protection
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h5 className="uppercase font-bold mb-4">Sign Up!</h5>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mr-2 text-black bg-transparent border-2 border-white"
              />
              <button type="submit" className="bg-white text-black p-2">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center md:text-left">
          <h5 className="uppercase font-bold mb-4">Mconcepts Limited</h5>

          <p className="mb-2">
            Address: 1, Triq ic-Citru c/w Triq Dun Karm, Iklin IKL9030
          </p>
          <p className="mb-2">VAT number: MT21969809</p>
          <p className="mb-2">Company registration no: C66448</p>
          <div className="flex justify-between mt-16">
            <div className="mt-4">
              <select className="bg-black text-white p-2">
                <option>Malta (EUR €)</option>
              </select>
            </div>
            <div>
              <h5 className="uppercase font-bold mb-4">FOLLOW US</h5>


              <div className="mt-4 flex justify-center space-x-2">
                <a href="#">
                  <MdFacebook size={30} />
                </a>
                <a href="#">
                  <FaPinterestP size={30} />
                </a>
                <a href="#">
                  <FaInstagram size={30} />
                </a>
                <a href="#">
                  <IoLogoTiktok size={30} />
                </a>
                <a href="#">
                  <AiOutlineYoutube size={30} />
                </a>
              </div>
            </div>

          </div>
        </div>
        <hr class="border-t border-t-theme-text/30 mt-10"></hr>
        <div className="mt-8 text-center">
          <p>© 2024 Mvintage - Powered by Shopify</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
