import { Container, Title, PlusBtn } from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ category }) => {
    return (
        <Container>
                <Title>{category}</Title> 
                <PlusBtn />
        </Container>
 )   
}
export default ColumnHeadBar;