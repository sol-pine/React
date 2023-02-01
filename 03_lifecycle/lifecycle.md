# State and Lifecycle

### 생명주기 메서드를 클래스에 추가하기
- 클래스형 컴포넌트에는 state lifecycle method가 존재
  - <a href="https://github.com/sol-pine/React/blob/main/03_lifecycle/ClassComponent.jsx">예제 / ClassComponent.jsx</a>
- 하지만 함수형 컴포넌트에서는 hook으로 상태 관리
  - <a href="https://github.com/sol-pine/React/blob/main/03_lifecycle/FunctionalComponent.jsx">예제 / FunctionalComponent.jsx</a>

### <a href= "https://ko.reactjs.org/docs/state-and-lifecycle.html#using-state-correctly">State를 올바르게 사용하기</a>
- 클래스형 컴포넌트에서 state 직접 수정 금지
  - 변화에 따른 리렌더링이 안되기 때문
  - 대신 `setState()`로 수정

### <a href="https://ko.reactjs.org/docs/react-component.html#the-component-lifecycle">컴포넌트 생명주기</a>
- 마운트
  - `constructor()` (`useState()`와 유사) : State 초기화 및 Method 바인딩
  - `render()`
  - `componentDidMount()`(`useEffect()`와 유사) : Dom 노드 초기화 및 데이터 fetch
- 업데이트
  - `render()`
  - `componentDidUpdate()`
- 언마운트
  - componentWillUnmount() : 클린업(타이머 제거, 요청 취소, 구독 해제)
