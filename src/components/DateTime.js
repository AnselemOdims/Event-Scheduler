const DatesTimes = ({label, type, handleDate, data}) => {
  return ( 
    <label>
				<span>{label}</span>
				<input
					type={type}
					onChange={handleDate}
					value={data}
					required
				/>
		</label>
   );
}
 
export default DatesTimes;