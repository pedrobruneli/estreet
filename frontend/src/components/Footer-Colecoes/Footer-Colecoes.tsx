import saias from 'assets/INSTA SAIAS_edited.jpg';
import croppeds from 'assets/INSTA CROPPEDS_edited_edited.jpg';
import moletons from 'assets/INSTA MOLETONS_edited.jpg';
import acessorios from 'assets/INSTA ACESSORIOS_edited.png';
import duality from 'assets/BANNER DUALIRY.png';
import sanrio from 'assets/INSTA SANRIO_edited.jpg';
import arames from 'assets/arame para site.png';
import './styles.css';

function Footer_Colecoes(){
    return(
        <div>
        <div className='footer-colecoes'>
        <div className="saias-container">
            <img src={saias} />
            <p className="texto-imagens">SAIAS</p>
        </div>
        <div className="croppeds-container">
            <img src={croppeds} />
            <p className="texto-imagens">CROPPEDS</p>
        </div>
        <div className="moletons-container">
            <img src={moletons} />
            <p className="texto-imagens">MOLETONS</p>
        </div>
        <div className="acessorios-container">
            <img src={acessorios} />
            <p className="texto-imagens">ACESSÓRIOS</p>
        </div>
        <div className="duality-container">
            <img src={duality} />
            <p className="texto-imagens">DUALITY</p>
        </div>
        <div className="sanrio-container">
            <img src={sanrio} />
            <p className="texto-imagens">SANRIO</p>
        </div>
        </div>
        <div className='container-arames-colecoes'>
                <div className='arames-colecoes'>
                 <img src={arames}></img>
                 <img src={arames}></img>
                 <img src={arames}></img>
                 <img src={arames}></img> 
                 <img src={arames}></img> 
                 <img src={arames}></img>             
                </div>
            </div>
        </div>
    );
}

export default Footer_Colecoes;