import Header from './components/Header.jsx';
import ChannelTalk from './components/ChannelTalk.jsx';
import Title from './components/Title.jsx';
import Notice from './components/Notice.jsx';
import Introduction from './components/Introduction.jsx';
import Button from './components/Button.jsx';
import Ad from './components/Ad.jsx';

import './App.css';

function App() {
  return (
    <div className='app'>
      <ChannelTalk />
      <Header />
      <main>
        <section className='f-dirt-down'>
          <Title>한국외국어대학교 모의수강신청</Title>
        </section>
        <section className='container'>
          <Notice />
          <Introduction />
        </section>
        <section className='buttonContainer'>
          <Button>수강신청 연습하기</Button>
          <Button>새로고침</Button>
          <Button>개발자 소개</Button>
        </section>
        <section className='f-dirt-up'>
        </section>
      </main>
    </div>
  );
}

export default App;