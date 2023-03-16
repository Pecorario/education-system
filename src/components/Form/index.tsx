import { FC } from 'react';

import { BeatLoader } from 'react-spinners';

import * as S from './style';

interface FormProps {
  textButton: string;
  isLoading: boolean;
  onSubmit: () => void;
  children: React.ReactNode;
}

const Form: FC<FormProps> = ({ onSubmit, isLoading, children, textButton }) => {
  return (
    <S.FormContainer onSubmit={onSubmit}>
      {children}
      <S.Button disabled={isLoading}>
        {isLoading ? <BeatLoader color="#FFF" /> : textButton}
      </S.Button>
    </S.FormContainer>
  );
};

export default Form;
