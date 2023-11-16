import currentEvents from "./data";
import "./style.css";

interface EventProps {
  date: string;
  time: string;
  location: string;
  title: string;
  description: string;
}

function Event({ date, time, location, title, description }: EventProps) {
  return (
    <div className="event">
      <span className="event-date">{date}</span>
      <div className="event-info">
        <h3 className="event-info-title">{title}</h3>
        <p className="event-info-time">{time}</p>
        <p className="event-info-location">{location}</p>
        <p className="event-info-description">{description}</p>
      </div>
    </div>
  );
}

const Events = () => {
  const events = currentEvents;
  return (
    <section className="events">
      <div className="container">
        <div className="events-inner">
          <h2 className="text-white">Upcoming Events</h2>

          <div className="divider"></div>

          <div
            className="event-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {!(currentEvents.length > 0) && (
              <div className="no-events">
                <p className="no-events-text">None right now but stay tuned!</p>
              </div>
            )}

            {currentEvents && (
              <div className="events-list">
                {events.map((event, index) => (
                  <Event
                    key={index}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    title={event.title}
                    description={event.description}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
