// import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';
import { dataDigitalBestSeller } from './config/data';


function Section6() {
  // const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const handleErrorImage = (data) => {
  //   setDefaultImage((prev) => ({
  //     ...prev,
  //     [data.target.alt]: data.target.alt,
  //     linkDefault: "",
  //   }));
  // };

  return (
    <div className="Section6  bg-slide py-5">
      <div className='container py-5'>
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="box" key={item.id}>
              <div className=" d-flex flex-column justify-content-center align-items-center gap-2">
                <p>{item.title}</p>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <img src={item.centerimg} className='img-fluid'></img>
                  <h4>{item.name}</h4>
                  <p>{item.star}</p>
                  <img src={item.secondimg} className='img-fluid'></img>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Section6;
