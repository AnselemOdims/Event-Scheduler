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
		margin: 10px 0 0;

    > input {
      padding: 0;
      border: none;
      border-bottom: solid 0.1rem #9AD0EC;
      border-radius: 3px;
      font-family: var(--font-1);
      cursor: pointer;
      transition: border-bottom,padding ease-out 0.2s 0.3s;

      &:focus {
        outline: none;
        border: none;
        border-bottom: solid 0.1rem #1572A1;
        padding: 8px;
      }
    }

		> span {
			align-self: flex-start;
      font-weight: 520;
      margin-top: 10px;
		}

    &.desc {
      > span {
        margin-bottom: 5px;
      }
    }

		> textarea {
			margin-bottom: 20px;
      height: 80px;
      font-family: var(--font-1);
      border: solid 0.1rem #9AD0EC;
      border-radius: 3px;

      &:focus {
        border: solid 0.1rem #1572A1;
        outline: none;
      }
		}
	}

	> div {
		display: flex;
		justify-content: flex-start;
	}

  .hide {
    font-size: 12px;
    label {

      margin-top: 3px;
    }
  }

  > button {
    padding: 12px 15px;
    border: none;
    background: #1572A1;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    font-family: var(--font-1);
    font-size: 1rem;
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
		setLocation('Strictly by IV');
		setHidden(!hidden);
	};

	const handleChange = (e) => {
		e.target.dataset.type === 'Event Type:'
			? setType(e.target.value)
			: setLocation(e.target.value);
	};

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
          required
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
				hidden={false}
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
			<label className="desc">
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
