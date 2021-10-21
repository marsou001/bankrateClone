import styled from "styled-components";

const Container = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 1px 5px 8px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
    font-weight: 500;
    text-align: left;
    width: 40%;
    label, input, button {
        width: 100%;
    }
    input, button {
        margin: 10px 0;
        padding: 10px 15px;
        border-radius: 3px;
    }
    input {
        border-width: 1px;
        outline-color: #0045CE;
        &focus {
            background-color: #333;
        }
    }    
    button {
        color: white;
        background-color: #0045CE;        
        border: none;
    }
`;

function FormMain() {
    return (
        <Container>
            <h3>Enter your ZIP code</h3>
            <Form>
                <label htmlFor='ZIP code'>ZIP code</label>
                <input type='text' id='ZIP code' name='ZIP-code' />
                <button type='submit'>Get Started</button>
            </Form>
        </Container>
    )
}

export default FormMain
