import './Button.css';

function Button({children}) {
    const hanmoStyle = {
        background: '#b9b9b9',
        color: '#000d18'
    };

    const now = new Date();
    
    const check = () => {
        if (children === '수강신청 연습하기') {
            if ((now.getHours() === 9 && now.getMinutes() >= 58) || (now.getHours() === 10 && now.getMinutes() <= 10)){
                alert('지금은 수강신청 연습을 할 수 없는 시간이에요.');
                return;
            } else if (localStorage.getItem('avaliableDevice') === 'false'){
                alert('모바일 환경에서는 수강신청 연습을 할 수 없어요.');
                return;
            } else{
                window.location.href = ''; // 여기에 수강신청 연습 페이지의 URL을 입력하세요.
            }
        } else if (children === '새로고침') {
            window.location.reload();
        } else if (children === '개발자 소개') {
            window.location.href = '' // 여기에 개발자 소개 페이지의 URL을 입력하세요.
        }
    }

    return (
        <div className='button' style={children === '수강신청 연습하기' ? hanmoStyle : null} onClick={check}>
            {children}
        </div>
    )
}

export default Button;