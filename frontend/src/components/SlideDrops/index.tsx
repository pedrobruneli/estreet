
import SlidesItems from './slide-items';
import arames from 'assets/arame para site.png';
import './styles.css'

function SlideDrops() {
    return (
        <div>
        <div className="container-drops">
            <h2 id='drop-text'>LANÇAMENTO</h2>
            <div className='slideitem-container'>
            <SlidesItems />
            </div>
        </div>
        <div className='container-arames3'>
                <div className='arames3'>
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

export default SlideDrops;
