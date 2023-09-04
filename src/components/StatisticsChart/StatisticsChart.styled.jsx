import styled from '@emotion/styled';
import PoppinsFontRegular from '../../fonts/Poppins-Regular.ttf';
export const ContainerWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 40px;

  @media screen and (min-width: 768px) {
    padding: 0 32px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 32px 32px;
  }
`;

export const Container = styled.div`
  width: 1057px;
  height: 100%;
  box-sizing: border-box;
  background-color: var(--main-background-color);
  border-radius: 16px;
  padding: 0 114px;
  padding-top: 134px;
  padding-bottom: auto;

  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 375px) {
    max-width: 335px;
    height: 100%;
    margin: 0 auto;
    padding: 0 14px;
    padding-top: 28px;
    padding-bottom: auto;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 335px;
    height: 100%;
    padding: 0 14px;
    padding-top: 28px;
    padding-bottom: auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 704px;
    height: 100%;
    padding: 0 32px;
    padding-top: 140px;
    padding-bottom: auto;
  }
`;

export const WrapPeriod = styled.div`
  width: 860px;
  display: flex;
  justify-context: space-between;
  margin-bottom: 40px;
  padding: 0 40px;

  @media (max-width: 375px) {
    max-width: 307px;
    height: auto;
    flex-direction: column;
    padding: 0;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    width: 307px;
    flex-direction: column;
    padding: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 640px;
    padding: 0 32px;
  }
`;

export const WrapLabels = styled.div`
  display: flex;
  width: 179px;

  @media (max-width: 375px) {
    max-width: 158;
    height: auto;
    margin-top: 20px;
  }
  @media screen and (min-width: 376px) and (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const WrapLabel = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 375px) {
    margin-right: 14px;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    margin-right: 14px;
  }
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;
export const LabelT = styled.p`
  text-wrap: nowrap;
  color: var(--calendar-date-color);
  font-family: ${PoppinsFontRegular};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  @media (max-width: 375px) {
    font-size: 14px;
  }

  @media screen and (min-width: 376px) and (max-width: 767px) {
    font-size: 14px;
  }
`;
