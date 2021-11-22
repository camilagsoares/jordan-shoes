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
import TypeWriter from './Write'
import { ContainerWrite } from '../styles/styled'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
    AOS.init();

    return (
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
            </ContainerPhotoPrincipal>
            <ContainerWrite>
                <TypeWriter value="O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan." />
            </ContainerWrite>

            <ContainerHighlights>
                <h1>Destaques</h1>
            </ContainerHighlights>

            <ContainerShipping data-aos="example-anim2">
                <p>Frete grátis e chinelo de brinde é aqui,aproveite por tempo limitado.</p>
            </ContainerShipping>

            <GridProducts className="position">

<CardProducts data-aos="fade-right">
<img src="https://i.postimg.cc/zD4VxJ7b/1.png"/>
</CardProducts>
 <CardProducts data-aos="fade-right">
     <img src="https://i.postimg.cc/CM7c8QsQ/2.png" />
 </CardProducts>
 <CardProducts data-aos="fade-right">
     <img src="https://i.postimg.cc/x8BJHQxm/3.png" />
 </CardProducts>
 <CardProducts data-aos="fade-right">
     <img src="https://i.postimg.cc/9Q5wQWq5/4.png" />
 </CardProducts>

 <CardProducts data-aos="fade-right">
     <img src="https://i.postimg.cc/ZqJ96Vcw/5.png" />
 </CardProducts>

 <CardProducts data-aos="fade-right">
     <img src="https://i.postimg.cc/6Qz8cnbt/6.png" />
 </CardProducts>

 <CardProducts data-aos="fade-right">
     <img src="https://i.postimg.cc/Y0LjtVrC/7.png" />
 </CardProducts>

 <CardProducts data-aos="fade-right">
     <img src="https://i.postimg.cc/Hs542vwm/8.png" />
 </CardProducts>

</GridProducts>

             <Footer>
                <p className="phraseFooter">Todos os direitos reservados.</p>
            </Footer>
        </div>
    )
}

export default Home
