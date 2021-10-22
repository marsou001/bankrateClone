import styled from "styled-components";
import BLogo from "./BLogo/BLogo";
import BankrateMortages from "./BankrateMortages/BankrateMortgages";

const Container = styled.div`
    width: 140px;
    font-weight: 600;
    line-height: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function Logo() {
    return (
        <Container>
            <BLogo>B</BLogo>
            <BankrateMortages>
                <span className="bankrate">Bankrate</span>{" "}
                <span className="mortgages">mortgages</span>
            </BankrateMortages>
        </Container>
    );
}

export default Logo;
