# <a href="https://ko.reactjs.org/docs/lists-and-keys.html">리스트와 Key</a>

### 기본 리스트 컴포넌트
- map() 함수를 이용해 배열을 element list로 만듦
```javascript
function NumberList(props) {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

### Key
- Key는 리렌더링과 관련이 있다.(Key를 통해 비교, Key가 같으면 자식 요소는 같다고 인식하고 재사용)
- Key는 Value를 특정하는 이름
- Key는 element에 안정적인 고유성을 부여하기 위해 배열 내부의 element에 지정
- Key를 index를 주면 항목이 재배열(순서가 변경)됐을 시 컴포넌트를 완벽히 재사용하지 못함, index는 유니크하지만 가변, id는 유니크하면서 불변
- Key는 자식에게 props로 전달되지 않음(attribute)
- 예제 / <a href="https://github.com/sol-pine/study_ReactDocs/blob/main/06_list/List.jsx">List.jsx</a>
