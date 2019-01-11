import styled from 'styled-components';
export const Input = styled.input`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({theme}) => theme.colors.primaryText};
    border-radius: 3px;
    background: ${({theme}) => theme.colors.mainBackground};
    :hover {
    background: ${({theme}) => theme.colors.alert};
  }
`;

export const Text = styled.h4`
    font-size: 1em;
    border: 2px;
    color: ${({theme}) => theme.colors.primaryText};
`;