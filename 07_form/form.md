# <a href="https://ko.reactjs.org/docs/forms.html">Form</a>

### 제어 컴포넌트 
- 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트
- input의 value를 항상 React state로 관리
- 예제 / <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/07_form/ControlledComponent.jsx">ControlledComponent.jsx</a>

### <a href="https://ko.reactjs.org/docs/uncontrolled-components.html">비제어 컴포넌트</a>
- form element 자체 내부 상태 활용
- 이벤트 핸들러를 작성하는 대신 `ref` 사용  
  - `defaultValue`로 기본값 확인, `ref`로 value 확인
- 예제 / <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/07_form/UncontrolledComponent.jsx">UncontrolledComponent.jsx</a>

### 다중 입력 제어하기
- `event.target.name`, `event.target.type`으로 여러 input element 제어
- 예제 / <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/07_form/MultipleInputs.jsx">MultipleInputs.jsx</a>
