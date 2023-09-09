import { CursorIcon } from 'assets/svg';
import useMousePosition from 'hooks/useMousePosition';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// (bug): Cursor 전체 component를 숨기면 이상한 오류 엄청 뜸
// (feat): Cursur 조금만 처음 나올때나 들어갈때 부드럽게 하기; 이동시는 부드럽게 안해도 됨
const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isEnter, setIsEnter] = useState(false);

  useEffect(() => {
    const mouseEnter = () => {
      setIsEnter(true);
    };
    const mouseLeave = () => {
      setIsEnter(false);
    };
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);

    return () => {
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
    };
  });

  return (
    <Cursor style={{ left: `${x}px`, top: `${y}px` }}>
      {isEnter ? <CursorIcon /> : ''}
    </Cursor>
  );
};

const Cursor = styled.div`
  position: fixed; // 커서 고정
  z-index: 10000; // 커서 최상단으로 띄우기
  pointer-events: none; // z-index 때문에 안된 요소 선택 가능케 함
  svg {
    // 커서 사이즈 설정
    // default: 70px
    height: 50px;
    width: 50px;
  }
`;

export default CustomCursor;
