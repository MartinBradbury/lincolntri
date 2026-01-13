import "../../styles/Roles.css";
import { Link } from "react-router-dom";

function SocialMediaOfficer() {
  return (
    <section className="role-page">
      <div className="content">
        <h1>Social Media Officer</h1>

        <div className="role-meta">
          <p>
            <strong>Reporting to:</strong> Executive Committee
          </p>
        </div>

        <section className="role-section">
          <h2>Role Purpose</h2>
          <p>
            To maximise the use and effectiveness of the club’s social media
            platforms to inform members and promote the club to the wider
            triathlon community.
          </p>
        </section>

        <section className="role-section">
          <h2>Key Objectives</h2>
          <ul>
            <li>
              Increase the volume of activity across social media platforms and
              the club website.
            </li>
            <li>
              Use social media platforms to inform members of training sessions,
              news and club updates.
            </li>
            <li>
              Promote the club in a positive and professional manner to the
              wider community.
            </li>
            <li>
              Prepare a report for committee meetings on social media activity
              and recommend ways to improve effectiveness and engagement.
            </li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Key Tasks</h2>
          <ul>
            <li>
              Update members via Club Manager, Facebook, Twitter and Instagram.
            </li>
            <li>Review and update website content as required.</li>
            <li>
              Ensure photographs used on social media have appropriate consent.
            </li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Experience</h2>
          <p>
            Knowledge of the effective use of social media is desirable but not
            a prerequisite for the role.
          </p>
        </section>

        <section className="role-section">
          <h2>Commitment</h2>
          <p>
            The role requires attendance at committee meetings lasting
            approximately 2–2.5 hours, which take place five to six times per
            year. In addition, time is required each month to update and manage
            the club’s social media platforms with relevant content.
          </p>
        </section>

        <section className="role-section">
          <h2>Role Open to Disabled Persons</h2>
          <p>Yes</p>
        </section>
      </div>
      <div className="role-footer">
        <Link to="/committee" className="back-button">
          ← Back to Committee
        </Link>
      </div>
    </section>
  );
}

export default SocialMediaOfficer;
