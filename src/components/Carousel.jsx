import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

const slides = [
  {
    className: "slide-1",
    title: "Train Smarter",
    text: "Structured sessions for swim, bike, and run.",
  },
  {
    className: "slide-2",
    title: "Race Stronger",
    text: "Build endurance, speed, and confidence for race day.",
  },
  {
    className: "slide-3",
    title: "Join the Community",
    text: "Supportive coaching and sessions for all abilities.",
  },
];

function ImageCarousel() {
  return (
    <Carousel fade>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} interval={3000}>
          <div className={`carousel-slide ${slide.className}`}>
            <Carousel.Caption className="fade-caption">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
