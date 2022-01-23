import { useState } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Modal from './components/Modal';
import EventLists from './components/EventLists';
import NewEvent from './components/NewEvent';

const Container = styled.div`
	width: 70%;
	margin: 0 auto;

	> .buttons {
		display: flex;
		justify-content: center;
		margin: 30px 0;

		> button {
			padding: 12px 15px;
			border: none;
			background: #1572a1;
			color: #fff;
			border-radius: 3px;
			cursor: pointer;
			font-family: var(--font-1);

			&:last-child {
				margin-left: 20px;
			}
		}
	}

	h3 {
		color: #ff7f3f;
	}
`;
function App() {
	const [showModal, setShowModal] = useState(false);
	const [showEvents, setShowEvents] = useState(false);
	const [events, setEvents] = useState([
		{
      id: 1,
			title: 'The Lagos Party',
			date: '2022-01-15',
			time: '10:51pm',
			description: 'The biggest party in Africa',
			location: 'Lagos',
			type: 'Concert',
			hidden: true,
		},
    {
      id: 2,
			title: 'Chelsea vs Man Utd',
			date: '2022-01-18',
			time: '05:45pm',
			description: 'The heavyweights lock horns',
			location: 'Abuja',
			type: 'Live Football',
			hidden: true,
		},
    {
      id: 3,
			title: 'Made in Lagos Tour',
			date: '2022-01-27',
			time: '09:55am',
			description: 'Wizkid takes his tour around the continent',
			location: 'Lagos',
			type: 'Concert',
			hidden: true,
		},
	]);

	const handleModal = () =>
		showModal ? setShowModal(false) : setShowModal(true);

	const handleRemove = (id) => {
		setEvents((prevState) => prevState.filter((event) => event.id !== id));
	};

	const updateList = (data) => {
		setEvents((prevState) => [...prevState, data]);
		setShowModal(false);
	};

	return (
		<Container>
			<Title subTitle='All the events in your area' />
			<div className='buttons'>
				<button onClick={handleModal}>Add New Event</button>
				{!showEvents && (
					<button onClick={() => setShowEvents(true)}>Show Events</button>
				)}
				{showEvents && (
					<button onClick={() => setShowEvents(false)}>Hide Events</button>
				)}
			</div>
			{showEvents && <EventLists events={events} handleRemove={handleRemove} />}
			{!showEvents && (
				<h3>
					Events are hidden, click the <span> Show Events</span> button to see
					events
				</h3>
			)}
			<hr />
			{showModal && (
				<Modal handleModal={handleModal}>
					<NewEvent updateList={updateList} />
				</Modal>
			)}
		</Container>
	);
}

export default App;
