import React from 'react'
import { BlackBelt } from '../styles/styled'
import { WhiteBelt } from '../styles/styled'
import { ContainerPhotoPrincipal } from '../styles/styled'
import { ContainerHeader } from '../styles/styled'
import { Footer } from '../styles/styled'
import { CardProducts } from '../styles/styled'
import { GridProducts } from '../styles/styled'
import { ContainerHighlights } from '../styles/styled'
import { ContainerShipping } from '../styles/styled'
import photoPrincipal from '../img/foto.jpeg'
import shoesOne from '../img/1.png'
import shoesTwo from '../img/2.png'
import shoesThree from '../img/3.png'
import shoesFour from '../img/4.png'
import shoesFive from '../img/5.png'
import shoesSix from '../img/6.png'
import shoesSeven from '../img/7.png'
import shoesEight from '../img/8.png'


const Home = () => {
    return(
        <div>
            <BlackBelt>
                <p>Ganhe R$10,00 de desconto no frete</p>
            </BlackBelt>
         
            <WhiteBelt>      
                <h1>JordanShoes</h1>
            </WhiteBelt>

            <ContainerPhotoPrincipal>
             <img src={photoPrincipal} />
             <b><p className="texto">A melhor loja de Jordan</p></b>
             <p className="textoAbaixo">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
            </ContainerPhotoPrincipal>

            <ContainerHighlights>
            <h1>Destaques</h1>
            </ContainerHighlights>

            <ContainerShipping>
            <p>Frete grátis e chinelo de brinde é aqui,aproveite por tempo limitado.</p>
            </ContainerShipping>

            <GridProducts className="position">

            <CardProducts>
            <img src={shoesOne}/>
            </CardProducts>

            <CardProducts>
            <img src={shoesTwo}/>
            </CardProducts>

            <CardProducts>
            <img src={shoesThree}/>
            </CardProducts>

            <CardProducts>
            <img src={shoesFour}/>
            </CardProducts>
            
            <CardProducts>
            <img src={shoesFive}/>
            </CardProducts>

            <CardProducts>
            <img src={shoesSix}/>
            </CardProducts>

            <CardProducts>
            <img src={shoesSeven}/>
            </CardProducts>

            <CardProducts>
            <img src={shoesEight}/>
            </CardProducts>
            
            </GridProducts>

            <Footer>
                <p className="phraseFooter">Todos os direitos reservados.</p>
            </Footer>
        </div>
    )
}

export default Home
