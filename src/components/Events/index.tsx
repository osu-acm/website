// Styles
import "./style.css";

const Events = ({ haveEvents }: { haveEvents: boolean }) => {
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
