import styled from "styled-components";
import FormHeading from "./FormHeading/FormHeading";
import FormMain from "./FormMain/FormMain";

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
            <FormMain />
        </Container>
    )
}

export default Form;
