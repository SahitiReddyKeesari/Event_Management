import { useState } from 'react';
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails';
import EventItem from '../EventItem';
import './index.css';

const eventsList = [

  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  // Rest of the eventsList...
];


const Events = ({data, selectedEvent, setSelectedEvent}) => {

  
  const [activeEventId, setActiveEventId] = useState('');
  
  const eventsList = Object.entries(data)
  console.log(eventsList, 'events');
  const getActiveEventRegistrationStatus = () => {
    const activeEventDetails = eventsList.find(
      event => event.id === activeEventId,
    );
    return activeEventDetails ? activeEventDetails.registrationStatus : '';
  };

  const renderEventsList = () => {
    return (
      <ul className="events-list">
        {eventsList.map(eachEvent => (
          <EventItem
            key={eachEvent.name}
            eventDetails={eachEvent[1]}
            setActiveEventId={setActiveEventId}
            isActive={eachEvent.id === activeEventId}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className="events-container">
      <div className="events-content">
        <h1 className="heading">Events</h1>
        {renderEventsList()}
      </div>
      {/* <ActiveEventRegistrationDetails
        activeEventRegistrationStatus={getActiveEventRegistrationStatus()}
      /> */}
    </div>
  );
};

export default Events;

