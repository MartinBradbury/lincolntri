import "../styles/Committee.css";
import { Link } from "react-router-dom";
import Test1 from "../assets/test1.jpg";
import gaz2 from "../assets/gaz2.jpg";
import steve from "../assets/steve.jpg";
import jayne from "../assets/jayne.jpg";
import laura from "../assets/laura.jpg";

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
              <Link to="/committee/roles/chairperson">
                Chairperson Role Description
              </Link>
            </li>
            <li>
              <Link to="/committee/roles/treasurer">
                Treasurer Role Description
              </Link>
            </li>
            <li>
              <Link to="/committee/roles/secretary">
                Secretary Role Description
              </Link>
            </li>
            <li>
              <Link to="/committee/roles/social-media-officer">
                Social Media Officer Role Description
              </Link>
            </li>
            <li>
              <Link to="/committee/roles/membership-secretary">
                Membership Secretary Role Description
              </Link>
            </li>
            <li>
              <Link to="/committee/roles/welfare-officer">
                Welfare Officer Role Description
              </Link>
            </li>
            <li>
              <Link to="/committee/roles/head-coach">
                Head Coach Role Description
              </Link>
            </li>
          </ul>
        </section>

        {/* Committee Members */}
        <section className="committee-section">
          <h2>Committee Members</h2>

          <div className="committee-grid">
            {/* Chair */}
            <div className="committee-card">
              <div className="committee-image">
                <img src={gaz2} alt="Gaz Taylor" />
              </div>
              <div className="committee-content">
                <h3>Chairperson</h3>
                <h4>Gaz Taylor</h4>
                <p>
                  I have had a varied history in some sport or another since my
                  school days. I love sports, it started with cricket, rugby and
                  football through school and my RAF career. I served in the RAF
                  for 22 years and am now a proud veteran. I have some accolades
                  from my youth in that I still hold the best batting average in
                  the Batley Central Cricket Club Wisden's (ok the club no
                  longer exists and it was 35 years ago, but I held it for a
                  decade before they came to an end). I also represented West
                  Riding at under 16 rugby union. My later years were more
                  football oriented in the RAF, representing my various RAF
                  units and playing in the John Smith Sunday League. After a
                  couple of non-sporting injuries, I decided to stick with
                  circuits, running and cycling, more for a fitness need in the
                  RAF, rather than competitive. In 2016, I had a need for an
                  outlet for wellbeing purposes and one of my cousins suggested
                  that I should try triathlons. I laughed, called him insane and
                  in July that same year, I raced with him in my first sprint
                  triathlon at Gosfield Lake. I joined LincolTri that same year
                  and I've never looked back. My love for the club and its
                  family/community spirit is why I took the opportunity to
                  volunteer as your Chair, to ensure that the club continues to
                  provide opportunities for entry into Triathlons and other
                  related events as it has for me.
                </p>
              </div>
            </div>

            {/* Secretary */}
            <div className="committee-card">
              <div className="committee-image">
                <img src={Test1} alt="Martin Bradbury" />
              </div>
              <div className="committee-content">
                <h3>Secretary</h3>
                <h4>Martin Bradbury</h4>
                <p>
                  I completed my first triathlon in 2010 at RAF Cranwell. I took
                  up the sport as a way of keeping fit after enjoying a range of
                  team sports. My whole family have enjoyed being part of
                  Lincoln Tri since 2013. Personal highlights include tackling
                  some fantastic Olympic / 70.3 distance races with Lincoln Tri
                  friends throughout the UK and overseas in Spain and Portugal.
                  In recent years I have assisted the last two Head Coaches as
                  an Activator helping run Friday night track sessions for older
                  junior groups. Professionally I am a RAF Training Officer and
                  over the years have volunteered on a number of military club /
                  event committees. I hope that this experience will stand me in
                  good stead as I take over the Lincoln Tri Club Secretary role.
                </p>
              </div>
            </div>

            {/* Treasurer */}
            <div className="committee-card">
              <div className="committee-image">
                <img src={Test1} alt="Pete Cox" />
              </div>
              <div className="committee-content">
                <h3>Treasurer</h3>
                <h4>Pete Cox</h4>
                <p>
                  I competed in my first triathlon in 2014, Woodhall Spa Sprint,
                  having been encouraged by friends who were also competing for
                  the first time. Having successfully completed my first
                  Triathlon I was hooked and shortly after I joined Lincoln Tri
                  Club. It didn’t take long before I started challenging myself
                  at the Olympic & half distance managing to scrape onto the
                  bottom step of the age-group podium at Nottingham half &
                  Outlaw X half. I made the final step up to the full distance
                  in July 2023 at Outlaw Nottingham, again making the bottom
                  step of the age-group podium. My aim for 2024 is to repeat
                  Outlaw Nottingham, with half an eye on that 2nd place. My two
                  youngest children, Stephanie & Jack, were both active members
                  of Lincoln Tri Club before going to Uni where they were active
                  Tri Club members and now both are with the Tri-Anglia Club.
                  Professionally, I am a Chartered Engineer having managed
                  several design groups and although not linked to accounting I
                  hope my work, numeracy & budgeting experience will help me in
                  the Lincoln Tri Club Treasurer role.
                </p>
              </div>
            </div>

            {/* Welfare Officer */}
            <div className="committee-card">
              <div className="committee-image">
                <img src={laura} alt="Laura Collins" />
              </div>
              <div className="committee-content">
                <h3>Welfare Officer</h3>
                <h4>Laura Collins</h4>
                <p>
                  Hi All, I’m Laura Collins, your newly appointed Club Welfare
                  Officer. I came into triathlon from a swimming background and
                  although I could ride a bike and run, the thought of doing all
                  three disciplines in one day had never really crossed my mind.
                  However, on joining the club, I quickly got the bug for it and
                  have completed many triathlons over the past 13 years, from
                  sprints up to half ironman distances. The swim remains the
                  strongest part of events for me, and as long as I have a good
                  swim, what happens during the rest of the event is a bonus! I
                  have been a primary school teacher for the past 15 years and
                  so have built up a wide knowledge of safeguarding procedures
                  during that time. I am very happy to be part of the Lincoln
                  Tri Club committee and to be able to put my knowledge to use
                  in supporting both the junior and adult sections.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="committee-card">
              <div className="committee-image">
                <img src={Test1} alt="Florrie Machin" />
              </div>
              <div className="committee-content">
                <h3>Social Media</h3>
                <h4>Florrie Machin</h4>
                <p>
                  Florrie acts as the main point of contact for social media
                  within the club.
                </p>
              </div>
            </div>

            {/* Membership */}
            <div className="committee-card">
              <div className="committee-image">
                <img src={jayne} alt="Jayne Skinner" />
              </div>
              <div className="committee-content">
                <h3>Membership</h3>
                <h4>Jayne Skinner</h4>
                <p>
                  Hi, I’m Jayne and have held the role of Membership Secretary
                  since January 2020. Every day is a school day with our system.
                  My son originally joined the club in October 2016 and after
                  spending a few months standing watching him in the cold
                  microclimate of Active Nation, thought I would join the adults
                  on the running track mainly to keep warm and be constructive
                  with my time. That started my journey into triathlon, with the
                  odd local sprint distance. I soon wanted more and entered
                  middle distance, aquabike, aquathlon and open water swim
                  events. In a previous life whilst serving in the RAF as a
                  Dental Hygienist, I was a fitness instructor. I represented
                  the RAF at the interservices cross country/biathlon ski
                  championships, regional cross country and hockey.
                </p>
              </div>
            </div>

            {/* Head Coach */}
            <div className="committee-card">
              <div className="committee-image">
                <img src={steve} alt="Steve Paley" />
              </div>
              <div className="committee-content">
                <h3>Head Coach</h3>
                <h4>Steve Paley</h4>
                <p>
                  Following a competitive rugby playing background that came to
                  an end as a result of a significant back injury my triathlon
                  journey started in 2002 (I think – it’s the oldest event
                  T-shirt I can find) at Woodhall Spa Sprint Triathlon, which
                  got me hooked and gave me a new sport to focus on after my
                  rugby playing days. Since then I’ve raced GB Age Group at
                  World or European Championships at Sprint and Standard
                  distance as well as off road Cross Triathlon on 6 occasions
                  between 2009 and 2018. In 2023 I set my sights on qualifying
                  for the Xterra World Champs. My aim as your head coach is to
                  look at the following objectives: Rebuild the Junior section
                  on Friday nights under the stewardship of Stuart Mclaren our
                  Friday night Co-Ordinator. Build the coaching team, so we can
                  offer more sessions to the membership. Build the number of
                  sessions on offer (venue availability dependent)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="role-footer">
        <Link to="/membership" className="back-button">
          Enquire Now
        </Link>
      </div>
    </section>
  );
}

export default Committee;
