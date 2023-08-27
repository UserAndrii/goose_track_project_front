import { Container, Title, PlusBtn } from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ title }) => {
    return (
        <Container>
                <Title>{title}</Title> 
                <PlusBtn />
        </Container>
 )   
}
export default ColumnHeadBar;