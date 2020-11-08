---
title: Debounce
label: [Common,Frontend]
hashTag: [Throttle,Client App(React, Vue등 ...),코드를 지연처리 할때 쓰는 함수명]
slug: /D/Debounce
---
<p>일반적으로 튕기지 않는 이라는 의미를 가진다.<br />
Debounce 는 여러번 발생하는 이벤트에서, 가장 마지막 이벤트 만을 실행 되도록 만드는 개념이다.<br />
예제 코드</p>
<pre><code class="js language-js">var debounce = null
function keyUpFn(el) {
clearTimeout(debounce)
debounce = setTimeout(() =&gt; {
console.log('debounce', el.target.value, new Date().getTime())
}, 500)
}
document.getElementById('search').addEventListener('keyup', keyUpFn)</code></pre>
<p>위 예제에서 입력이 끝난 500ms 동안 동일한 이벤트가 계속해서 발생 한다면, <span style='color:#FFCC00; font-weight:bold;'>입력이 끝날때, 가장 마지막 이벤트만</span>을 실행하여, 성능성 유리함을 가져올 수 있다.<br />
<a href="https://github.com/niksy/throttle-debounce">예제 코드</a></p>
