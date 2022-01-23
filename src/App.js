import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventLists from './components/EventLists';
import NewEvent from './components/NewEvent';

function App() {
	const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [events, setEvents] = useState([])

	const handleModal = () => showModal ? setShowModal(false):setShowModal(true);

  const handleRemove = (id) => {
    setEvents(prevState => (
      prevState.filter(event=> event.id !== id)
    ))
  }

  const updateList = (data) => {
    setEvents(prevState=>[...prevState, data]);
    setShowModal(false)
  }

	return (
		<div className='App'>
			<Title title='Event Scheduler' subTitle='All the events in your area' />
			<button onClick={handleModal}>Add New Event</button>
			{!showEvents && <button onClick={()=> setShowEvents(true)}>Show Events</button>}
			{showEvents && <button onClick={()=> setShowEvents(false)}>Hide Events</button>}
      {showEvents && <EventLists events={events} handleRemove={handleRemove}/>}
      {!showEvents && <h3>Events are hidden, click <span>Show Events</span> button to see events</h3>}
			<hr/>
      {showModal && (
				<Modal handleModal={handleModal}>
					<NewEvent updateList={updateList}/>
				</Modal>
			)}
		</div>
	);
}

export default App;
