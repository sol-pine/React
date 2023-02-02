# <a href="https://ko.reactjs.org/docs/conditional-rendering.html">조건부 렌더링</a>
### 조건에 따라 현재 상태에 맞는 UI 업데이트
```javascript
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  // 조건에 따라 각각 다른 컴포넌트 렌더링
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```

### 논리 && 연산자로 IF를 인라인으로 표현하기
- `false && expression`인 경우, falsy 표현식이 반환되어 그려지므로 주의

### 조건부 연산자로 If-Else구문 인라인으로 표현하기
- `condition? true : false`
- 조건에 따라 렌더링을 막고 싶을 땐 `null` 반환
- 예제 / Condition.jsx
