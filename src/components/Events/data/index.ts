import moment from "moment";
import { type Event } from '../../../types';

const events = [
      {
            date: "Thursday, October 12, 2023",
            time: "6:00 PM - 7:00 PM",
            location: "Kelley Engineering Center Room 1003 & Discord",
            title: "Introduction To Competitive Programming w/ Otso and Nick",
            description:
                  "For this Thursday’s meeting, we will be getting everyone up to speed on competitive programming! This is completely beginner friendly, no experience is required!",
      },
      {
            date: "Thursday, October 19, 2023",
            time: "6:00 PM - 7:00 PM",
            location: "Kelley Engineering Center Room 1003 & Discord",
            title: "TBA",
            description:
                  "TBA",
      }
];

const currentEvents = events.filter((event) => {
      const eventTime = moment(
            `${event.date} ${event.time}`,
            "dddd, MMMM DD, YYYY h:mm A"
      );
      return eventTime.isAfter(moment());
});

export default currentEvents as Event[];

