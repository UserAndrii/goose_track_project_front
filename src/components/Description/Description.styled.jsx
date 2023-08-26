import styled from '@emotion/styled';

export const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px) {
        min-width: 375px;
        height: auto;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        min-width: 768px;
        height: auto;
    }

    @media screen and (min-width: 1440px) {
        width: 1440px;
        height: auto;
    }
`;

export const List = styled.ul`

}
`;

export const Item = styled.li`
    margin-top: 64px;
    padding: 0 20px;

    @media screen and (min-width: 768px) {
        padding: 0 32px;
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: row;
        padding-left: 205px;
        padding-right: 128px;
    }
`;

export const ItemSpan = styled.div`
    
`;

export const Number = styled.div`
    color: #3E85F3;
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

    color: #171820;
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
    color: #3E85F3;
    background-color: #DCEBF7;
    
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
`;

export const TextSpan = styled.div`
    width: 335px;
    color: rgba(17, 17, 17, 0.90);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;

    @media screen and (min-width: 768px) {
        width: 275px;
    }
`;

export const ImageWrapper = styled.div`
    display: block;
    border-radius: 40px;
    background: #E3F3FF;
    margin-top: 40px;
    // width: 335px;
    // height: 457px;

    @media screen and (max-width: 767px) {
        min-width: 335px;
        min-height: 457px;
    }

    @media screen and (min-width: 768px) {
        min-width: 704px;
        min-height: 700px;
        border-radius: 100px;
    }

    @media screen and (min-width: 1440px) {
        min-width: 604px;
        // min-height: 700px;
        // border-radius: 100px;
        margin-top: 0;
        margin-left: 228px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;
