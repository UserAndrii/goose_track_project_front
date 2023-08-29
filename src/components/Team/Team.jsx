import { useLocation } from 'react-router-dom';

import YuriiKlim from '../../images/America_YKlim.jpg';
import YuriiKag from '../../images/Ant-Man_YKag.jpg';
import SergiyS from '../../images/Black_Panter_SS.jpg';
import GalinaK from '../../images/Red_Witch_GK.jpg';
import AnnaT from '../../images/Captain_Marvel_AT.jpg';
import AndriiK from '../../images/Doctor_Strange_AK.jpg';
import AndriiG from '../../images/Fury_AG.jpg';
import AlexV from '../../images/Hulk_OV.jpg';
import OleksandD from '../../images/Iron_Man_OD.jpg';
import VolodymrK from '../../images/Spider_Man_VK.jpg';
import IlliaS from '../../images/Thanos_IS.jpg';
import AndriyH from '../../images/Thor_AH.jpg';

import {
    Container,
    Title,
    Button,
    List,
    Item,
    ItemSpan,
    TextSpan,
    ImageWrapper,
    Image,
} from './Team.styled';

const Team = () => {
    const location = useLocation();

    return (
        <Container>
            <Title>Our Team</Title>
            <Button to={location.state?.from ?? '/'}>
                Back
            </Button>
            <List>
                <Item key={1}>
                    <ImageWrapper>
                        <Image src={AndriiG} alt='AndriiG' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/andrii-hadar/' target="_blank">Aндрій Гадар</TextSpan>
                        <TextSpan href='https://github.com/UserAndrii' target="_blank">Team lead (Front-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={2}>
                    <ImageWrapper>
                        <Image src={AlexV} alt='AlexV' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/olexander-vainahii-849ba5280/' target="_blank">Олександр Вайнагій</TextSpan>
                        <TextSpan href='https://github.com/AlexVainahii' target="_blank">Team lead (Back-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={3}>
                    <ImageWrapper>
                        <Image src={AnnaT} alt='AnnaT' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/annatil1/' target="_blank">Анна Тілл</TextSpan>
                        <TextSpan href='https://github.com/annatill' target="_blank">Scrum master</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={4}>
                    <ImageWrapper>
                        <Image src={AndriiK} alt='AndriiK' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/andrew-ketsko/' target="_blank">Андрій Кецко</TextSpan>
                        <TextSpan href='https://github.com/AndrewKetsko' target="_blank">Developer (Back-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={5}>
                    <ImageWrapper>
                        <Image src={AndriyH} alt='AndriyH' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/andriy-hanzel/' target="_blank">Андрій Ганзел</TextSpan>
                        <TextSpan href='https://github.com/andriy-h80' target="_blank">Developer (Front-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={6}>
                    <ImageWrapper>
                        <Image src={SergiyS} alt='SergiyS' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/siracenco-serghei/' target="_blank">Сергій Сіраченко</TextSpan>
                        <TextSpan href='https://github.com/SiracencoSerghei' target="_blank">Developer (Front-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={7}>
                    <ImageWrapper>
                        <Image src={YuriiKlim} alt='YuriiKlim' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/yurii-klymenko-a5a073280/' target="_blank">Юрій Кліменко</TextSpan>
                        <TextSpan href='https://github.com/Klimch1k' target="_blank">Developer (Front-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={8}>
                    <ImageWrapper>
                        <Image src={YuriiKag} alt='YuriiKag' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/yurii-kahadii-79405a272/' target="_blank">Юрій Кагадій</TextSpan>
                        <TextSpan href='https://github.com/YurionStyle' target="_blank">Developer (Front-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={9}>
                    <ImageWrapper>
                        <Image src={GalinaK} alt='GalinaK' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/halyna-karpinskaya/' target="_blank">Галина Карпінська</TextSpan>
                        <TextSpan href='https://github.com/GalynkaK' target="_blank">Developer (Front-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={10}>
                    <ImageWrapper>
                        <Image src={OleksandD} alt='OleksandD' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/oleksandr-deren/' target="_blank">Олександр Дерен</TextSpan>
                        <TextSpan href='https://github.com/Oderen' target="_blank">Developer (Front-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={11}>
                    <ImageWrapper>
                        <Image src={VolodymrK} alt='VolodymrK' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='https://www.linkedin.com/in/vkostenko/' target="_blank">Володимир Костенко</TextSpan>
                        <TextSpan href='https://github.com/VolodymyrK2' target="_blank">Developer (Front-end)</TextSpan>
                    </ItemSpan>
                </Item>
                <Item key={12}>
                    <ImageWrapper>
                        <Image src={IlliaS} alt='IlliaS' />
                    </ImageWrapper>
                    <ItemSpan>
                        <TextSpan href='' target="_blank">Ілля Сидор</TextSpan>
                        <TextSpan href='' target="_blank">Developer (Front-end)</TextSpan>
                    </ItemSpan>
                </Item>
            </List>
        </Container>
    );
};
      
export default Team;
