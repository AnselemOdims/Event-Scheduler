import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Backdrop = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(51, 50, 50, 0.596);

> div {
  width: 39%;
  margin: 30px auto;
  text-align: center;
  background: #fff;
  padding: 10px;
  border-radius: 7px;

   > div {
    display: flex;
    justify-content: flex-end;

    button{
      border: none;
      background: #fff;
      font-size: 25px;
      font-weight: bold;
      cursor: pointer;
      font-family: var(--font-1)
    }

    button:hover {
      color: #FF7F3F;
    }

   }
}

`
const Modal = ({children, handleModal}) => {
  return ReactDOM.createPortal(( 
    <Backdrop>
      <div className="modal">
        <div>
      <button onClick={handleModal}>x</button>
        </div>
      {children}
      </div>
    </Backdrop>
   ), document.body);
}
 
export default Modal;