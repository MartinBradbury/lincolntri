import { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Membership.css";
import Test1 from "../assets/test1.jpg";

function Membership() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    //EMAILJS WITH .ENV -- in PRODUCTION
    // emailjs
    //   .sendForm(
    //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //     formRef.current,
    //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    //   )

    emailjs
      .sendForm(
        "service_lincolntri", // SERVICE ID
        "template_l4wg2fh", // TEMPLATE ID
        formRef.current, // FORM REF
        "cov_dCTSvAbqhgE3i" // PUBLIC KEY
      )
      .then(
        () => {
          alert("Your enquiry has been sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="membership-page">
      <div className="content">
        <h1>Membership</h1>

        {/* Membership information */}
        <div className="membership-info">
          <p>
            Lincoln Triathlon Club offers a range of membership options designed
            to suit athletes of all abilities. Whether you’re new to triathlon
            or an experienced competitor, our membership provides access to
            high-quality coaching, structured training sessions, and a
            supportive club environment.
          </p>

          <p>
            Membership costs and options will be listed here. Placeholder text
            can later be replaced with full pricing details and benefits.
          </p>
        </div>

        {/* Image + Form section */}
        <div className="membership-enquiry">
          {/* Left: image */}
          <div className="membership-image">
            <img src={Test1} alt="Lincoln Triathlon Club training" />
          </div>

          {/* Right: form */}
          <div className="membership-form">
            <h2>Membership Enquiry</h2>

            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" required />
              </div>

              <button type="submit" className="submit-btn">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Membership;
