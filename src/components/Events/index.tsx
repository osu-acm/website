// Styles
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

const Events = ({ haveEvents }: { haveEvents: boolean }) => {
  const events = [
    {
      date: "Thursday, October 12, 2023",
      time: "6:00 PM - 7:00 PM",
      location: "Kelley Engineering Center Room 1003 & Discord",
      title: "Introduction To Competitive Programming w/ Otso and Nick",
      description:
        "For this Thursday’s meeting, we will be getting everyone up to speed on competitive programming! This is completely beginner friendly, no experience is required!",
    },
  ];

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
            {!haveEvents && (
              <div className="no-events">
                <p className="no-events-text">None right now but stay tuned!</p>
              </div>
            )}

            {haveEvents && (
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
