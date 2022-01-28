import React from 'react';
import './App.css';



const dummyTickets = [
  {
    id: "1",
    title: "Build app",
    priority: 'high',
    date: new Date(2022, 1, 27),

  },
  {
    id: "2",
    title: "Tickets Need an Assignee",
    priority: 'high',
    date: new Date(2022, 1, 27),

  },
  {
    id: "3",
    title: "Tickets need an Admin",
    priority: 'high',
    date: new Date(2022, 1, 27),
  },
  {
    id: "4",
    title: "Tickets Need a Finished/ check for review ",
    priority: 'high',
    date: new Date(2022, 1, 27),
  },
  {
    id: "5",
    title: "Stylize Tickets",
    priority: 'high',
    date: new Date(2022, 1, 27),
  },
];




function App() {
  return (
    <div >
        <h2>Bug Tracker</h2>
        

        <hr/>
        <h3>Issue 1</h3>
        <h3>Priority: High</h3>
        <h3>Build App!!</h3>
        <h3>Assigned: Keith</h3>
    </div>


  );
}

export default App;
