import styled from 'styled-components';

export const Li = styled.li`  
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Ul = styled.ul`  
    width: ${p => p.theme.space[8]*2}px;
`;
export const Button = styled.button`  
    border: none;
    background: ${p => p.theme.colors.accent};
    height: ${p => p.theme.space[5]}px;
    color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.space[3]}px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    cursor: pointer;
`;