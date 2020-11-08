---
title: Coroutine
label: [Backend]
hashTag: [, Javascript, Python의 Generator,Kotlin의 Coroutine]
slug: /C/Coroutine
---
<p>일반적으로 Coroutine는 동시적인, 반복적인 틀이라는 뜻입니다.<br />
Coroutine은 실행이 <span style='color:#FFCC00; font-weight:bold;'><strong>일시 중지되고 재개</strong></span> 될 수 있도록하여 <span style='color:#FFCC00; font-weight:bold;'>비선점형</span> 멀티 태스킹을 위해 서브 루틴을 일반화하는 컴퓨터 프로그램 구성 요소입니다. Coroutine은 협력 작업, 예외, 이벤트 루프, 반복자, 무한 목록 및 파이프와 같은 친숙한 프로그램 구성 요소를 구현하는 데 적합합니다.<br />
(<a href="https://en.wikipedia.org/wiki/Coroutine">위키 백과</a>)<br />
Example</p>
<pre><code class="js language-js">function TreeNode(val, left = EMPTY, right = EMPTY) {
this.val = val
this.left = left
this.right = right
}
TreeNode.prototype[Symbol.iterator] = function* iterator() {
yield* this.left
yield this.val
yield* this.right
}</code></pre>
