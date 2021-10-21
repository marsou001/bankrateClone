import styled from "styled-components";

const Container = styled.div`
    h1 {
        font-size: 2.4rem;
        font-family: serif;
    }
    P {
        color: #333;
    }
`;

function FormHeading() {
    return (
        <Container>
            <h1>Get your mortgage rate quote</h1>
            <p>It only takes about 30 seconds to complete your custom quote!</p>
        </Container>
    )
}

export default FormHeading;
