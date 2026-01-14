import { Link } from "react-router-dom";
import "../styles/Training.css";

function Training() {
  return (
    <section className="training-page">
      <div className="content">
        <h1>Training Sessions</h1>
        <p className="intro-text">
          We offer a range of coached sessions throughout the week for adults
          and juniors across swim and run disciplines.
        </p>

        <div className="training-grid">
          {/* Session 1 */}
          <Link to="/training/tuesday-swim" className="training-card">
            <h3>Tuesday Swim – Yarborough</h3>
            <h6>Time: 8:00pm - 9:00pm</h6>
            <p>Coached swim session focusing on technique and endurance.</p>
            <span className="tag">Swim</span>
          </Link>

          {/* Session 2 */}
          <Link to="/training/thursday-swim" className="training-card">
            <h3>Thursday Swim – Priory Lincoln Academy</h3>
            <h6>Time: 8:00pm - 9:00pm</h6>
            <p>Structured swim training suitable for a range of abilities.</p>
            <span className="tag">Swim</span>
          </Link>

          {/* Session 3 */}
          <Link to="/training/friday-track" className="training-card">
            <h3>Friday Track – Yarborough</h3>
            <h6>Time: 7:00pm - 8:00pm</h6>
            <p>
              Track session for adults and juniors focusing on speed and form.
            </p>
            <span className="tag">Run</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Training;
