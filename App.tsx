import Router from 'components/Router/Router';
import styled from 'styled-components';

// (feat): 404, 403 page notify 추가하기
const App = () => {
  return (
    <>
      {/* <NotifyWrapper>
        <Notify>This page is not served</Notify>
      </NotifyWrapper> */}
      <Router />
    </>
  );
};

const NotifyWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const Notify = styled.div`
  position: fixed;
  z-index: 1;
  width: 50%;
  background-color: seagreen;
`;

export default App;
