import './Header.css';

function Header() {
    const now = new Date();

    let avaliableDevice = true;
    let sevenMinutesLeft = false;

    if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)){
        avaliableDevice = false;
    }

    localStorage.setItem('avaliableDevice', avaliableDevice);

    if (now.getHours() === 9 && now.getMinutes() >= 53 && now.getMinutes() < 58){
        sevenMinutesLeft = true;
    }

    let avaliableDeviceStyle = {
        backgroundColor: '#038003'
    }

    const unavailableDeviceStyle = {
        backgroundColor: '#800309'
    }

    return(
        <header className='header'>
            {avaliableDevice ? (
                <section style={avaliableDeviceStyle} className='deviceHeader'>
                    <p>✔️<br />한모를 사용할 수 있는 환경이에요.</p>
                </section>
            ) : (
                <section style={unavailableDeviceStyle} className='deviceHeader'>
                    <p>❌<br />한모를 사용할 수 없는 환경이에요.</p>
                </section>

            )}
            {sevenMinutesLeft && (
                <section className='headerNotice'>
                    <ul className='headerNoticeList'>
                        <li>곧 한모 접속이 제한될 예정이에요.</li>
                        <li>이용 제한 시간<span></span>09:58 ~ 10:10</li>
                        <li><a href='https://hufs.ac.kr/'>여기</a>를 클릭하면 수강신청 사이트로 빠르게 이동할 수 있어요.</li>
                    </ul>
                </section>
            )}
			
        </header>
    );
}

export default Header;