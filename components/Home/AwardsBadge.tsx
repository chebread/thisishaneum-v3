import styled from 'styled-components';
import { AwardsIcon } from 'assets/svg';

const AwardsBadge = () => {
  return (
    <BadgeWrapper>
      <Badge>
        <a href="https://www.awwwards.com/sites/sarah-fatmi" target="_blank">
          <AwardsIcon />
        </a>
      </Badge>
    </BadgeWrapper>
  );
};

const BadgeWrapper = styled.div`
  position: absolute; // 타 element 선택 가능케 하기
  height: 100%;
  display: flex;
  align-items: center;
`;
const Badge = styled.div`
  z-index: 1;
  position: fixed;
`;
export default AwardsBadge;
