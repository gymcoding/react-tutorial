import { useState } from 'react';
import './App.css';
import CourseListCard from './components/CourseListCard';
function App() {

  const [courses1] = useState([
    {
      id: 1,
      title: '입문자를 위한, HTML&CSS 웹 개발 입문',
      description: '웹 개발에 필요한 기본 지식을 배웁니다.',
      thumbnail: '/img/htmlcss.png',
      link: 'https://inf.run/JxyyT'
    },
    {
      id: 2,
      title: '입문자를 위한, ES6+ 최신 자바스크립트 입문',
      description: '쉽고! 알찬! 내용을 준비했습니다.',
      thumbnail: '/img/js.png',
      link: 'https://inf.run/Kpnd'
    },
    {
      id: 3,
      title: '포트폴리오 사이트 만들고 배포까지!',
      description: '포트폴리오 사이트를 만들고 배포해 보세요.',
      thumbnail: '/img/portfolio.png',
      link: 'https://inf.run/YkAN'
    }
  ])

  const [courses2] = useState([
    {
      id: 4,
      title: '프론트엔드 날개달기',
      description: '프론트엔드 개발자가 되기 위한 선수지식',
      thumbnail: '/img/fly.png',
      link: 'https://inf.run/CJ4a'
    },
    {
      id: 5,
      title: 'Vue 3 완벽 마스터 : 기본편',
      description: 'Vue 3 웹 애플리케이션을 위한 만들기 강의',
      thumbnail: '/img/vue3-1.png',
      link: 'https://inf.run/yWHo'
    },
    {
      id: 6,
      title: 'Vue 3 완벽 마스터 : 실전편',
      description: 'Vue 3 실전 프로젝트를 개발하며 Composition API의 사용법을 숙지',
      thumbnail: '/img/vue3-2.png',
      link: 'https://inf.run/ZN1Y'
    }
  ])


  return (
    <main>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <CourseListCard title={'웹 개발 입문'} courses={courses1} />
        <CourseListCard title={'프론트엔드 입문'} courses={courses2} />
      </div>
    </main>
  );
}

export default App;
