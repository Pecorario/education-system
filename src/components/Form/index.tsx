import { FC, ReactNode } from 'react';

import { BeatLoader } from 'react-spinners';

import * as S from './style';

interface FormProps {
  textButton: string;
  isLoading?: boolean;
  children: ReactNode;
  onSubmit?: (e: React.SyntheticEvent) => void;
}

const Form: FC<FormProps> = ({ onSubmit, isLoading, textButton, children }) => {
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
