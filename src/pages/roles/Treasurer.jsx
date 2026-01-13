import "../../styles/Roles.css";
import { Link } from "react-router-dom";

function Treasurer() {
  return (
    <section className="role-page">
      <div className="content">
        <h1>Treasurer</h1>

        <div className="role-meta">
          <p>
            <strong>Reporting to:</strong> Chairman
          </p>
        </div>

        <section className="role-section">
          <h2>Role Purpose</h2>
          <p>
            To ensure sound financial management of the club by identifying the
            financial implications of proposals, outlining the current financial
            status of the club and providing information to the committee in a
            timely manner.
          </p>
        </section>

        <section className="role-section">
          <h2>Key Objectives</h2>
          <ul>
            <li>
              Produce an annual budget for the club and propose a split of
              available funds between the membership and coaches.
            </li>
            <li>
              Produce a set of accounts each month and circulate them within a
              timely manner (ten working days).
            </li>
            <li>
              Keep records of payments and receipts made by or to the club and
              reconcile these to the bank accounts.
            </li>
            <li>
              Liaise with venues used by the club to ensure any changes
              impacting club finances are identified and communicated to the
              committee.
            </li>
            <li>
              Review the viability of sessions based on income and provide
              financial recommendations where required.
            </li>
            <li>
              Arrange an independent audit of the club’s finances within four
              weeks of the club’s year end (December).
            </li>
            <li>
              Prepare a monthly finance report for the committee and a year-end
              report for consideration at the club AGM.
            </li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Key Tasks</h2>
          <ul>
            <li>
              Review Club Manager on a regular basis to identify any missed
              payments and resolve these with the relevant members.
            </li>
            <li>
              Maintain the bank mandate in accordance with the club
              constitution.
            </li>
            <li>
              Ensure cash handling certificates are in place for all members
              handling cash on behalf of the club and control all payments into
              the bank account.
            </li>
            <li>Maintain the asset register for the club.</li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Experience</h2>
          <p>
            No previous experience as a Treasurer is required and training will
            be provided. Where no prior experience exists, the Treasurer may
            delegate key aspects of account and budget production to ensure
            appropriate support is available and provide evidence of this to the
            committee.
          </p>
        </section>

        <section className="role-section">
          <h2>Commitment</h2>
          <p>
            The role requires attendance at committee meetings lasting
            approximately 2–2.5 hours, which take place five to six times per
            year. In addition, around eight hours per month are required to
            process and reconcile payments, produce accounts, review and resolve
            member payments, and report to the committee.
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

export default Treasurer;
