import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Membership.css";
import Test1 from "../assets/test1.jpg";

/* ✅ REQUIRED for emailjs-com Public Key*/
emailjs.init("tnQh_BvG9hWp1qXfS");

function Membership() {
  const formRef = useRef();
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lincolntri2026", // SERVICE ID
        "contact_us", // TEMPLATE ID
        formRef.current // FORM ELEMENT
      )
      .then(
        () => {
          setShowSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="membership-page membership-info">
      <div className="membership-container">
        <h2>Membership Fees & Benefits</h2>

        <p>
          Lincoln Tri Club offers a friendly, inclusive environment for athletes
          of all abilities. Membership provides access to structured training,
          competitive and social events, and a supportive coaching team.
        </p>

        <div className="membership-pricing">
          <div>
            <h3>Annual Membership Fees</h3>
            <ul>
              <li>
                <strong>Adult (18–60):</strong> £32 per year
              </li>
              <li>
                <strong>Junior / Young Person (18-25):</strong> £20 per year
              </li>
              <li>
                <strong>Family Membership:</strong> £55 per year
              </li>
              <li className="sub-text">
                (Maximum of 2 adults and any children under 18)
              </li>
            </ul>
          </div>

          <div>
            <h3>Membership Benefits</h3>
            <ul>
              <li>
                Access to coached swimming, running, and triathlon training
              </li>
              <li>Participation in club races and social events</li>
              <li>Access to Club Manager booking systems</li>
              <li>Members-only Facebook group</li>
              <li>Supportive coaching and inclusive club environment</li>
            </ul>
          </div>
        </div>

        <h2>Training Sessions</h2>

        <p>
          Training sessions are paid individually and booked via Club Manager.
          Session fees help cover coaching and venue costs.
        </p>

        <div className="training-fees">
          <ul>
            <li>
              <strong>Swimming (Adult):</strong> £5.50
            </li>
            <li>
              <strong>Swimming (Junior):</strong> £5
            </li>
            <li>
              <strong>Track / Town Run (Adult):</strong> £3.50
            </li>
            <li>
              <strong>South Common Run:</strong> Free
            </li>
          </ul>
        </div>

        <p className="note">
          Junior track sessions are charged at £10 per month via direct debit.
        </p>

        <h2>How to Join</h2>

        <p>
          To join Lincoln Tri Club, please complete the membership enquiry form
          below. You will be sent a membership form to complete and return. Once
          received, the Treasurer will issue an invoice and set up payment via
          direct debit.
        </p>

        <h2>Club Policies & Conduct</h2>

        <p>
          All members are required to accept and adhere to the club’s Terms &
          Conditions, Code of Conduct, and British Triathlon Federation rules.
          Policies are available on the link below and members-only channels.
        </p>

        <a href="/policies">Policies</a>

        <p className="note">
          Members who fail to meet expected standards may be subject to
          disciplinary action, including suspension or removal from the club.
        </p>

        {/* Membership Enquiry */}
        <section className="membership-enquiry">
          <div className="membership-image">
            <img src={Test1} alt="Lincoln Tri Club training" />
          </div>

          <div className="membership-form">
            <h3>Membership Enquiry</h3>

            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Tell us a little about yourself and which sessions you're interested in..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Enquiry
              </button>
            </form>
          </div>
        </section>
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
              partnership arrangements that deliver mutual value, including
              brand exposure, community engagement, and positive local impact.
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
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <h3>Enquiry Sent 🎉</h3>
            <p>
              Thank you for getting in touch. A member of the committee will
              respond to your enquiry shortly.
            </p>
            <button onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Membership;
