import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    className: "gallery",
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 1000,
    adaptiveHeight: true
};

const App = () => (
  <>
    <div className="flex flex-wrap mt-6 -mx-3">
          <div className="px-3 mt-0 mb-6 lg:mb-0 flex-1">
            <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
              <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                <h6 className="capitalize dark:text-white">Sales overview</h6>
                <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                  <i className="fa fa-arrow-up text-emerald-500"></i>
                  <span className="font-semibold">4% more</span> in 2021
                </p>
              </div>
              <div className="flex-auto p-4">
                <div>
                  <canvas id="chart-line" height="300"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 mt-0 max-w-[615px]">
            <div className='border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl rounded-2xl overflow-hidden'>
              <Slider {...settings}>
                <img
                  src="https://images.pexels.com/photos/1252873/pexels-photo-1252873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Forest"
                />
                <img
                  src="https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Sky"
                />
                <img
                  src="https://images.pexels.com/photos/1716158/pexels-photo-1716158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Trees"
                />
                <img
                  src="https://images.pexels.com/photos/577584/pexels-photo-577584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Trees"
                />
                <img
                  src="https://images.pexels.com/photos/262738/pexels-photo-262738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Desert"
                />
              </Slider>
            </div>
          </div>
        </div>
  </>
);
export default App;