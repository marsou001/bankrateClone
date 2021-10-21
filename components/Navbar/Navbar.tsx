import styled from "styled-components";

const Container = styled.header`
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
    padding: 5px 20px;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.4);
`;

const Logo = styled.div`
    width: 100px;
    font-weight: 600;
    line-height: 15px;
    .bankrate {
    }
    .mortgages {        
        font-size: 0.7rem;
        text-transform: uppercase;        
        letter-spacing: 0.1rem;
    }
`;

const Better = styled.div`
    font-size: 3.0rem;
    font-weight: bold;
`;

function Navbar() {
    return (
        <Container>
            <Logo>
                <span className='bankrate'>Bankrate</span> <span className='mortgages'>mortgages</span>
            </Logo>
            <Better>
                Better
            </Better>
        </Container>
    )
}

export default Navbar;
