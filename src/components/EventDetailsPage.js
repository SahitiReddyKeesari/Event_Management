import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const EventDetailsPage = ({selectedEvent}) => {
    console.log(selectedEvent,"event Details")
    const {name, description, id, image, date, location, startTime, endTime} =selectedEvent
    
  return (
    <div>
     <h1 className="headingEvent">Event</h1>
     <div className='checkedInButton'>
     <Link to={{ pathname: `/events/${id}/attendees` }}>
     <button className="icon-button" onClick={()=>{}}>
      <FontAwesomeIcon icon={faUsers} className="icon" />
      <span className="checkedLabel">Checked In List</span>
    </button>
      </Link>  
    
    </div>
    <div className='fullDetails'>
        
    <img src={selectedEvent?.image} alt="event" className='fullImage' />
    <div className='detailsContainer'>
    <p className="name">{name}</p>
      <p className="location">Event Location: {location}</p>
      <p className="location">Event Date: {date}</p>
      <p className="location">Event Time: {startTime} - {endTime}</p>
      <p className="location">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default EventDetailsPage;