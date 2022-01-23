const Select = ({types, handleChange,hidden, valueData, data }) => {
  return ( 
    <label>
      <span>{types}</span>
      <select onChange={handleChange} value={valueData}  data-type={types} style={{textDecoration: hidden ? 'line-through':'none', background: hidden && 'orange'}} >
      {hidden && <option value="hidden">Hidden</option>}
      {data.map(item=> <option key={item.id} value={item.value}>{item.value}</option>)}
      </select>
    </label>
   );
}
 
export default Select;