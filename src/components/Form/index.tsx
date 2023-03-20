import { FC, ReactNode } from 'react';

import { BeatLoader } from 'react-spinners';

import * as S from './style';

interface FormProps {
  textButton: string;
  isLoading?: boolean;
  children: ReactNode;
  paddingTop?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

const Form: FC<FormProps> = ({
  onSubmit,
  isLoading,
  textButton,
  paddingTop,
  children
}) => {
  return (
    <S.FormContainer onSubmit={onSubmit} paddingTop={paddingTop}>
      {children}
      <S.Button disabled={isLoading}>
        {isLoading ? <BeatLoader color="#FFF" /> : textButton}
      </S.Button>
    </S.FormContainer>
  );
};

export default Form;
