import styled from 'styled-components';

const AboutPanel = () => {
  return (
    <Screen>
      <Category>About</Category>
      <Dialog>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla tenetur
        consectetur deleniti optio perferendis! Ullam Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Nulla tenetur consectetur deleniti
        optio perferendis! Ullam
      </Dialog>
    </Screen>
  );
};

const Screen = styled.div`
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
`;
const Category = styled.div`
  grid-row: 4;
  font-size: 100px;
  font-weight: 700;
  margin: 0 10px 0 10px;
  align-self: end;
`;
const Dialog = styled.div`
  grid-row: 5 / 9;
  margin: 0 10px 0 10px;
`;

export default AboutPanel;
