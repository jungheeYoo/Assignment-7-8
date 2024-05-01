# 📝 개념 정리

## 1. Element.setAttribute()
```javascript
Element.setAttribute("className", "클래스명");
Element.setAttribute("id", "아이디명");
Element.setAttribute("name", "이름");
Element.setAttribute("href", "#");
```
```javascript
guessNumberInput.setAttribute('max', parseInt(rangeNumberInput.value, 10));
```
- HTML 속성을 제어해주는 메소드
- 요소.setAttribute(속성, 값) - 요소의 속성과 값을 확인한다.
- 속성이 이미 있는 경우 원래 있던 것에 덮어 씌워짐

## 2. parseInt()
```javascript
const rangeNum = parseInt(rangeNumberInput.value, 10);
const guessNum = parseInt(guessNumberInput.value, 10);
```
- `<input>`과 `<form>`태그를 통해 제출된 값은 문자열 형태로 저장된다.
- 그래서 rangeNumberInput.value, guessNumberInput.value 의 타입은 현재 "문자열"이며,
- `parseInt()`함수는 문자열을 정수 형태로 바꿔주는 함수이다. 맨 마지막의 10은 10진수로 변경하라는 의미이므로 적어주는 것이 좋다.
