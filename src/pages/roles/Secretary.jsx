import "../../styles/Roles.css";
import { Link } from "react-router-dom";

function Secretary() {
  return (
    <section className="role-page">
      <div className="content">
        <h1>Secretary</h1>

        <div className="role-meta">
          <p>
            <strong>Reporting to:</strong> Chairman
          </p>
        </div>

        <section className="role-section">
          <h2>Role Purpose</h2>
          <p>
            Arrange club meetings, the club’s AGM, take minutes at meetings and
            be responsible for administrative tasks.
          </p>
        </section>

        <section className="role-section">
          <h2>Key Objectives</h2>
          <ul>
            <li>
              Arrange club meetings and produce the agenda and minutes of the
              meetings.
            </li>
            <li>
              Ensure the club operates within the guidelines of the British
              Triathlon Federation (BTF).
            </li>
            <li>Ensure the club’s insurance is maintained.</li>
            <li>
              Update members on changes to rules, codes of conduct and related
              policies.
            </li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Key Tasks</h2>
          <ul>
            <li>
              Agree dates for club meetings and arrange an appropriate venue.
            </li>
            <li>Circulate reports to committee members ahead of meetings.</li>
            <li>
              Ensure club insurance and affiliation certificates are saved and
              maintained on Dropbox.
            </li>
            <li>
              Circulate links to BTF rules, codes of conduct and related updates
              to members as required.
            </li>
            <li>Attend committee meetings.</li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Experience</h2>
          <p>
            No prior experience as a Club or Company Secretary is required. The
            role requires someone who is methodical, organised and able to
            delegate tasks and make decisions for the committee.
          </p>
        </section>

        <section className="role-section">
          <h2>Commitment</h2>
          <p>
            The role requires attendance at committee meetings lasting
            approximately 2–2.5 hours, which take place five to six times per
            year. Additional time is required to prepare and distribute agendas
            and minutes, and to discuss matters as they arise with other
            committee members.
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

export default Secretary;
