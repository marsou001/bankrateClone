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
    width: 140px;
    font-weight: 600;
    line-height: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .bankrate {
    }
    div#b {
        color: #fff;
        background-color: #0157ff;
        padding: 10px;
        border-radius: 3px;
    }
    div#c {
        width: 100px;
        .mortgages {        
            font-size: 0.7rem;
            text-transform: uppercase;        
            letter-spacing: 0.15rem;
        }
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
                <div id='b'>B</div>
                <div id='c'>
                    <span className='bankrate'>Bankrate</span> <span className='mortgages'>mortgages</span>
                </div>
            </Logo>
            <Better>
                Better
            </Better>
        </Container>
    )
}

export default Navbar;
