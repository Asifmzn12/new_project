// import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css';


function Section6() {
  // const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <div className="Section6  bg-img py-5">
      <div className='container py-5'>
        <Slider {...settings}>

          <div className="carousel-item">
            <div className="row py-5 justify-content-center">
              <div className="col-lg-4">
                <div className="text-content">
                  <img src="title-icon.png" className="img-fluid" alt="Title Icon" />
                  <h5 className="home-title homeHeading text-white">
                    <span className="home-slderHeading">Order of the</span> <br />
                    Kings and Queens <br />
                    in the Holy Lands
                  </h5>
                  <p className="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since.
                  </p>
                  <button className="learnMore">Membership</button>
                </div>
              </div>
              <div className="col-md-8 position-relative">
                <img src="firecenter.png" className="img-fluid locationmap" alt="Fire Center" />
                <img src="map.png" className="img-fluid map" alt="Map" />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row pt-1 justify-content-center">
              <div className="col-lg-4">
                <div className="text-content">
                  <img src="title-icon.png" className="img-fluid" alt="Title Icon" />
                  <h5 className="home-title homeHeading text-white">
                    <span className="home-slderHeading">Order of the</span> <br />
                    Kings and Queens <br />
                    in the Holy Lands
                  </h5>
                  <p className="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since.
                  </p>
                  <button className="learnMore">Membership</button>
                </div>
              </div>
              <div className="col-md-8 position-relative">
                <img src="firecenter.png" className="img-fluid locationmap" alt="Fire Center" />
                <img src="map.png" className="img-fluid map" alt="Map" />
              </div>
            </div>
          </div>


        </Slider>
      </div>
    </div>
  );
}

export default Section6;
