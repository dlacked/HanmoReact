import './Introduction.css';

function Introduction () {

    const now = new Date();

    let ableTime = true;
    if ((now.getHours() === 9 && now.getMinutes() >= 58) || (now.getHours() === 10 && now.getMinutes() <= 10)){
        ableTime = false;
    }
    
    return (  
        <div className='mainNotice blueBox'>
            {ableTime ? <p class='topNotice'>접속 제한 시간 <span>09:58 ~ 10:10</span></p> : (
                <p class='topNotice'>한모 접속 제한 시간이에요.</p>
            )}
            <hr />
            <p>
                ※ 한모는 학교에서 제작한 사이트가 아닌 한국외대 재학생이 만든 사이트예요.
            </p>
            <p>
                ※ 한모/개발자 관련 문의 사항이 있을 경우 우측 하단 채널톡으로 연락 부탁드려요.
            </p>
        </div>
    );
}

export default Introduction;