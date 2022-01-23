import styled from 'styled-components';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DatesTimes from './DateTime';
import Select from './Select';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 20px;

	> label {
		display: flex;
		flex-direction: column;
		margin: 10px 0;

		> span {
			align-self: flex-start;
			margin-bottom: 5px;
		}

		> textarea {
			margin-bottom: 30px;
		}

		> select {
			color: blue;
		}
	}

	> div {
		display: flex;
		justify-content: flex-start;
	}
`;

const NewEvent = ({ updateList }) => {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [description, setDescription] = useState('No description provided');
	const [location, setLocation] = useState('Lagos');
	const [type, setType] = useState('Birthday');
	const [hidden, setHidden] = useState(false);


	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			title,
			date,
			id: uuidv4(),
			description,
			location,
			time,
      type,
		};
		updateList(data);
	};

	const handleCheck = () => {
		setLocation('Hidden');
		setHidden(!hidden);
	};

  const handleChange = (e) => {
    e.target.dataset.type==='Event Type:' ? setType(e.target.value) : setLocation(e.target.value) 
    console.log(e.target.style)
  }

	const handleDate = (e) => {
		e.target.type === 'date'
			? setDate(e.target.value)
			: setTime(e.target.value);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<label>
				<span>Event Title:</span>
				<input
					type='text'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</label>
			<Select
				data={[
					{ value: 'Birthday', id: 1 },
					{ value: 'Wedding', id: 2 },
					{ value: 'Hangout', id: 3 },
					{ value: 'Concert', id: 4 },
					{ value: 'Live Football', id: 5 },
					{ value: 'Play Game', id: 6 },
				]}
        types='Event Type:'
        handleChange={handleChange}
        hidden= {false}
        valueData={type}
			/>
      	<Select
				data={[
					{ value: 'Lagos', id: 1 },
					{ value: 'Abuja', id: 2 },
					{ value: 'Owerri', id: 3 },
					{ value: 'Kaduna', id: 4 },
					{ value: 'Calabar', id: 5 },
					{ value: 'Jos', id: 6 },
				]}
        types='Location:'
        handleChange={handleChange}
        hidden={hidden}
        valueData={location}
			/>
			<label>
				<span>Location: </span>
				<select
					onChange={(e) => setLocation(e.target.value)}
					value={location}
					style={{
						textDecoration: hidden ? 'line-through' : 'none',
						background: hidden ? 'orange' : '',
					}}
				>
					{hidden && <option value='hidden'>Hidden</option>}
					<option value='Lagos'>Lagos</option>
					<option value='Abuja'>Abuja</option>
					<option value='select'>Owerri</option>
					<option value='Owerri'>Kaduna</option>
					<option value='Awka'>Awka</option>
					<option value='Cross-Rivers'>Cross-Rivers</option>
					<option value='Jos'>Jos</option>
				</select>
			</label>
			<div className='hide'>
				<input type='checkbox' onChange={handleCheck} value='hide location' />
				<label>{hidden ? 'Location Hidden' : 'Hide Location'}</label>
			</div>
			<DatesTimes
				label='Event Date:'
				type='date'
				handleDate={handleDate}
				data={date}
			/>
			<DatesTimes
				label='Event Time:'
				type='time'
				handleDate={handleDate}
				data={time}
			/>
			<label>
				<span>Description</span>
				<textarea
					placeholder={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</label>
			<button type='submit'>Submit</button>
		</Form>
	);
};

export default NewEvent;
