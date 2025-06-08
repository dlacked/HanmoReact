import './Notice.css';
import { noticeList } from './Notice.js'

function Notice() {
    const unavailableDesign = {
        color: '#8d704f'
    }
    return(
        <div className='notice blueBox'>
            <p>
                NOTICE
            </p>
            <ul className='noticeList'>
                <li>{noticeList[0]}</li>
            </ul>
        </div>
    )
}

export default Notice;