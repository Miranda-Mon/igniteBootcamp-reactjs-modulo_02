import styled from "styled-components";

export const Container = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1rem;
margin-top: -8rem;

div{
    background: var(--shape);
    border-radius: 0.5rem;
    padding: 1rem;
    font-weight: 700;
    color: var(--text-title);
        
}
header{
    display:flex;
    justify-content:space-between;
}
img{
    max-height: 3.3rem;
}

strong{
    display:block;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 2rem;
    
}
.highlight-background{
    background:var(--green);
    color: #fff;
}
`;