## 객체를 기술하는 객체

* 생성자가 매우 많은 매개변수를 갖는 경우에는 많은 인수를 받는 대신에 객체를 기술하는 하나의 객체를 받도록 정의하면 보다 사용하기 편리한 형태가 된다

```javascript
var myObject = maker(f, l, m, c, s);

// 대신 다음과 같이 작성 가능하다

var myObject = maker({
  first: f,
  last: l,
  state: s,
  city: c
});
```

> 이제 인수는 꼭 순서를 맞출 필요가 없으며 생성자가 기본값들을 똑똑하게 설정하고 있다면 인수를 생략할 수도 있다