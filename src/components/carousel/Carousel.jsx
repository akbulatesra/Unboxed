import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blogs } from '../../data/blogArticles';
import previous from './leftsquare.svg';
import next from './rightsquare.svg';

function Carousel() {
  // this hook is used for make buttons work
  const [sliderRef, setSliderRef] = useState(null);

  // mapping blogs-- to make images interactive, button element is assigned
  const recentBlogs = blogs.map((blog) => {
    return (
      <div key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
          {' '}
          <button type="button">
            <img src={blog.image} alt={blog.title} />
          </button>
        </Link>
      </div>
    );
  });

  // these settings come with the Slick library- controls styling of the Slider component
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="bg-[#EAF8F9] font-poppins border-4 border-green-900 ">
      <h1 className="text-5xl p-8">RECENT BLOGS</h1>
      <div className="flex flex-row border-2 justify-center border-pink-500">
        <div className="self-center">
          <button onClick={sliderRef?.slickPrev} type="button">
            <img src={previous} alt="previous button" />
          </button>
        </div>

        <div className="flex flex-col w-10/12 border-2 m-4 border-blue-500">
          <Slider ref={setSliderRef} {...settings}>
            {recentBlogs}
          </Slider>
        </div>
        <div className="self-center">
          <button onClick={sliderRef?.slickNext} type="button">
            <img src={next} alt="next button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
