import styled from "styled-components";
import FormHeading from "./FormHeading/FormHeading";
import FormMain from "./FormMain/FormMain";

const Container = styled.div`
    text-align: center;
    width: 95%;
    max-width: 800px;
    margin: auto;
`;

const FormContainer = styled.div`
    margin: 30px 0;
`;

function Form() {
    return (
        <Container>
            <FormContainer />
            <FormMain />
        </Container>
    )
}

export default Form;
