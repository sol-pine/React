# Memoization
- 이전에 계산한 값을 메모리에 저장
- 동일한 계산의 반복 수행을 제거해 실행 속도 향상

### React.memo
```javascript
const MyComponent = React.memo(function MyComponent(props) {
  /* props를 사용하여 렌더링 */
});
```
- 컴포넌트를 메모이제이션
- 동일한 props로 렌더링할 때, React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑
- React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용
- <a href="https://ko.reactjs.org/docs/profiler.html">Profiler</a> : 리액트 성능 분석 도구, 성능 누수 파악
- 예제 / <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/11_memoization/Memo.jsx">Memo.jsx</a>, <a href = "https://github.com/sol-pine/study_ReactDocs/blob/main/11_memoization/Comments.jsx">Comments.jsx(useCallback)</a>, <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/11_memoization/CommentItem.jsx">CommentItem.jsx(React.memo, useMemo, Profiler)</a>

### useCallback
```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```
- 메모이제이션된 콜백 반환
- 한번 생성한 함수는 재생성하지 않음(단, 의존성 배열의 값이 변경되면 재생성)
- `useCallback(fn, deps)`은 `useMemo(() => fn, deps)`와 같음

### useMemo
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
- 메모이제이션된 값을 반환
