import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";
import Test1 from "../assets/test1.jpg";
import Test2 from "../assets/test2.jpg";
import Test3 from "../assets/test3.jpg";

function ImageCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <div className="carousel-slide slide-1">
          <Carousel.Caption>
            <h3>Train Smarter</h3>
            <p>Structured plans for swim, bike and run.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="carousel-slide slide-2">
          <Carousel.Caption>
            <h3>Train Smarter</h3>
            <p>Structured plans for swim, bike and run.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="carousel-slide slide-3">
          <Carousel.Caption>
            <h3>Train Smarter</h3>
            <p>Structured plans for swim, bike and run.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
