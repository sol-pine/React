# <a href="https://ko.reactjs.org/docs/handling-events.html">이벤트 처리하기</a>
- React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용
- 문자열이 아닌 함수로 이벤트 전달
```javascript
//<button onclick="activateLasers()">
//  Activate Lasers
//</button>

<button onClick={activateLasers}>
  Activate Lasers
</button>
```
### preventDefault()
- `return false` 제공 안함
- 기본 동작을 방지하기 위해 `preventDefault`를 명시적으로 호출
```javascript
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
###  Bubble & Capture
<img width="616" alt="image" src="https://user-images.githubusercontent.com/105091138/216209467-58b52fad-55cd-4d25-9d68-69dbb5859b59.png">

- 이벤트 버블링 : 자식의 이벤트가 부모에게 전파
- 캡처링 : 이벤트가 발생한 자식을 찾음
