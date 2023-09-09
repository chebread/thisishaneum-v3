import AwardsBadge from 'components/Home/AwardsBadge';
import { HorizontalScreen } from 'layouts/Screens';
import { IntroPanel, AboutPanel } from 'pages/Home/panels';

const Home = () => {
  return (
    <>
      {/* <AwardsBadge /> */}
      <HorizontalScreen>
        <IntroPanel />
      </HorizontalScreen>
    </>
  );
};

export default Home;
