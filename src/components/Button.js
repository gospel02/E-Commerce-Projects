import styled from 'styled-components';

export const ButtonContainer = styled.button`
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--darkGray);
color: var(--darkGray);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;

&:hover{
    background:var(--darkGray);
    color: var(--dimGray);
}
&:focus{
    outline: none;
}
`;