import styled from 'styled-components';
import { CenterScreen } from 'layouts/Screens';
import { CenterAlignment, DisabledSelection } from 'layouts/properties';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <Screen>
        <Notice as={Link} to="/">
          404
        </Notice>
      </Screen>
    </>
  );
};

const Screen = styled(CenterScreen)`
  ${DisabledSelection}
`;
const Notice = styled.div`
  all: unset;
  font-size: 50px;
  height: 2em;
  width: 3.2em;
  display: flex;
  ${CenterAlignment}
  // border
  box-sizing: border-box;
  border-radius: 0.4em;
  // animation
  transition: box-shadow, margin, font-size;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
  // hover
  &:hover {
    border: 1px solid #fff; // not using animation
    box-shadow: -5px 5px #fff;
    margin: 0 -5px 5px 0;
    // tablet
    @media (min-width: 770px) {
      box-shadow: -7px 7px #fff;
      margin: 0 -7px 7px 0;
    }
    // desktop
    @media (min-width: 1200px) {
      box-shadow: -10px 10px #fff;
      margin: 0 -10px 10px 0;
    }
  }
  // tablet
  @media (min-width: 770px) {
    font-size: 75px;
  }
  // desktop
  @media (min-width: 1200px) {
    font-size: 100px;
  }
`;

export default NotFoundPage;
