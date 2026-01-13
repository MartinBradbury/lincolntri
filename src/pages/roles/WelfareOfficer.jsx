import "../../styles/Roles.css";
import { Link } from "react-router-dom";

function WelfareOfficer() {
  return (
    <section className="role-page">
      <div className="content">
        <h1>Welfare Officer</h1>

        <div className="role-meta">
          <p>
            <strong>Reporting to:</strong> Chairman
          </p>
        </div>

        <section className="role-section">
          <h2>Role Purpose</h2>
          <p>
            Implement good practice, safeguarding and child protection policies,
            and ensure that the club coaches and committee are aware of their
            responsibilities.
          </p>
        </section>

        <section className="role-section">
          <h2>Key Objectives</h2>
          <ul>
            <li>
              Act as the first point of contact for individuals with queries or
              concerns regarding safeguarding.
            </li>
            <li>
              Ensure that all club personnel working with children and young
              people have received appropriate training.
            </li>
            <li>Facilitate the process of DBS checks when required.</li>
            <li>
              Receive, record and forward safeguarding concerns to the Lead
              Officer of the relevant Home Nation.
            </li>
            <li>
              Keep confidential records of all safeguarding-related documents.
            </li>
            <li>
              Ensure the club has an up-to-date safeguarding and child
              protection policy that is followed and accessible to all.
            </li>
            <li>
              Maintain familiarity with national safeguarding and child
              protection policies.
            </li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Key Tasks</h2>
          <ul>
            <li>
              Promote a positive and safe training environment and increase
              safeguarding awareness within the club.
            </li>
            <li>
              Keep personal CPD up to date and attend relevant safeguarding
              courses, including Time to Listen, Child Protection in Sport, and
              Safeguarding and Protecting Children.
            </li>
            <li>
              Ensure coaches and committee members have appropriate safeguarding
              CPD in place.
            </li>
            <li>
              Attend club sessions on an ad-hoc basis to review safeguarding
              practice.
            </li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Experience</h2>
          <p>
            Ideally, you will have previous experience working in a role
            involving children or vulnerable adults, or have prior experience of
            welfare and safeguarding through voluntary roles.
          </p>
        </section>

        <section className="role-section">
          <h2>Commitment</h2>
          <p>
            The role requires attendance at committee meetings lasting
            approximately 2–2.5 hours, which take place five to six times per
            year. Additional time is required to attend relevant training
            courses and club sessions as needed.
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

export default WelfareOfficer;
