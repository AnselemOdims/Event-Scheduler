import styled from 'styled-components'

const Label = styled.label`
  > select {
    padding: 8px;
    border: none;
    border-bottom: solid 0.1rem #9AD0EC;
    border-radius: 3px;
    font-family: var(--font-1);
    background: #fff;

    &:focus {
        outline: none;
        border: none;
        border-bottom: solid 0.1rem #1572A1;
        padding: 8px;
    }
  }
`
const Select = ({types, handleChange,hidden, valueData, data }) => {
  return ( 
    <Label>
      <span>{types}</span>
      <select onChange={handleChange} value={valueData}  data-type={types} style={{textDecoration: hidden ? 'line-through':'none', background: hidden && '#FF7F3F'}} required>
      {hidden && <option value="hidden">Hidden</option>}
      {data.map(item=> <option key={item.id} value={item.value}>{item.value}</option>)}
      </select>
    </Label>
   );
}
 
export default Select;