import { Container, IconButton } from './TaskToolbar.styled';
import { AiOutlineLogin } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { CgTrashEmpty } from "react-icons/cg";

const TaskToolbar = () => {
    return (
        <Container>
            <IconButton>
                <AiOutlineLogin/>
            </IconButton>
            <IconButton>
                <HiOutlinePencil />
            </IconButton>
            <IconButton>
                <CgTrashEmpty />
            </IconButton>
        </Container>
    );
};

export default TaskToolbar;
