import "../styles/About.css";
import videotri from "../assets/videotri.mp4";

function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1>About Lincoln Tri Club</h1>

        <div className="about-hero-grid">
          {/* LEFT: Video */}
          <div className="about-hero">
            <video
              src={videotri}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="about-video"
            />
          </div>

          {/* RIGHT: Content */}
          <div className="about-hero-content">
            <div className="about-subsection">
              <h2>Who We Are</h2>
              <p>
                Lincoln Tri Club is a friendly, inclusive club supporting
                athletes of all abilities who enjoy swimming, cycling, running
                and triathlon.
              </p>
              <p>
                Based in Lincoln, we bring together people who share a passion
                for endurance sport from complete beginners to experienced
                racers in a welcoming and supportive environment.
              </p>
              <p>
                Our coaches and committee deliver structured, enjoyable sessions
                that help members progress at their own pace while being part of
                a positive team atmosphere.
              </p>
            </div>
            <div className="about-subsection">
              <h2>What We Offer</h2>
              <ul className="about-list">
                <li>
                  Coached swim, run, and triathlon-specific training sessions
                </li>
                <li>
                  Opportunities to race in triathlons, duathlons, aquathlons and
                  running events
                </li>
                <li>Social and club-organised events throughout the year</li>
                <li>
                  Support and guidance for beginners and experienced athletes
                  alike
                </li>
                <li>Access to club communication and booking platforms</li>
              </ul>
            </div>
            <div className="about-subsection">
              <h2>Junior Section</h2>
              <p>
                Lincoln Tri Club has a thriving junior section welcoming young
                athletes from the age of 6. Our junior programme focuses on
                developing fundamental movement skills, confidence, and a love
                of sport in a safe and supportive environment.
              </p>
              <p>
                Sessions are age-appropriate, fun, and coach-led, helping
                juniors build swimming and running skills while learning the
                basics of triathlon. We place a strong emphasis on enjoyment,
                inclusivity, and personal development, whether juniors are new
                to sport or already active.
              </p>
              <p>
                As juniors progress, there are opportunities to train, compete,
                and represent the club within regional race series, supported by
                qualified coaches and dedicated volunteers.
              </p>
            </div>

            <div className="about-subsection">
              <h2>What We Offer</h2>
              <ul className="about-list">
                <li>
                  Coached swim, run, and triathlon-specific training sessions
                </li>
                <li>
                  Opportunities to race in triathlons, duathlons, aquathlons and
                  running events
                </li>
                <li>Social and club-organised events throughout the year</li>
                <li>
                  Support and guidance for beginners and experienced athletes
                  alike
                </li>
                <li>Access to club communication and booking platforms</li>
              </ul>
            </div>
            <div className="about-section">
              <h2>Our Ethos</h2>
              <p>
                Lincoln Tri Club is built on respect, inclusivity, and enjoyment
                of sport. We aim to create a safe and encouraging environment
                where members can challenge themselves, achieve personal goals,
                and enjoy training together.
              </p>
              <p>
                We believe that triathlon is for everyone regardless of age,
                background, or experience and we actively promote a positive and
                welcoming club culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
