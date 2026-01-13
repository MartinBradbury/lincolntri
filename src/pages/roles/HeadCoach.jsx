import "../../styles/Roles.css";
import { Link } from "react-router-dom";

function HeadCoach() {
  return (
    <section className="role-page">
      <div className="content">
        <h1>Head Coach</h1>

        <div className="role-meta">
          <p>
            <strong>Reporting to:</strong> Executive Committee
          </p>
        </div>

        <section className="role-section">
          <h2>Role Purpose</h2>
          <p>
            To set the annual coaching plans for the club and co-ordinate the
            development of the coaching team. The Head Coach will also be part
            of the main committee.
          </p>
        </section>

        <section className="role-section">
          <h2>Key Objectives</h2>
          <ul>
            <li>
              Arrange an annual structure for coaching delivery across all adult
              coached sessions.
            </li>
            <li>
              Liaise with the Junior Head Coach to ensure the effective delivery
              of junior sessions.
            </li>
            <li>
              Co-ordinate the club coaching team and hold coaches meetings
              between four and six times per year.
            </li>
            <li>
              Provide a structure within which individual coaches can plan and
              deliver appropriate sessions with agreed coaching points.
            </li>
            <li>
              Ensure coaches are working to an acceptable level of quality and
              with a common approach.
            </li>
            <li>
              Identify potential coaches for BTF training and make
              recommendations to the committee.
            </li>
            <li>
              Liaise with the Treasurer and committee regarding any costs
              associated with new coach training, additional training, and
              coaching equipment.
            </li>
            <li>
              Prepare a monthly report for the committee on coaching and a
              year-end report for consideration at the club AGM.
            </li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Key Tasks</h2>
          <ul>
            <li>
              Produce a year plan for each type of coached session before the
              end of November each year.
            </li>
            <li>
              Identify appropriate CPD opportunities for the coaching team and
              ensure that at least one coach is able to attend.
            </li>
            <li>
              Ensure that at least three of the coaches meetings provide an
              opportunity for training.
            </li>
            <li>
              In conjunction with the coaches and Treasurer, complete the
              budgeted income and expenditure report for each session.
            </li>
            <li>
              Liaise with the BTF on coaching courses and ensure these are made
              known to potential and existing coaches.
            </li>
          </ul>
        </section>

        <section className="role-section">
          <h2>Experience</h2>
          <p>
            Ideally, the Head Coach will hold a UKCC Level 2 triathlon
            qualification or above and have at least five years of regular
            triathlon coaching experience.
          </p>
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

export default HeadCoach;
