---
title: Throttle
label: [Common,Frontend]
hashTag: [github예제,Debounce,Lodash]
slug: /T/Throttle
---
Throttle 는 입력 주기를 방해하지 않고, 일정 시간 동안의 입력을 모와서, 한번씩 출력을 제한한다.

예제 코드

```js

var throttle = null;

function keyUpFn(el) {

if(!throttle) {

setTimeout(() => {

console.log('throttle', throttle, new Date().getTime());

throttle = null;

}, 500);

}

throttle = el.target.value;

}

document.getElementById("search").addEventListener('keyup', keyUpFn);

```

위 예제에서 <span style='color:#FFCC00; font-weight:bold;'>

500ms 동안 이벤트 실행을 막고</span>, 한번만 실행 때문에, 잦은 이벤트 발생을 막아 성능상의 유리함을 가져 올 수 있다.
