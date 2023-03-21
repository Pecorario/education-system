import { FC, ReactNode } from 'react';

import { SyncLoader } from 'react-spinners';

import * as S from './style';

interface FormProps {
  textButton: string;
  isLoading?: boolean;
  children: ReactNode;
  paddingTop?: string;
  onSubmit?: (e: React.FormEvent) => void;
  isDisabled?: boolean;
}

const Form: FC<FormProps> = ({
  onSubmit,
  isLoading,
  textButton,
  paddingTop,
  children,
  isDisabled = false
}) => {
  return (
    <S.FormContainer
      onSubmit={onSubmit}
      paddingTop={paddingTop}
      autoComplete="off"
    >
      {children}
      <S.Button disabled={isLoading || isDisabled}>
        {isLoading ? <SyncLoader color="white" size="12px" /> : textButton}
      </S.Button>
    </S.FormContainer>
  );
};

export default Form;
