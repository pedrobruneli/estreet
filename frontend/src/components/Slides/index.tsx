import arames from 'assets/arame para site.png';
import './styles.css'
import BannerSlides from './banner-slide';

function Slides() {
    return (
        <div className='banner-container-all'>
        <div className='container-arames1'>
            <div className='arames1'>
                <img src={arames}></img>
                <img src={arames}></img>
                <img src={arames}></img>
                <img src={arames}></img>
                <img src={arames}></img>
                <img src={arames}></img>            
            </div>
        </div>
        <BannerSlides />
        <div className='container-arames2'>
            <div className='arames2'>
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

export default Slides;