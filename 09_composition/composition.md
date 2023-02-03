# <a href="https://ko.reactjs.org/docs/composition-vs-inheritance.html">Composition</a>
- 컴포넌트에 컴포넌트 담기
- 상속 대신 합성을 사용하여 컴포넌트 간에 코드를 재사용하는 것이 좋음

### 컴포넌트에서 다른 컴포넌트를 담기
- Modal 이나 Sidebar와 같은 범용적인 컴포넌트는 children prop을 사용해 자식 엘리먼트를 그대로 전달
```javascript 
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```
- Composition 예제 / <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/09_composition/Dialog.jsx">Dialog.jsx</a>, <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/09_composition/WelcomDialog.jsx">WelcomeDialog.jsx</a>
