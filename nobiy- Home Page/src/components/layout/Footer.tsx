import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="box-border text-white m-0 p-5 md:p-10">
      <div className="box-border max-w-[500px] mb-8 md:mb-10 m-0 p-0">
        <h2 className="text-xl md:text-2xl mb-3 md:mb-4">Let's stay in touch</h2>
        <p className="text-sm md:text-base mb-3 md:mb-4">
          Enter your email address for new arrivals, discounts, promotions, and
          more!
        </p>
        <form
          className="box-border flex flex-col sm:flex-row mt-4 md:mt-5 m-0 p-0 gap-2 sm:gap-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="enter your email"
            className="box-border flex-1 m-0 px-4 sm:px-[30px] py-3 md:py-[15px] rounded-[50px] sm:rounded-[50px_0_0_50px] border-[none]"
          />
          <button
            type="submit"
            className="box-border text-white tracking-[0.75px] uppercase bg-[#151014] m-0 px-6 sm:px-10 py-3 md:py-[15px] rounded-[50px] sm:rounded-[0_50px_50px_0] border-[none] hover:bg-gray-800 transition-colors"
          >
            submit
          </button>
        </form>
      </div>

      <div className="box-border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10 m-0 p-0">
        <div>
          <h3 className="text-xl md:text-2xl mb-4 md:mb-5">Company</h3>
          <div className="flex flex-col gap-3 md:gap-[15px] text-sm md:text-base">
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link
              to="/refund"
              className="hover:text-gray-300 transition-colors"
            >
              Refund Policy
            </Link>
            <Link
              to="/shipping"
              className="hover:text-gray-300 transition-colors"
            >
              Shipping & Returns
            </Link>
            <Link
              to="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl mb-4 md:mb-5">Shop</h3>
          <div className="flex flex-col gap-3 md:gap-[15px] text-sm md:text-base">
            <Link
              to="/top-wear"
              className="hover:text-gray-300 transition-colors"
            >
              Top Wear
            </Link>
            <Link
              to="/bottom-wear"
              className="hover:text-gray-300 transition-colors"
            >
              Bottom Wear
            </Link>
            <Link
              to="/winter-wear"
              className="hover:text-gray-300 transition-colors"
            >
              Winter Wear
            </Link>
            <Link
              to="/jackets"
              className="hover:text-gray-300 transition-colors"
            >
              Jackets
            </Link>
            <Link
              to="/accessories"
              className="hover:text-gray-300 transition-colors"
            >
              Accessories
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl mb-4 md:mb-5">Information</h3>
          <div className="flex flex-col gap-3 md:gap-[15px] text-sm md:text-base">
            <Link
              to="/account"
              className="hover:text-gray-300 transition-colors"
            >
              My Account
            </Link>
            <Link to="/login" className="hover:text-gray-300 transition-colors">
              Login
            </Link>
            <Link to="/cart" className="hover:text-gray-300 transition-colors">
              My Cart
            </Link>
            <Link
              to="/checkout"
              className="hover:text-gray-300 transition-colors"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>

      <div className="box-border flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-5 mb-4 md:mb-5 m-0 p-0">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="148" height="40" viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="19.5" stroke="white"></circle> <path d="M25 15.7308H21.6508V13.8077C21.6508 12.8154 21.7306 12.1904 23.1359 12.1904H24.9107V9.13275C24.047 9.04237 23.1786 8.99814 22.3093 9.00006C19.7316 9.00006 17.8504 10.5933 17.8504 13.5183V15.7308H15V19.577L17.8504 19.576V28.2308H21.6508V19.5741L24.5639 19.5731L25 15.7308Z" fill="white"></path> <circle cx="74" cy="20" r="19.5" stroke="white"></circle> <circle cx="128" cy="20" r="19.5" stroke="white"></circle> </svg>`,
          }}
        />
        <button className="box-border border text-xs tracking-[0.6px] m-0 px-5 py-2.5 rounded-[21px] border-solid border-white hover:bg-white hover:text-black transition-colors">
          CONTACT
        </button>
      </div>

      <div className="box-border flex flex-col sm:flex-row justify-between text-xs sm:text-sm m-0 pt-4 sm:pt-5 p-0 border-t border-t-[rgba(255,255,255,0.07)] gap-3 sm:gap-0">
        <div>© 2025 by NoBiY. All Rights Reserved.</div>
      </div>
    </footer>
  );
};
