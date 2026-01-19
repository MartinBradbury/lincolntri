import { useParams } from "react-router-dom";
import { trainingSessions } from "../data/trainingSessions";
import "../styles/TrainingSession.css";

function TrainingSession() {
  const { sessionSlug } = useParams();
  const session = trainingSessions[sessionSlug];

  if (!session) {
    return <p className="content">Session not found.</p>;
  }

  return (
    <section className="training-session">
      <div className="content">
        <h1>{session.title}</h1>

        <div className="session-meta">
          <span>{session.type}</span>
          <span>{session.time}</span>
          <span>{session.audience}</span>
        </div>

        {/* Image / Carousel placeholder */}
        <div className="session-media">
          <img
            src={session.image}
            alt={`${session.title} training session`}
            loading="lazy"
          />
        </div>

        <p className="session-description">{session.description}</p>

        {/* Map */}
        <div className="session-map">
          <h2>Location</h2>
          <iframe
            title="Yarborough Leisure Centre Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              session.location.mapQuery
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="address">{session.location.address}</p>
        </div>
      </div>
    </section>
  );
}

export default TrainingSession;
