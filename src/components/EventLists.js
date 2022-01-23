import styled from 'styled-components';

const EventContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
margin: 20px 0;

> div {
  background: #fff;
  border-radius: 7px;
  max-width: 300px;
  padding: 10px 20px;

  > button {
    border: none;
    background: #FF7F3F;
    padding: 10px;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    font: var(--font-1);
    font-size: 12px
  }

  > div {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  > div.type {
    display: flex;
    justify-content: space-between;
  }

}

`

const EventList = ({ events, handleRemove }) => {
	return (
		<EventContainer>
			{events.length ? events.map((event) => (
				<div key={event.id}>
          <div className="type">
          <span>{event.type}</span><span>{event.date}</span>
          </div>
					<h2>{event.title}</h2>
          <p>
						{event.description}
					</p>
          <div>
          <span>Location: {event.location}</span>
          <span>Time: {event.time} prompt</span>
          </div>
          <hr />
					<button onClick={() => handleRemove(event.id)}>Remove</button>
				</div>
			)) : <h3>No events to view yet</h3>}
		</EventContainer>
	);
};

export default EventList;
