import styled from '@emotion/styled';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #3E85F3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px) {
        max-width: 375px;
        height: 812px;
    }

    @media screen and (min-width: 768px) and (max-width: 1439px) {
        min-width: 768px;
        height: 1024px;
    }

    @media screen and (min-width: 1440px) {
        width: 1440px;
        height: 770px;
    }
`;

export const ImageWrapper = styled.div`
    display: block;

    @media screen and (max-width: 767px) {
        max-width: 142px;
        max-height: 142px;
        padding-top: 256px;
        padding-left: 116.5px;
        padding-right: 116.5px;
    }

    @media screen and (min-width: 768px) {
        max-width: 150px;
        max-height: 149px;
        padding-top: 331px;
        padding-left: 309px;
        padding-right: 309px;
    }

    @media screen and (min-width: 1440px) {
        padding-top: 187px;
        padding-left: 645px;
        padding-right: 645px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Text = styled.h1`
    color: #FFFFFF;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 44px;
    font-weight: 700;
    line-height: 1.09;
`;

export const TextSpan = styled.span`
    color: #FFFFFF;
    font-size: 44px;
    font-style: italic;
    font-weight: 700;
    line-height: 1.09;
`;

export const List = styled.div`
    margin-top: 32px;
    padding-bottom: 256px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding-bottom: 330px;
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding-bottom: 200px;
}
`;

export const Button = styled(Link)`
    background: #FFFFFF;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    padding: 14px 33.5px;
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
        padding: 15.5px 28.5px;
        margin-left: 24px;
        margin-bottom: 0;
    }
`;

export const ButtonText = styled.span`
    color: #3E85F3;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.28px;
    
    margin-right: 6px;
`;  

export const ItemIcon = styled(FiLogIn)`
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #3E85F3;
`;

export const AuthLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
    font-size: 12px;
    font-weight: 600;
    line-height: 1.17;
    text-decoration-line: underline;
`;
