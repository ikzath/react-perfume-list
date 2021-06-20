import styled from 'styled-components';
import {BiCheck, BiDetail, BiDish} from 'react-icons/bi';
import {Container} from '../../GlobalStyles';

export const WorksContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const WorksContainer = styled(Container)`
/* display: flex;
flex-direction: column;
justify-content: space-between; */
display: grid;
grid-template-columns: repeat(3, 1fr);
/* grid-auto-rows: repeat(3, 1fr); */
grid-auto-rows: 1fr;
align-items: left;
padding: 5rem 8rem;
color: #333333;
${Container};
`;

export const WorksTitle = styled.h2`
font-size: arial(2rem, 4.5vw, 5rem);
font-weight: bold;
`;

export const WorksCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5rem;
@media only screen and (max-width:900px){
    flex-direction: column;
}
`;

export const WorksCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 30rem;
height: 30rem;
background-color: #fff;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
border-radius: 20px;
transition: all .5s ease;
&:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1300px){
        margin-right: 10rem;
    }
    @media only screen and (min-width: 1500px){
        margin-right: 20rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 10rem;
        /* margin-right: 10rem; */
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
}
@media only screen and (max-width:900px){
        width: 20rem;
        margin-right: 5rem;

}
@media only screen and (max-width:500px){
        width: 20rem;
        margin-right: 5rem;

}
@media only screen and (min-width:1890px){
        width: 20rem;
        margin-right: 5rem;
}
&:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #E38B06;
    color: #fff;
    
}
`;

export const WorksIconContainer = styled.div`
width: 12rem;
height: 12rem;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
`;
export const WorksIcon = styled.img`
width: 100px;
height: 100px
`;

export const WorksIcon2 = styled(BiDetail)`
color: #333;
font-size: 6rem;
`;
export const WorksIcon3 = styled(BiDish)`
color: #333;
font-size: 6rem;
`;

export const WorksCardTitle = styled.h3`
font-size: 2rem;
font-weight: bold;
padding-top: 1rem;
`;

export const WorksCardText = styled.p`
font-size: 1.5rem;
padding: 1rem 2rem;
`;

export const Select = styled.select`
  width: 15%;
  height: 40px;
  background: yellow;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  margin-top: 20px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const ButtonWrapper = styled.section`
background-color: whitesmoke;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Button = styled.button`
border-radius: 20px;
background-color: ${({primary}) => primary? '#E38B06': 'lightgreen'};
color: ${({primary}) => primary ? 'whitesmoke': '#fff'};
padding: 18px 30px;
font-size: 20px;
outline: none;
cursor: pointer;
border: none;
transition: transform .2s ease;
&:hover{
    background-color: ${({primary}) => primary? 'yellow': '#E38B06'};  
transform: translateY(-.5rem) scale(1.02);
 color: #000;
}
`;