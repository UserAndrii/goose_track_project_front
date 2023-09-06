import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: var(--main-background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  height: auto;

  @media screen and (max-width: 767px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    `;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 64px;
    padding: 0 20px;

    @media screen and (min-width: 768px) {
        gap: 48px; 
        padding: 0 32px;
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        gap: 228px; 
        flex-direction: row;
        padding-left: 205px;
        padding-right: 128px;

        &:nth-of-type(even) {
            flex-direction: row-reverse;
            padding-left: 128px;
            padding-right: 205px;
        }
    }
`;

export const ItemSpan = styled.div`
    
    @media screen and (min-width: 768px) and (max-width: 1439px) {
        min-width: 275px;

        &.reverse {
            margin-left: auto;
        }
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;


export const Number = styled.div`
  color: var(--accent-color);
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -4px;

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }
`;

export const Title = styled.h2`
    margin-top: 14px;
    margin-bottom: 14px;

    color: var(--title-text-main-color);
    font-size: 32px;
    font-weight: 700;
    line-height: 1.25;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        font-size: 40px;
        margin-bottom: 24px;
    }
`;

export const SubTitle = styled.div`
  width: fit-content;
  padding: 8px 18px;
  margin-bottom: 6px;
  border-radius: 44px;
  color: var(--accent-color);
  background-color: var(--auth-background-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const TextSpan = styled.div`
  display: inline-block;
  // width: 335px;
  color: rgba(17, 17, 17, 0.9);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    width: 275px;
  }
`;

export const ImageWrapper = styled.div`
  display: block;
  border-radius: 40px;
  background: inherit;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    max-width: 335px;
    max-height: 457px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
    max-height: 700px;
    border-radius: 100px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 604px;
    // margin-top: 0;
  }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;
