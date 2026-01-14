import Carousel from "../components/Carousel";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Carousel />

      {/* Welcome section */}
      <section className="home-section intro">
        <div className="content">
          <h1>Welcome to Lincoln Tri Club</h1>
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
      {/* Sponsorship Section */}
      <section className="home-section sponsorship">
        <div className="content">
          <h2>Sponsorship Opportunities</h2>
          <p>
            LincolnTri Club is a community-focused triathlon and multisport
            athletics club affiliated with British Triathlon and Triathlon
            England. We support athletes of all ages and abilities, promote
            health and wellbeing, and play an active role in the local
            community. We welcome discussions with small and medium-sized
            businesses seeking to increase their local visibility while
            supporting grassroots sport. Although we do not currently offer
            fixed sponsorship packages, we are keen to develop flexible
            partnership arrangements that deliver mutual value, including brand
            exposure, community engagement, and positive local impact.
            Businesses interested in exploring sponsorship opportunities are
            encouraged to contact us to discuss how a partnership with
            LincolnTri Club could support both organisational objectives and
            community wellbeing. For further discussion please contact us.
          </p>
          <a
            href="mailto:chair@lincolntri.co.uk?subject=Lincoln%20Tri%20Club%20Sponsorship%20Enquiry"
            className="cta-button"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
