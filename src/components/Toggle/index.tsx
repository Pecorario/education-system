import { FC } from 'react';

import Switch from 'react-switch';

import * as S from './style';

interface ToggleProps {
  setIsBlocked: (value: boolean) => void;
  isBlocked: boolean;
}

const Toggle: FC<ToggleProps> = ({ isBlocked, setIsBlocked }) => {
  function handleChange() {
    setIsBlocked(!isBlocked);
  }

  return (
    <S.Container>
      <S.Text>{isBlocked ? 'BLOQUEADA' : 'DESBLOQUEADA'}</S.Text>
      <Switch
        checked={isBlocked}
        onChange={handleChange}
        onColor="#86d3ff"
        onHandleColor="#00bbff"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
    </S.Container>
  );
};

export default Toggle;
