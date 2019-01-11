import styled from 'styled-components'

export const Text = styled.h6`
  color: ${({theme}) => theme.colors.primaryText};
`;
export const Button = styled.button`
    background: ${({theme}) => theme.colors.mainBackground};
    color: ${({theme}) => theme.colors.primaryText};

    font-size: 0.5em;
    margin: 0.5em;
    padding: 0.25em 0.5em;
    border: 2px solid ${({theme}) => theme.colors.primaryText};
    border-radius: 3px;
    :hover {
    color: ${({theme}) => theme.colors.alert};
    background: ${({theme}) => theme.colors.backgroundAlert};
    font-size: 0.75em;
  }
`;

export const Text2 = styled.h2`
  color: ${({theme}) => theme.colors.primaryText};
  text-decoration: underline; 
`;