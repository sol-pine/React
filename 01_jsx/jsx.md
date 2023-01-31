# JSX

### JSX란?

```javascript
const element = <h1>Hello, world!</h1>;
```

- JavaScript를 확장한 문법
- JavaScript의 모든 기능이 포함
- 중괄호 안에 모든 JavaScript 표현식 삽입 가능(함수 호출 결과도!), 스프레드 사용 가능


### JSX에 표현식 포함하기

```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>; // Hello, Josh Perez
```

```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}! 
  </h1>
  // 함수 표현식도 삽입 가능
  // Hello, Harper Perez! 
);
```

### JSX도 표현식입니다
- JSX 자체도 표현식 (변수, 인자, 함수 반환 가능)

```javascript
// JSX가 컴파일이 끝나면 JS 객체로 인식됨
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

```

### JSX 속성 정의
- Attribute에 따옴표를 이용해 문자열 리터럴을 정의하거나
```javascript
const element = <a href="https://www.reactjs.org"> link </a>;
```
- Attribute에 중괄호를 이용해 JS 표현식 삽입 가능
```javascript
const element = <img src={user.avatarUrl}></img>;
```
- React DOM은 HTML Attribute 대신 camelCase Property 명명 규칙 사용

### JSX로 자식 정의
```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX는 주입 공격을 방지합니다
- 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입 안됨 

```javascript
const title = response.potentiallyMaliciousInput;
// 이것은 안전합니다.
const element = <h1>{title}</h1>;
```
  
### JSX는 객체를 표현합니다
- Babel
  - JavaScript 컴파일러(특정 언어를 다른 프로그래밍 언어로 해석)
  - Babel은 JSX를 `React.createElement()`로 컴파일
```javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
// 위의 JSX 코드가 Babel을 통해 아래와 같이 컴파일
// JSX의 장점! React.createElement()를 간단히 표기
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

### ✍️ 정리
- 리액트(JSX)의 장점
  - React.createElement()를 간단히 표기
  - 중괄호 안에 모든 JS 표현식 포함 가능, 스프레드 사용 가능
  - JSX 자체도 표현식 (변수, 인자, 함수 반환 가능)
