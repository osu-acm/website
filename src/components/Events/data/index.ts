import moment from "moment";
import { type Event } from "../../../types";

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
    description: "TBA",
  },
  {
    date: "Thursday, November 2nd, 2023",
    time: "6:00 PM - 7:00 PM",
    location: "Kelley Engineering Center Room 1003 & Discord",
    title:
      "How to get a job @ the Big 4 (Google, Meta, Amazon, Microsoft) by Tom",
    description:
      "Join us for an insightful talk by Tom Nyuma on how to get a job at the worlds biggest tech companies!",
  },
  {
    date: "Thursday, November 9th, 2023",
    time: "6:00PM - 7:00PM",
    location: "Kelley Engineering Center Room 1003 & Discord",
    title: "Competitive Programming Practice",
    description: "Join us to prepare for the competition this weekend!",
  },
  {
    date: "Thursday, November 16th, 2023",
    time: "6:00PM - 7:00PM",
    location: "Kelley Engineering Center Room 1003 & Discord",
    title: "Fireside Chat with an OSU Alumnus Working At Microsoft",
    description:
      "We'll be having a Presentation/Q&A with Laura Jiang about their experiences at Microsoft and as a product manager! Join us for free pizza; come with your questions!",
  },
  {
    date: "Thursday, November 30th, 2023",
    time: "6:00PM - 8:00PM",
    location: "Kelley Engineering Center Room 1003 & Zoom",
    zoomLink:
      "https://oregonstate.zoom.us/j/98238089901?pwd=c3FKMnBTQ3pXVitVSHlsbVhwZVNsZz09",
    pin: "osuacm",
    title: "Fireside Chat with an OSU Alumnus Working At Google",
    description:
      "We'll be having a Presentation/Q&A from Melanie Gutzmann about her experiences working at Google as a Software Engineer! Join us for free pizza and come with your questions!",
  },
];

const currentEvents = events.filter((event) => {
  const eventTime = moment(
    `${event.date} ${event.time}`,
    "dddd, MMMM DD, YYYY h:mm A"
  );
  return eventTime.isAfter(moment());
});

export default currentEvents as Event[];
