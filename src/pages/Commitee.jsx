import "../styles/Committee.css";

function Committee() {
  return (
    <section className="committee-page">
      <div className="content">
        <h1>Committee & Governance</h1>

        <p className="intro-text">
          Lincoln Tri Club is run by a volunteer committee responsible for the
          strategic direction, governance, and day-to-day management of the
          club. Below you’ll find our key policies, terms of reference, and
          details of our current committee members.
        </p>

        {/* Policies */}
        <section className="committee-section">
          <h2>Club Policies</h2>
          <ul className="document-list">
            <li>
              <a href="#">Safeguarding Policy</a>
            </li>
            <li>
              <a href="#">Equality & Inclusion Policy</a>
            </li>
            <li>
              <a href="#">Code of Conduct</a>
            </li>
            <li>
              <a href="#">Health & Safety Policy</a>
            </li>
          </ul>
        </section>

        {/* Terms of Reference */}
        <section className="committee-section">
          <h2>Terms of Reference</h2>
          <p>
            The committee operates under an agreed set of Terms of Reference
            which outline roles, responsibilities, and decision-making
            processes.
          </p>

          <ul className="document-list">
            <li>
              <a href="#">Chairperson Role Description</a>
            </li>
            <li>
              <a href="#">Treasurer Role Description</a>
            </li>
            <li>
              <a href="#">Secretary Role Description</a>
            </li>
            <li>
              <a href="#">Social Media Role Description</a>
            </li>
            <li>
              <a href="#">Membership Role Description</a>
            </li>
            <li>
              <a href="#">Welfare Officer Role Description</a>
            </li>
            <li>
              <a href="#">Head Coach Role Description</a>
            </li>
          </ul>
        </section>

        {/* Committee Members */}
        <section className="committee-section">
          <h2>Committee Members</h2>

          <div className="committee-grid">
            <div className="committee-card">
              <h3>Chairperson</h3>
              <h4>Gaz Taylor</h4>
              <p>
                Gaz oversees the strategic direction of the club and chairs
                committee meetings. A long-standing club member with extensive
                experience in governance.
              </p>
            </div>

            <div className="committee-card">
              <h3>Secretary</h3>
              <h4>Martin Bradbury</h4>
              <p>
                Martin is responsible for club administration, meeting minutes,
                and official correspondence.
              </p>
            </div>

            <div className="committee-card">
              <h3>Treasurer</h3>
              <h4>Pete Cox</h4>
              <p>
                Pete manages the club’s finances, budgeting, and financial
                reporting.
              </p>
            </div>

            <div className="committee-card">
              <h3>Welfare Officer</h3>
              <h4>Laura Collins</h4>
              <p>
                Laura acts as the main point of contact for safeguarding and
                welfare matters within the club.
              </p>
            </div>
            <div className="committee-card">
              <h3>Social Media</h3>
              <h4>Florrie Machin</h4>
              <p>
                Florrie acts as the main point of contact for social media
                within the club.
              </p>
            </div>
            <div className="committee-card">
              <h3>Membership</h3>
              <h4>Jayne Skinner</h4>
              <p>
                Jayne acts as the main point of contact for memberships within
                the club.
              </p>
            </div>
            <div className="committee-card">
              <h3>Head Coach</h3>
              <h4>Steve Palye</h4>
              <p>
                Steve acts as the main point of contact for coaching within the
                club.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Committee;
