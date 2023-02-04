# <a href="https://ko.reactjs.org/docs/higher-order-components.html">고차 컴포넌트(HOC)</a>

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
- 컴포넌트를 인자로 받아 기능을 더한 새 컴포넌트를 반환
- 공통된 기능들을 구현해 재사용할 수 있도록 함
- 원본 컴포넌트 변경 금지
- ref는 전달되지 않음(React.forwardRef로 해결)
- 예제 / Input.jsx, Button.jsx, withLoading.jsx(HOC)
