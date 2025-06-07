import './Title.css'
import HanmoWhite from '../img/hanmo_white.svg';

function Title({children}) {
    const now = new Date();

    const goHome = () => {
        window.location.href = 'https://vsugangpractice.com/';
    }

    let hakgi = 1
    if (now.getMonth() >= 3 && now.getMonth() <= 8){
        hakgi = 2;
    }

    return (
        <section className='titleContainer' onClick={goHome}>
            <h1>{children === '한국외국어대학교 모의수강신청' ? `${now.getFullYear()}-${hakgi}학기 ${children}` : children}</h1>
            <div className='hanmo'>
                <hr />
                <span><img className='hanmo' src={HanmoWhite} /></span>
                <hr />
            </div>
        </section>
    )
}

export default Title;