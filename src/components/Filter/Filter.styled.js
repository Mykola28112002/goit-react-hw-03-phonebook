import styled from 'styled-components';

export const Input = styled.input`  
    width: ${p => p.theme.space[7]}px;
    padding: ${p => p.theme.space[3]}px;
    margin-left: ${p => p.theme.space[3]}px;
    display: block;
`;

export const Label = styled.label`  
    display: flex;
    align-items: flex-start;
    margin-top: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[5]}px;
`;