import Carousel from "../components/Carousel";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Carousel />

      {/* Welcome section */}
      <section className="home-section intro">
        <div className="content">
          <h1>Welcome to Lincoln Triathlon Club</h1>
          <p>
            Lincoln Tri is a fun, friendly and family-orientated triathlon and
            multisport club based in Lincoln.
          </p>
          <p>
            Our members range from absolute beginners learning the triathlon
            ropes to experienced athletes competing at World and European
            Championship level as part of the GB Age Group Team.
          </p>
        </div>
      </section>

      {/* Feature section */}
      <section className="home-section feature">
        <div className="content feature-grid">
          <div className="feature-image">
            {/* background image handled in CSS */}
          </div>
          <div className="feature-text">
            <h2>Multisport for Everyone</h2>
            <p>
              Our athletes compete across a wide range of disciplines including
              triathlon, duathlon, aquabike and swimrun events.
            </p>
            <p>
              From sprint distance through to Outlaw-distance races, we support
              members at every stage of their multisport journey.
            </p>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="home-section cta">
        <div className="content">
          <h2>Train, Race and Grow With Us</h2>
          <p>
            Whether you are new to triathlon or an experienced competitive
            athlete, we aim to help our members develop skills, confidence and a
            lifelong love of multisport.
          </p>
          <a href="/membership" className="cta-button">
            Join Lincoln Tri
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
