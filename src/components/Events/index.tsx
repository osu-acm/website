import currentEvents from "./data";
import "./style.css";

interface EventProps {
  date: string;
  time: string;
  location: string;
  title: string;
  description: string;
  zoomLink?: string;
  pin?: string;
}

function Event({
  date,
  time,
  location,
  title,
  description,
  zoomLink,
  pin,
}: EventProps) {
  const isZoomEvent = location.toLowerCase().includes("zoom");
  console.log(isZoomEvent);
  console.log(zoomLink);
  return (
    <div className="event">
      <span className="event-date">{date}</span>
      <div className="event-info">
        <h3 className="event-info-title">{title}</h3>
        <p className="event-info-time">{time}</p>
        <span className="event-info-location">
          {location.replace("Zoom", "")}
          {isZoomEvent ? (
            <a
              href={zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="event-info-zoom"
            >
              Zoom
            </a>
          ) : (
            location
          )}
          {isZoomEvent && pin && <span> (Pin: {pin})</span>}
        </span>
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
                    zoomLink={event.zoomLink}
                    pin={event.pin}
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
