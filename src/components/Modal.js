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
  width: 400px;
  margin: 70px auto;
  text-align: center;
  background: #fff;
  padding: 10px;
  border-radius: 7px;
}

`
const Modal = ({children, handleModal}) => {
  return ReactDOM.createPortal(( 
    <Backdrop>
      <div className="modal">
      <button onClick={handleModal}>X</button>
      {children}
      </div>
    </Backdrop>
   ), document.body);
}
 
export default Modal;