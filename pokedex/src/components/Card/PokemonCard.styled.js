import styled from "styled-components";

export const PokemonCardContainer = styled.button`
display: flex;
flex-direction: column ;

width: 440px;
height: 210px;

margin: 1rem;
padding: 1rem;

font-family: Inter;
font-size: 1.5rem;
font-weight: 700;
line-height: 39px;
letter-spacing: 0em;
text-align: left;

.first {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 100%;
    height: 200px;
}
.second {
    display:flex;
    flex-direction: column;
}
.third {
    display:flex;
    flex-direction: row ;
    justify-content: space-evenly;
    width: 100px;

    .type1 {
        margin-right: 1rem;
        margin-left: 2.5rem;
    }
}
.fourth {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .details {
        font-size: 1rem;
    }

    .details:hover {
        cursor: pointer;
    }
}
.typeColor{
    width: 100%;;
}
.type{
    margin-right: 1rem;
}
.img{
    width: 193px;
    height: 193px;
    left: 286px;
    top: 1086px;
}
`

// font-family: Inter;
// font-size: 32px;
// font-weight: 700;
// line-height: 39px;
// letter-spacing: 0em;
// text-align: left;