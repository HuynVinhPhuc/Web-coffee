"use client";
import ScrollToTop from "react-scroll-up";

function ScrollToTopBtn() {
  return (
    <>
      <div className="relative z-[300]">
        <ScrollToTop showUnder={160}>
          <p className="font-bold text-sky-500 cursor-pointer text-3xl hover:border-2 hover:border-sky-500 hover:rounded-full p-3">
            <i className="fa fa-arrow-up"></i>
          </p>
        </ScrollToTop>
      </div>
    </>
  );
}

export default ScrollToTopBtn;
