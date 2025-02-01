import React, { useState, useEffect } from "react";
import "../styles/Schedule.css";


const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  // State to track which event’s dropdown is open (by event index)
  const [openDropdown, setOpenDropdown] = useState({});

  // Reset open dropdowns whenever the selected day changes
  useEffect(() => {
    setOpenDropdown({});
  }, [selectedDay]);

  const scheduleData = [
    {
      day: "Day 1",
      date: "22 Feb 2024",
      events: [
        {
          time: "09:30 AM - 11:00 AM",
          title: "Inaugral Event",
          description: ""
        },
        {
          time: "11:00 AM - 11:30 AM",
          title: "Break"
        },
        {
          time: "11:30 AM - 01:00 PM",
          title: "Bucket 1",
          description: "The Entrepreneur's Mind : From Vision to Venture"
        },
        {
          time: "01:00 PM - 02:00 PM",
          title: "Lunch"
        },
        {
          time: "02:00 PM - 03:30 PM",
          title: "Bucket 2",
          description: ""
        }
        // If you have an event for 03:30 PM - 05:00 PM, add it here.
      ]
    },
    {
      day: "Day 2",
      date: "23 Feb 2024",
      events: [
        {
          time: "09:30 AM - 11:00 AM",
          title: "Inception Ceremony",
          description: ""
        },
        {
          time: "11:00 AM - 11:30 AM",
          title: "Break"
        },
        {
          time: "11:30 AM - 01:00 PM",
          title: "Bucket 4",
          description: ""
        },
        {
          time: "01:00 PM - 02:00 PM",
          title: "Lunch"
        },
        {
          time: "02:00 PM - 03:30 PM",
          title: "Bucket 5",
          description: ""
        },
        {
          time: "03:30 PM - 05:00 PM",
          title: "Felicitation of sponsors & closing ceremony",
          description: ""
        }
      ]
    }
  ];

  const handleToggleDropdown = (index) => {
    // Do nothing if the event is Break or Lunch
    const event = scheduleData[selectedDay].events[index];
    if (
      event.title.toLowerCase() === "break" ||
      event.title.toLowerCase() === "lunch"
    ) {
      return;
    }
    setOpenDropdown((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="schedule-section">
      <div className="schedule-container">
        <div className="schedule-left">
          <div className="image-overlay">
            <h3>Event Activities</h3>
            <h1>Schedule that we follow seriously</h1>
          </div>
        </div>
        <div className="schedule-right">
          <div className="schedule-tabs">
            {scheduleData.map((day, index) => (
              <button
                key={index}
                className={`tab ${selectedDay === index ? "active" : ""}`}
                onClick={() => setSelectedDay(index)}
              >
                <span>{day.day}</span>
                <span>{day.date}</span>
              </button>
            ))}
          </div>

          <div className="schedule-events">
            {scheduleData[selectedDay].events.map((event, index) => (
              <div key={index}>
                <div
                  className="event-card"
                  onClick={() => handleToggleDropdown(index)}
                  style={{
                    cursor:
                      event.title.toLowerCase() !== "break" &&
                      event.title.toLowerCase() !== "lunch"
                        ? "pointer"
                        : "default"
                  }}
                >
                  <div className="event-time">{event.time}</div>
                  <div className="event-title">{event.title}</div>
                </div>
                {/* Show dropdown for all events except Break and Lunch */}
                {event.title.toLowerCase() !== "break" &&
                  event.title.toLowerCase() !== "lunch" &&
                  openDropdown[index] && (
                    <div className="bucket-description">
                      {event.description && event.description.trim().length > 0
                        ? event.description.split("\n").map((line, i) => (
                            <p key={i} style={{ margin: "0 0 5px" }}>
                              {line}
                            </p>
                          ))
                        : "More details coming soon"}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
