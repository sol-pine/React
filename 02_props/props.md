# Components와 Props

### 함수 컴포넌트
- 하나의 `props` (: 컴포넌트에 전달되는 단일 객체) 인자를 받은 후 React 엘리먼트를 반환
- 컴포넌트가 JavaScript 함수
- 컴포넌트의 이름은 항상 대문자로 시작

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
      <Welcome name="Sara" />
  );
}
```

### 컴포넌트 합성
- 컴포넌트는 자신의 출력에 다른 컴포넌트를 참조

```javascript 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
  // 동일한 컴포넌트 여러번 재사용 가능
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

### 컴포넌트 추출
- 컴포넌트를 여러 개의 작은(재사용이 가능한) 컴포넌트로 나누기 
- <a href="https://github.com/sol-pine/React/blob/main/02_props/Extraction.jsx">예제 / Extraction.jsx<a/>

### props는 읽기 전용
- 컴포넌트의 자체 props 수정 금지
- props를 다루는 React 컴포넌트는 순수 함수처럼 동작!
  -  React 컴포넌트는 state를 통해 자신의 출력값을 변경
  
```javascript 
// 순수 함수 (동일 입력, 동일 결과)
function sum(a, b) {
  return a + b;
}  
```
