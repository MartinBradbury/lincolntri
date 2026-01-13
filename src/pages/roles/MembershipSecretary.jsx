import "../../styles/Roles.css";
import { Link } from "react-router-dom";

function MembershipSecretary() {
  return (
    <section className="role-page">
      <div className="content">
        <h1>Membership Secretary</h1>

        <div className="role-meta">
          <p>
            <strong>Reporting to:</strong> Executive Committee
          </p>
        </div>

        <section className="role-section">
          <h2>Role Purpose</h2>
          <p>
            To support new members in joining the club and manage the renewal of
            existing club memberships.
          </p>
        </section>

        <section className="role-section">
          <h2>Key Objectives</h2>
          <ul>
            <li>Ensure the timely renewal of membership fees.</li>
            <li>
              Ensure new members are enrolled correctly and that their data is
              accurate.
            </li>
            <li>
              Ensure member payments are managed through the club’s preferred
              payment providers.
            </li>
            <li>
              Support the development of the club’s membership database with the
              chosen provider.
            </li>
            <li>
              Oversee venue bookings and the creation of events and sessions
              within the membership database.
            </li>
            <li>
              Attend committee meetings and provide a report to the committee in
              advance of meetings.
            </li>
            <li>Manage the social activities of the club.</li>
            <li>
              Provide guidance on member benefits for committee review and
              agreement.
            </li>
            <li>Consider alternative membership types and payment methods.</li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Key Tasks</h2>
          <ul>
            <li>
              Manage Club Manager and its integrations with Stripe and
              GoCardless.
            </li>
            <li>
              Provide training on the use of Club Manager to committee members
              and coaches.
            </li>
            <li>Manage membership types and group allocations.</li>
            <li>
              Create and edit products available for members within the system.
            </li>
            <li>Set up and maintain payment methods.</li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Experience</h2>
          <p>
            No prior experience is required as training will be provided. The
            role requires someone who is methodical, organised and able to
            delegate tasks and make decisions for the committee.
          </p>
        </section>

        <section className="role-section">
          <h2>Commitment</h2>
          <p>
            The role requires attendance at committee meetings lasting
            approximately 2–2.5 hours, which take place five to six times per
            year. In addition, time is required each week to enrol members and
            manage Club Manager, GoCardless and Stripe systems.
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

export default MembershipSecretary;
