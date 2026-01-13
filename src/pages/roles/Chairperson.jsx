import "../../styles/Roles.css";
import { Link } from "react-router-dom";

function Chairperson() {
  return (
    <section className="role-page">
      <div className="content">
        <h1>Chairperson</h1>

        <div className="role-meta">
          <p>
            <strong>Reporting to:</strong> Club Members and Fellow Committee
            Members
          </p>
        </div>

        <section className="role-section">
          <h2>Role Purpose</h2>
          <p>
            To ensure that the club is run in an effective manner for the
            benefit of the membership, and to promote the club at a regional and
            national level.
          </p>
        </section>

        <section className="role-section">
          <h2>Key Objectives</h2>
          <ul>
            <li>
              Oversee the committee and set the club’s agenda and development
              plans.
            </li>
            <li>Ensure the club meets its governance requirements.</li>
            <li>
              Ensure effective communication within the club and across the
              region.
            </li>
            <li>
              Promote the club both regionally and nationally and ensure the
              club plays a role in increasing participation in multi-sport
              within the local community.
            </li>
            <li>
              Attend and deliver the club AGM and ensure all relevant
              information is available to members.
            </li>
            <li>
              Provide guidance and support to fellow committee members to help
              them achieve their objectives and support the delivery of CPD.
            </li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Other Key Tasks</h2>
          <ul>
            <li>
              Chair committee meetings and, in conjunction with the Secretary,
              ensure that meeting minutes accurately reflect discussions and
              decisions.
            </li>
            <li>Act as the spokesperson for the club when required.</li>
            <li>Act as an arbitrator for the club in the event of disputes.</li>
            <li>Represent the club at regional and national events.</li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Experience</h2>
          <p>
            The Chairperson should be organised, diplomatic and possess strong
            communication skills. Current or prior leadership experience is
            advantageous, along with experience of chairing meetings and
            liaising with stakeholders. However, this is not essential and
            support will be provided by the outgoing Chairperson.
          </p>
        </section>

        <section className="role-section">
          <h2>Commitment</h2>
          <p>
            The role requires attendance at committee meetings lasting
            approximately 2–2.5 hours, which take place five to six times per
            year. In addition, approximately 20–25 hours per month are required
            to attend external events and manage the club’s administration.
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

export default Chairperson;
