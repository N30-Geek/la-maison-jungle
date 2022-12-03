// Le module de mon banner

import '../styles/Banner.css'
import logo from '../issets/logo.png'

function Banner() {

    const lmj_title = "La Maison La Jungle";
    return (
        <div className="lmj-banner">
            <img src={logo} alt="La maison Jungle" className="lmj-logo" />
            <h1 className='lmj-title'>{lmj_title}</h1>
        </div>
    );
}

export default Banner