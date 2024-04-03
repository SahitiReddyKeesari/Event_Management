
import Events from './components/Events'

/* global firebase */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import EventDetailsPage from './components/EventDetailsPage';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import AddEventForm from './components/Events/AddEventForm';
import AttendeesPage from './components/Attendees/AttendeesPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "faceattendance-b4196.firebaseapp.com",
  databaseURL: "https://faceattendance-b4196-default-rtdb.firebaseio.com",
  projectId: "faceattendance-b4196",
  storageBucket: "faceattendance-b4196.appspot.com",
  messagingSenderId: "173917752331",
  appId: "1:173917752331:web:db09532e3dc85a70748b0e",
  measurementId: "G-S0W16N9V60"
};

export const app = initializeApp(firebaseConfig);
function App() {

  const [data, setData] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  useEffect(() => {
    // Get a reference to the Firebase Realtime Database
    const database = getDatabase(app);
    const eventsRef = ref(database, 'Events');
    console.log(data,'data')
    // Fetch data once
    get(eventsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
  <Router>
     <div className='navBar'>
     <Link to={{ pathname: `/` }}> <div>  Home</div></Link>
     <Link to={{ pathname: `/addEvent` }}><div>  Add Event</div></Link>
     </div>
   
    
      <Routes>
        <Route path="/" element={data && <Events data={data} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>} />
        <Route path="/addEvent" element={<AddEventForm/>} />
        <Route path="/events/:eventId" element={<EventDetailsPage selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>} />
        <Route path="/events/:eventId/attendees" element={<AttendeesPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
