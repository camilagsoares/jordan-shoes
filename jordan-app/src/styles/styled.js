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
    height: 480px;
    filter: brightness(50%);
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
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
width: 300px;
height: 300px;
background-color: #EBE9EA;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
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
	transform: scale(1.1);
    cursor: pointer;
}
}

`

export const GridProducts = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 2px;
width: 870px;

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

::selection{
    background-color: #EBE9EA;
    color: #181818;
}
}`