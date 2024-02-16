import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './EventsPage.css';

const EventsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/events`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Filter events based on the selected date
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const filtered = events.filter((event) => event.date === formattedDate);
    setFilteredEvents(filtered);
  }, [selectedDate, events]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="events-container">
      <div className="calendar">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      <div className="events-list">
        {/* <h2>Events for {selectedDate.toDateString()}</h2> */}
        {filteredEvents.length === 0 ? (
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
        ) : (
          <ul className='event'>
            {filteredEvents.map((event) => (
              <li key={event.id}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p> <span> Date: {event.date}</span> </p>
                <p> <span> Location: {event.location} </span> </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
