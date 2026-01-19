import "../styles/ClubEvents.css";

function ClubEvents() {
  return (
    <>
      {/* Intro */}
      <section className="events-section intro">
        <div className="content">
          <h1>Club Events – 2026</h1>
          <p>
            Our club events calendar brings members together to train, race,
            volunteer and celebrate achievements throughout the season.
          </p>
        </div>
      </section>

      {/* Key events */}
      <section className="events-section feature">
        <div className="content">
          <h2>Key Club Events</h2>

          <div className="event-list">
            <div className="event-item">
              <h3>Boot Camp – Date TBC</h3>
              <p>
                Early season club training weekend giving the club the
                opportunity to come together and train across swim, bike, run &
                transition in preparation for this seasons events.
              </p>
            </div>

            <div className="event-item">
              <h3>Club Aquathlon – Date TBC</h3>
            </div>

            <div className="event-item">
              <h3>Club Tri Champs – Woodhall Spa Sprint Triathlon</h3>
              <p>
                Opportunity for the club to come together, target a specific
                local event where the Club Open and Female Champions will be
                crowned.
              </p>
            </div>

            <div className="event-item">
              <h3>Triathlon Relays – August Bank Holiday Weekend</h3>
              <p>
                Triathlon is predominately an individual sport, apart from one
                weekend a year when we can come together, form teams and race
                against each other and other clubs from around the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section className="events-section">
        <div className="content">
          <h2>Volunteering Opportunities</h2>
          <p>
            The club has a proud tradition of supporting the Outlaw Triathlon
            events at Holme Pierrepont in Nottingham to give back to the sport
            that gives us all so much.
          </p>

          <ul className="bullet-list">
            <li>
              <strong>Outlaw Nottingham – 17th May</strong> – Bike Feed Station
            </li>
            <li>
              <strong>Outlaw Original – 26th July</strong> – Run Feed Station
            </li>
          </ul>
        </div>
      </section>

      {/* Awards with imagery */}
      <section className="events-section feature">
        <div className="content">
          <h2>Club Awards</h2>
          <p>
            At the club’s Annual Awards Night the membership is recognised for
            its achievements across the year.
          </p>

          {/* Chairperson's Award */}
          <div className="feature-grid award-block">
            <div className="award-image1 chair-award">
              {/* image via CSS */}
            </div>
            <div>
              <h3>Chairpersons Award</h3>
              <p>
                Presented at the Chair’s discretion to a member who has made an
                exceptional contribution to the club or represented Lincoln Tri
                in an outstanding way.
              </p>
            </div>
          </div>

          {/* Impsport Performance Award */}
          <div className="feature-grid award-block reverse">
            <div className="award-image2 performance-award">
              {/* image via CSS */}
            </div>
            <div>
              <h3>Impsport Performance Award</h3>
              <p>
                Awarded to a member delivering an outstanding performance during
                the 2026 season — from winning events to overcoming significant
                personal adversity. Traditionally voted for by the membership.
              </p>
            </div>
          </div>

          {/* Special Award */}
          <div className="feature-grid award-block">
            <div className="award-image3 special-award">
              {/* image via CSS */}
            </div>
            <div>
              <h3>Special Award</h3>
              <p>
                A committee-voted award with criteria determined annually by the
                committee.
              </p>
            </div>
          </div>

          {/* Club Champions */}
          <div className="feature-grid award-block reverse">
            <div className="award-image4 champions-award">
              {/* image via CSS */}
            </div>
            <div>
              <h3>Club Champions</h3>
              <p>
                Awarded to the fastest Open and Female athletes at the nominated
                local event each year.
              </p>
              <p>
                Junior Club Champions are also awarded based on results in the
                East Midlands Race Series.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* League Champions */}
      <section className="events-section cta">
        <div className="content">
          <h2>Club League Champions</h2>

          <p>
            To claim either the Female or Open League Championship, members must
            submit results for two races, along with the winning time for their
            age group. The winner is determined by the lowest percentage time
            compared to the age group winner.
          </p>

          <div className="league-grid">
            <div className="league-card">
              <h3>Standard Distance League</h3>
              <p>Sprint + Standard distance race</p>
            </div>

            <div className="league-card">
              <h3>Long Distance League</h3>
              <p>Half + Full distance race</p>
              <p className="small">
                (If nobody achieves this, it will roll down to 2× Half distance
                races. A Half + Full result takes precedence.)
              </p>
            </div>
          </div>

          <p className="note">
            Races can be triathlon, duathlon, aquathlon or aquabike events.
          </p>
        </div>
      </section>
    </>
  );
}

export default ClubEvents;
