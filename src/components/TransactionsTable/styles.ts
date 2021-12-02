import styled from "styled-components";
export const Container = styled.div`

margin-top: 1.5rem;

table{
    width:100%;
    border-spacing: 0 0.8rem;
    text-align: center;

    th{
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 1rem;
        &:first-child {
            text-align: center;

        }
    }

    td{
        padding: 1rem 1rem;
        background-color: var(--shape);
        border:0;
        color: var(--text-body);
        border-radius: 0.25rem;
        text-align: right;
        &:first-child {
            color: var(--text-title);
            text-align: left;

        }
        &.deposit{
            color: var(--red);
        }
        &.withdraw{
            color: var(--green);

        }
    }
}

`;

