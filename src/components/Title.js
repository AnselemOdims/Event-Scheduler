import styled from 'styled-components';

const Header = styled.header`
  text-align: center;

  > h1{
    margin: 20px 0 0;
    color: #9AD0EC;
    > span {
      color: #1572A1;
    }
  }

  > p {
    color: #2F3A8F;
    margin: 5px 0;
  }
`

const Title = ({subTitle}) => {
  return ( 
    <Header>
      <h1><span>Event</span> Scheduler</h1>
      <p>{subTitle}</p>
    </Header>
   );
}
 
export default Title;