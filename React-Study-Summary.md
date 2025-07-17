# React 학습 정리 - 오늘의 핵심 개념들

## 📌 꼭 기억해야 할 핵심 개념들

### 1. CSS 가운데 정렬

```css
/* 가장 간단한 방법 */
* {
  margin: 0;
  padding: 0;
}

/* 블록 요소 가운데 정렬 */
.element {
  margin: 0 auto;
  width: 80%; /* 너비가 있어야 가운데 정렬 효과 */
}
```

**💡 중요**: 블록 요소는 기본적으로 전체 너비를 차지함. `margin: 0 auto`는 너비가 정해진 요소를 가운데 정렬할 때 사용.

### 2. React 컴포넌트 명명 규칙

```jsx
// ❌ 잘못된 예
const jsx = () => { ... }
export default jsx;

// ✅ 올바른 예
const Jsx = () => { ... }
export default Jsx;
```

**💡 핵심**: React 컴포넌트 이름은 **반드시 대문자로 시작**해야 함!

### 3. Tailwind CSS 적용

```css
/* App.css */
@import 'tailwindcss';
```

**💡 주의**: Tailwind는 모든 기본 스타일을 리셋함. `h1`, `h2` 등이 일반 텍스트와 같은 크기가 됨.

### 4. React Router 설정 (친구 방식)

```jsx
// main.jsx
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// App.jsx
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/page1' element={<Page1 />} />
    </Routes>
  );
}
```

**💡 핵심**:

- `main.jsx`에서 한 번만 `BrowserRouter`로 감싸기
- `App.jsx`에서는 `Routes`만 사용
- 이 방식이 더 깔끔함!

## 🚨 내가 부족했던 부분들

### 1. 경로 문제 해결

```jsx
// ❌ 복잡한 경로 설정 (불필요)
import App01 from '@/reactStudy/1.jsx/components/jsx';

// ✅ 간단한 상대 경로
import App01 from './1.jsx/components/jsx';
```

**💡 교훈**: 간단한 상대 경로로도 충분함. 복잡한 설정은 오히려 오류 발생 가능성 증가.

### 2. Props 전달 실수

```jsx
// ❌ Props 전달 안함
<Nav></Nav>

// ✅ Props 전달
<Nav topics={topics}></Nav>
```

**💡 교훈**: 컴포넌트가 props를 받도록 설계되었다면 반드시 전달해야 함.

### 3. State 관리 로직 오류

```jsx
// ❌ 불완전한 상태 변경
onChangeMode={(id) => {
  setId(id); // id만 설정
}}

// ✅ 완전한 상태 변경
onChangeMode={(id) => {
  setMode('READ'); // mode도 변경
  setId(Number(id)); // 타입도 맞춤
}}
```

**💡 교훈**: 상태 변경 시 관련된 모든 state를 함께 고려해야 함.

## 💻 프로젝트 구조 관리 팁

### 다중 앱 관리 구조

```
src/
├── App.jsx (메인 라우터)
├── 1.jsx/
│   ├── App.jsx (JSX 학습 앱)
│   └── components/
├── 2.propTest/
│   ├── App.jsx (Props 학습 앱)
│   └── components/
└── main.jsx
```

**💡 장점**:

- 각 학습 주제별로 독립적인 앱 구조
- 새 주제 추가 시 폴더만 생성
- 모듈화된 개발 가능

## 🔧 문제 해결 패턴

### 1. React Router 오류

```
Error: useRoutes() may be used only in the context of a <Router> component
```

**해결**: `BrowserRouter`로 감싸졌는지 확인

### 2. Import 오류

```
Failed to resolve import "@/path/to/component"
```

**해결**: 상대 경로 사용 또는 vite.config.js 설정 확인

### 3. Props 관련 오류

- 컴포넌트가 렌더링되지 않음
  **해결**: props 전달 여부 확인

## 📚 추가로 알면 좋은 것들

### 1. React Router Link vs a 태그

```jsx
// React Router 환경에서
<Link to="/path">링크</Link>  // ✅ SPA 방식
<a href="/path">링크</a>      // ❌ 페이지 새로고침
```

### 2. State 타입 주의

```jsx
// event.target.id는 문자열
const id = event.target.id; // "1" (string)
const numId = Number(id); // 1 (number)
const arrayIndex = topics[id - 1]; // 배열 접근 시 숫자 필요
```

### 3. CSS Reset의 영향

- Tailwind나 CSS Reset 사용 시 기본 HTML 스타일이 제거됨
- `h1`, `h2` 등이 일반 텍스트와 같은 크기가 됨
- 필요 시 명시적으로 스타일 지정 필요

## 🎯 다음 학습 목표

1. **State 심화**: useState와 useEffect 조합
2. **Event Handling**: 다양한 이벤트 처리 방법
3. **Component 재사용**: 더 효율적인 컴포넌트 설계
4. **CSS Module**: Tailwind 외의 스타일링 방법

---

**💡 오늘의 핵심 메시지**:

- 간단한 방법이 때로는 최고의 방법
- 기본기(컴포넌트 명명, props 전달)가 가장 중요
- 문제 발생 시 기본부터 차근차근 확인하기
