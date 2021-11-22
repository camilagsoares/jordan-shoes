import styled from 'styled-components'

export const BlackBelt = styled.div`
display: flex;
background-color: #181818;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
p{
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 16px;
   


::selection{
    background-color: #EBE9EA;
    color: #181818;
}}`

export const WhiteBelt = styled.div`
background-color: #F6F6F6;
height: 60px;
margin-top: -21px;
text-align: center;

h1{
    font-family: 'Montserrat', sans-serif;
    color: #181818;
    font-size: 24px;
    margin: 20px 0;
    line-height:60px;

::selection{
    background-color: #EBE9EA;
    color: #181818;
}
}


`

export const ContainerPhotoPrincipal = styled.div`
img{
    width: 100%;
    filter: brightness(50%);
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
}

p{
    &.texto{
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  position: absolute;
/* width: 80px; */
top: 18%;
left: 10%;
bottom: 0;
right: 0;
color: white;
}


&.textoAbaixo{
    position: absolute;
  top: 380px;
  right: 20px;
  font-size: 18px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  margin-right: 56vw;
  width: 450px;
}

::selection{
    background-color: #EBE9EA;
    color: #181818;
}
}


@media screen and (max-width:600px) {

img{
    height: 60vw;
}}

@media only screen and (min-width : 1400px) and (max-width : 1549px){
 p{
    margin-top: 8%;
} 
}
`
















export const ContainerHeader = styled.div`
  margin-top: -30vh;
h1{
    color: #F6F6F6;
    font-size: 36px;

&.title{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: -20vh;
  
}
}

p{
    color: red;
    font-size: 18px;
}

`


export const CardProducts = styled.div`
display: flex;
align-items: center;
justify-content: center;

    width: 300px;
height: 300px;
background-color: #EBE9EA;
margin: 10px;
/* margin-right: 50px; */
img{
    width: 250px;
    height: 150px;
    max-width: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
  
:hover{
    -moz-transform: scale(1.1);
	-webkit-transform: scale(1.1);
	transform: scale(1.2);
    cursor: pointer;
}
}



`

export const GridProducts = styled.div`
margin-left: 8vw;
width: 110px;

    display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 2px;


&.position{
    /* margin-left: 18vh; */
    margin-top: 30px;
}


@media screen and (max-width:600px) {
    width: 80%;
    display: flex;
  flex-wrap: wrap;
}
`

export const Footer = styled.div`
height: 60px;
background-color: #181818;
text-align: center;


p{
    color: white;
    font-family: 'Montserrat',sans-serif;

::selection{
    background-color: #EBE9EA;
    color: #181818;
}

&.phraseFooter{
    line-height:60px;
}
}
`

export const ContainerHighlights = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
h1{
    color: #181818;
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    
::selection{
    background-color: #EBE9EA;
    color: #181818;
}
}

`

export const ContainerShipping = styled.div`
display: flex;
align-items: center;
justify-content: center;

p{
    color: #181818;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    margin-top: -4px;
    text-align: center;

::selection{
    background-color: #EBE9EA;
    color: #181818;
}
}`

export const ContainerWrite = styled.div`
    /* position: absolute; */
display: flex;
align-items: flex-start;
justify-content: flex-start;
  font-size: 18px;
  color: white;
  font-family: 'Montserrat', sans-serif;




  @media screen and (max-device-width: 480px) {
    display: flex;
align-items: flex-start;
justify-content: flex-start;
margin-top: -90px;
/* margin-right: -4vw; */
width: 280px;
margin: 4vw;
position: absolute;
}


@media screen and (max-width:600px) {
    display: flex;
align-items: flex-start;
justify-content: flex-start;
margin-top: -90px;
/* margin-right: -4vw; */
width: 290px;
position: absolute;

}


@media screen and (min-width: 900px){
    position: absolute;
    margin-left: 10vw;
    margin-top: -13vw;
    width: 440px;
}


`