import React from "react";
import "./timeline.css";

const timelineData = [
  {
    date: "11 Oct 23",
    events: [
      {
        status: "Proposal Sent",
        time: "05:30 PM",
        title: "Discussion Done",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        followUp: "Follow Up : 11 Oct 23 10:30 AM",
        author: "Bhimkumar Prasad",
      },
      {
        status: "Interested",
        time: "02:30 PM",
        title: "Discussion Done",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        followUp: "Follow Up : 11 Oct 23 10:30 AM",
        author: "Bhimkumar Prasad",
      },
    ],
  },
  {
    date: "7 Oct 23",
    events: [
      {
        status: "Proposal Sent",
        time: "05:30 PM",
        title: "Discussion Done",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        followUp: "Follow Up : 11 Oct 23 10:30 AM",
        author: "Bhimkumar Prasad",
      },
      {
        status: "Interested",
        time: "02:30 PM",
        title: "Discussion Done",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        followUp: "Follow Up : 11 Oct 23 10:30 AM",
        author: "Bhimkumar Prasad",
      },
    ],
  },
];

function TimelineItem({ event }) {
  return (
    <div className="timeline-item">
      <div className="timeline-left">
        <div className="timeline-status">{event.status}</div>
        <div className="timeline-time">{event.time}</div>
      </div>
      <div className="timeline-right">
        <div className="timeline-dot"></div>
        <h3 className="timeline-title">{event.title}</h3>
        <p className="timeline-description">{event.description}</p>
        <p className="timeline-follow-up">{event.followUp}</p>
        <p className="timeline-author">- {event.author}</p>
      </div>
    </div>
  );
}

function TimelineGroup({ data }) {
  return (
    <div className="timeline-group">
      <h2 className="timeline-date">{data.date}</h2>
      <div className="timeline-card">
        <div className="timeline-line"></div>
        {data.events.map((event, index) => (
          <TimelineItem key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <>
      <div className="timeline-container">
        {timelineData.map((group, index) => (
          <TimelineGroup key={index} data={group} />
        ))}
      </div>
    </>
  );
}

export default Timeline;
