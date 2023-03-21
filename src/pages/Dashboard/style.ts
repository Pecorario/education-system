import styled, { css } from 'styled-components';

interface StyledProps {
  paddingLeft?: string;
  fontSize?: string;
  hasMarginTop?: boolean;
  backgroundColor?: string;
  width?: string;
  minWidth?: string;
  span?: string;
  paddingBottom?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 90px 30px 0 30px;

  @media (max-width: 480px) {
    padding: 70px 5% 0 5%;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: hidden;
`;

export const InfoAndBarChartContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Card = styled.div`
  background: #f2f2f2;
  border-radius: 5px;
  padding: 15px;

  display: flex;
  flex-direction: column;

  width: 200px;
`;

export const Title = styled.h3`
  font-weight: 500;
  line-height: 1;
  margin-bottom: 10px;
`;

export const ItemsContainer = styled.div<StyledProps>`
  margin-top: ${props => props.hasMarginTop && '10px'};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
`;

export const Item = styled.div`
  padding: 5px;
  height: 100%;

  background: rgb(252, 151, 0, 0.7);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ItemDetails = styled.div`
  padding: 5px;

  background: rgb(252, 151, 0, 0.7);
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const ItemDetailsContent = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;

  padding-left: ${props => props.paddingLeft || ''};

  ${props =>
    props.fontSize &&
    css`
      p,
      span {
        font-size: ${props.fontSize};
      }
    `}
`;

export const ItemTitle = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1;
`;

export const ItemText = styled.span`
  font-size: 0.8rem;
`;

export const ChartsContainer = styled.div`
  width: 100%;
  height: calc(45% - 10px);

  display: flex;

  gap: 1rem;

  @media (min-width: 1201px) {
    height: 35%;
  }
`;

export const ChartCard = styled.div<StyledProps>`
  background: ${props => props.backgroundColor || '#f2f2f2'};
  border-radius: 5px;
  width: ${props => props.width || '100%'};
  min-width: ${props => props.minWidth || ''};

  padding: 15px;
  padding-bottom: ${props => props.paddingBottom || '1rem'};

  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Chart = styled.div<StyledProps>`
  height: 100%;
  width: 100%;

  padding-top: 5px;

  ${props =>
    props.span &&
    css`
      .recharts-xAxis.xAxis tspan {
        display: none;
      }
    `}
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
