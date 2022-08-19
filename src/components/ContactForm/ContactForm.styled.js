
import styled from 'styled-components';
import {Form,Field,ErrorMessage } from 'formik';


export const Error = styled(ErrorMessage)`  
    /* margin-bottom: ${p => p.theme.space[1]}px; */
    color: ${p => p.theme.colors.error};
    font-size: ${p => p.theme.fontSizes.s};
`;

export const Forms = styled(Form)`  
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`  
    margin-bottom: ${p => p.theme.space[4]}px;
    display: flex;
    flex-direction: column;
    /* width: ${p => p.theme.space[8]}px;
    height: ${p => p.theme.space[8]}px; */
`;
export const Input = styled(Field)`  
    width: ${p => p.theme.space[8]}px;
    padding: ${p => p.theme.space[3]}px;
`;
export const Button = styled.button`  
    display: flex;
    justify-content: center;
    width: ${p => p.theme.space[7]}px;
    padding: ${p => p.theme.space[3]}px;
    border: none;
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.accent};
    border-radius: 8px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    cursor: pointer;
    
`;