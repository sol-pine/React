# <a href="https://ko.reactjs.org/docs/hooks-overview.html">Hook</a>
- Class의 단점 보완
- 컴포넌트 간의 재사용성을 높이기 위해(lifecycle과 관련된 함수를 재사용할 수 있도록)
- 상태 관련 로직을 분리하여 테스트도 용이

### State Hook (useState)
- `[현재 state, state 업데이트 함수] = useState(초기값)`
```javascript
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
- 하나의 컴포넌트 내 여러 State Hook 사용 가능
- Class의 `this.setState`와 달리 state를 업데이트하는 것은 병합하는 것이 아닌 대체하는 것
```javascript
function ExampleWithManyStates() {
  // age, fruit, todos는 개별적으로 업데이트
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
}
```
- lazy initialize (딜레이가 생길 수 있는 동작인 경우, useState의 초기값을 함수로 줄 수도 있다.)
```javascript
const [state, setState] = React.useState(() => {
    return window.localStorage.getItem(itemName) || "";
});
```

### Effect Hook (useEffect)
- lifecycle과 관련
- effect를 해제하기 위해선 해제 함수 반환(cleanup function)
```javascript
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // cleanup
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
```

### Hook 사용 규칙
- 최상위 레벨에서 호출
- React 함수 컴포넌트 내에서 호출(커스텀훅 내에서도 사용 가능)
