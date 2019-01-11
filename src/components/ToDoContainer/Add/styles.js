import styled from 'styled-components';

export const Button = styled.button`
    background: ${({theme}) => theme.colors.mainBackground};
    color: ${({theme}) => theme.colors.primaryText};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({theme}) => theme.colors.primaryText};
    border-radius: 3px;
    :hover {
    color: ${({theme}) => theme.colors.alert};
    background: ${({theme}) => theme.colors.backgroundAlert};
  }
`;

export const Input = styled.input`
    background: ${({theme}) => theme.colors.mainBackground};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${({theme}) => theme.colors.primaryText};
    border-radius: 3px;
    :hover {
    background: ${({theme}) => theme.colors.alert};
  }
`;