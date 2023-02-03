# <a href="https://ko.reactjs.org/docs/hooks-overview.html">Hook</a>
- Class의 단점 보완
- 컴포넌트 간의 재사용성을 높이기 위해(lifecycle과 관련된 함수를 재사용할 수 있도록)
- 상태 관련 로직을 분리하여 테스트도 용이

### useState
- `[state, setState] = useState(initialValue)`
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

### useEffect
- lifecycle과 관련(componentDidMount, componentDidUpdate, componentWillUnmount)
- 화면이 렌더링된 이후 수행
- effect를 해제하기 위해선 해제 함수 반환(clean-up function)
- 데이터 가져오기, 구독 설정하기, 수동으로 DOM 수정하기
- Class(각각 다른 메서드로 관리)에 비해 관련이 있는 로직을 하나로 합치고 버그 방지
- dependancy array : 필요 시에만 업데이트
```javascript
  useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  // clean-up
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // dependancy array : props.friend.id가 바뀔 때만 재구독
```

### useRef
- `const refContainer = useRef(initialValue);`
- useRef는 ref 값이 변경된 경우 알려주지 않음을 주의!
  - 콜백 Ref 사용
```javascript
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
```

### useReducer
- useState 예제 / <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/08_hook/State.jsx">State.jsx</a>
- useReducer로 변경한 예제 / <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/08_hook/Reducer.jsx">Reducer.jsx</a>

### Hook 사용 규칙
- 최상위 레벨에서 호출
- React 함수 컴포넌트 내에서 호출(커스텀훅 내에서도 사용 가능)

### custom hook
- 코드가 반복되면? 함수화!
- hook이 반복되면? custom hook!
