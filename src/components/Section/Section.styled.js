import styled from 'styled-components';

export const Wrapper = styled.section`
    margin-top: ${p => p.theme.space[5]}px;
    font-size: ${p => p.theme.space[5]}px;
    box-shadow: 1px 4px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 1px 4px 3px rgb(0 0 0 / 12%);
    padding: ${p => p.theme.space[5]}px;
    background: ${p => p.theme.colors.mainBackground};  
    width: ${p => p.theme.space[8] * 2}px;
    margin-left: auto;
    margin-right: auto;
`;
