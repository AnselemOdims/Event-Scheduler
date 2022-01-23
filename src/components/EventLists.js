import styled from 'styled-components';

const EventContainer = styled.div`
  background: #fff;
  border-radius: 7px;
  max-width: 300px;
  padding: 10px 20px;
  margin: 20px 0;

  > button {
    border: none;
    background: red;
    padding: 10px;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }
`

const EventList = ({ events, handleRemove }) => {
	return (
		<>
			{events.length ? events.map((event) => (
				<EventContainer key={event.id}>
					<h2>{event.title}</h2>
          <span>{event.date} : {event.time}</span>
          <p>
						{event.description}
					</p>
          <span>Location: {event.location}</span>
          <hr />
					<button onClick={() => handleRemove(event.id)}>Remove</button>
				</EventContainer>
			)) : <h2>No events to view yet</h2>}
		</>
	);
};

export default EventList;
