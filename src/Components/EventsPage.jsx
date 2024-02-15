import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './EventsPage.css'; // Add your custom styles

const EventsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // const formattedDate = selectedDate.toISOString().split('T')[0];

    fetch(`http://localhost:3000/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  console.log(events);

  return (
    <div className="events-container">
      <div className="calendar">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      <div className="events-list">
        <h2>Events for {selectedDate.toDateString()}</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventsPage;
