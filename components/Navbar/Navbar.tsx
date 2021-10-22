import styled from "styled-components";
import Logo from "./Logo/Logo";

const Container = styled.header`
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
    padding: 5px 20px;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.4);
`;

const Better = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;


function Navbar() {
    return (
        <Container>
            <Logo />
            <Better>Better</Better>
        </Container>
    );
}

export default Navbar;
