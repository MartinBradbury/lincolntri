import { Link } from "react-router-dom";
import "../styles/HomeCarousel.css";
import Test1 from "../assets/test1.jpg";
import Test2 from "../assets/test2.jpg";
import Test3 from "../assets/test3.jpg";

const slides = [
  {
    image: Test1,
    title: "Welcome to Lincoln Triathlon Club",
    text: "A friendly, inclusive club for beginners through to experienced athletes.",
    link: "/about",
    linkText: "About the club",
  },
  {
    image: Test2,
    title: "Train With Purpose",
    text: "Coached swim and run sessions throughout the week for adults and juniors.",
    link: "/training",
    linkText: "View training",
  },
  {
    image: Test3,
    title: "Join Lincoln Tri",
    text: "Become part of a supportive triathlon community in Lincoln.",
    link: "/membership",
    linkText: "Join today",
  },
];

function HomeCarousel() {
  return (
    <section className="home-carousel">
      {slides.map((slide, index) => (
        <div
          className="carousel-slide"
          key={index}
          style={{ animationDelay: `${index * 6}s` }}
        >
          {/* Left image */}
          <div
            className="carousel-image"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Right content */}
          <div className="carousel-content">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <Link to={slide.link} className="carousel-link">
              {slide.linkText} →
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HomeCarousel;
