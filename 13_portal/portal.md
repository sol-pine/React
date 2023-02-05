# <a href="https://ko.reactjs.org/docs/portals.html">Portal</a>
- DOM 구조 밖으로 자식을 렌더링하는 방법
- 시각적으로 자식을 튀어나오도록 보이기 위해서
```html
<!-- public/index.html -->
<div id="root"></div>
<div id="portal"></div>
```
```javascript
import React from "react";
import { createPortal } from "react-dom";
import WelcomeDialog from "./WelcomeDialog";

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

const Example = () => {
  return (
    // portal에서 일어나는 이벤트도 root에 전달되어 이벤트 버블링이 발생
    <div onClick={() => console.log("bubble!")}>
      {/* 아이디가 root가 아닌 portal이라는 div에 속함 */}
      <Portal>
        <WelcomeDialog />
      </Portal>
      <div style={{ position: "absolute" }}>
        <button>Button</button>
      </div>
    </div>
  );
};

export default Example;
```
