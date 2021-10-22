import styled from "styled-components";

const GetStartedButton = styled.button`
    color: white;
    background-color: #0157ff;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    border: none;
    transition: background-color 0.2s;
    &:hover {
        background-color: #0045ce;
        cursor: pointer;
    }
`;

export default GetStartedButton;
