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
            We are a friendly, inclusive triathlon club welcoming athletes of
            all abilities — from complete beginners to experienced racers.
          </p>
          <p>
            Whether you’re here to train, race, or just enjoy the community,
            Lincoln Tri is the place to grow.
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
            <h2>Train With Purpose</h2>
            <p>
              We offer structured swim, bike and run sessions led by qualified
              coaches, with multiple sessions each week.
            </p>
            <p>
              Sessions are designed to help you improve confidently and safely,
              whatever your starting point.
            </p>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="home-section cta">
        <div className="content">
          <h2>Join Lincoln Tri</h2>
          <p>
            Become part of a supportive, motivated triathlon community and gain
            access to coached sessions, club events and races.
          </p>
          <a href="/join" className="cta-button">
            Join Us
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
