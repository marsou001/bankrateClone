import styled from "styled-components";
import FormHeading from "./FormHeading/FormHeading";

const Container = styled.div`
    text-align: center;
    width: 95%;
    max-width: 800px;
    margin: auto;
`;

function Form() {
    return (
        <Container>
            <FormHeading />
        </Container>
    )
}

export default Form;
