import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialSlider.css'; // Import your CSS file for custom styles if needed

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the first testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the second testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  },
  {
    id: 3,
    name: 'Jane Smith',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the second testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  }, {
    id: 4,
    name: 'Jane Smith',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the second testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  },
  {
    id: 1,
    name: 'John Doe',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the first testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the second testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  },
  {
    id: 3,
    name: 'Jane Smith',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the second testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  }, {
    id: 4,
    name: 'Jane Smith',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the second testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  }, {
    id: 1,
    name: 'John Doe',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the first testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the second testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  },
  {
    id: 3,
    name: 'Jane Smith',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the second testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  }, {
    id: 4,
    name: 'Jane Smith',
    text: (
      <span className="testimonial-text">
        <span className="quotation-left">“</span>This is the second testimonial text.<span className="quotation-right">”</span>
      </span>
    ),
  },
  // Add more testimonial objects as needed
];
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 cards in one slide
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 3, // Display 3 cards in one slide on screens less than 1200px wide
        },
      },
      {
        breakpoint: 992, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2, // Display 2 cards in one slide on screens less than 992px wide
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1, // Display 1 card in one slide on screens less than 768px wide
        },
      },
    ],
  };


  return (
    
    <div className="testimonial-slider-container container py-5 ">
      <Slider {...settings} className='py-5'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ margin: '0 20px' }} className='box-shadow bg-white t'>
            {/* Your card content here */}
            <p>{testimonial.text}</p>
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default TestimonialSlider;
