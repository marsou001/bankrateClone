import styled from "styled-components";
import Form from './Form/Form';
import ZIPInput from './ZIPInput/ZIPInput';
import GetStartedButton from './GetStartedButton/GetStartedButton';

const Container = styled.div`
    padding: 30px 15px;
    border-radius: 5px;
    box-shadow: 1px 7px 7px 5px rgba(0, 0, 0, 0.1);
`;

function FormMain() {
    return (
        <Container>
            <h3>Enter your ZIP code</h3>
            <Form>
                <label htmlFor='ZIP code'>ZIP code</label>
                <ZIPInput type='text' id='ZIP code' name='ZIP-code' />
                <GetStartedButton type='submit'>Get Started</GetStartedButton>
            </Form>
        </Container>
    )
}

export default FormMain
