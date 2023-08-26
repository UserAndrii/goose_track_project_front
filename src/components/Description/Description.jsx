// import CalendarD from '../../images/desktop-calendar.jpg';
// import CalendarT from '../../images/tablet-calendar.jpg';
import CalendarM from '../../images/mobile-calendar.jpg';
// import SidebarD from '../../images/desktop-sidebar.jpg';
// import SidebarT from '../../images/tablet-sidebar.jpg';
import SidebarM from '../../images/mobile-sidebar.jpg';
// import AllD from '../../images/desktop-all.jpg';
// import AllT from '../../images/tablet-all.jpg';
import AllM from '../../images/mobile-all.jpg';

import {
    Container,
    List,
    Item,
    ItemSpan,
    Number,
    Title,
    SubTitle,
    TextSpan,
    ImageWrapper,
    Image,
  } from './Description.styled';

const Description = () => {
    return (
        <Container>
            <List>
                <Item key={1}>
                    <ItemSpan>
                        <Number>
                            1. 
                        </Number>
                        <div>
                            <Title>
                                <SubTitle>
                                    CALENDAR
                                </SubTitle>
                                VIEW
                            </Title>
                        </div>
                        <TextSpan>
                            GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.
                        </TextSpan>
                    </ItemSpan>
                    <ImageWrapper>
                        <Image src={CalendarM} alt="Calendar" />
                    </ImageWrapper>
                </Item>
                <Item key={2}>
                    <ItemSpan>
                        <Number>
                            2.
                        </Number>
                        <div>
                            <Title>
                                SIDEBAR
                            </Title>
                        </div>
                        <TextSpan>
                        GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.
                        </TextSpan>
                    </ItemSpan>
                    <ImageWrapper>
                        <Image src={SidebarM} alt="Sidebar"/>
                    </ImageWrapper>
                </Item>
                <Item key={3}>
                    <ItemSpan>
                        <Number>
                            3.
                        </Number>
                        <div>
                            <Title>
                                <SubTitle>
                                    ALL IN
                                </SubTitle>
                                ONE
                            </Title>
                        </div>
                        <TextSpan>
                        GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.
                        </TextSpan>
                    </ItemSpan>
                    <ImageWrapper>
                        <Image src={AllM} alt="All"/>
                    </ImageWrapper>
                </Item>
            </List>
        </Container>
    );
  };
  
  export default Description;
