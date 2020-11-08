---
title: Token
label: [Backend]
hashTag: [Parser,Compiler]
slug: /T/Token
---
<p>Token은 <span style='color:#FFCC00; font-weight:bold;'>
파싱 목적</span>을 위해 분류화를 명시적으로 지시하는 어휘소를 표현하는 구조의 하나이다.<br />
어휘 Token 혹은 심플한 Token이라함은 할당되어 있거나 식별된 <span style='color:#FFCC00; font-weight:bold;'>의미를 가진 문자열</span> 입니다. 이것은 한쌍의 Token 네임과 선택적인 Token 값으로 구성됩니다. Token 이름은 어휘 단위의 카테고리입니다. 일반적으로 Token 이름들은 다음과 같습니다.</p>
<ul>
<li>identifier: 프로그래머가 선택한 이름</li>
<li>keyword: 프로그래밍 언어가 이미 선택한 이름</li>
<li>separator (punctuators): 문장 부호 문자 그리고 한 쌍인 구분기호</li>
<li>operator: 인자들과 계산 결과를 생성하는 기호</li>
<li>literal: 숫자, 논리, 텍스트, 참조 리터럴</li>
<li>comment: 라인, 블럭, 주석<br />
Token 값의 예<br />
|Token name|Sample token values|<br />
|--|--|<br />
|identifier|x, color, UP|<br />
|keyword| if, while, return<br />
|separator| }, (, ;<br />
|operator| +, &lt;, =<br />
|literal| true, 6.02e23, "music"<br />
|comment| /_ Retrieves user data _/, // must be negative<br />
C프로그래밍에서는 다음과 같다.</li>
</ul>
<pre><code>x = a + b * 2;</code></pre>
<p>이 표현식의 어휘 분석은 다음 순서의 Token을 생성합니다.</p>
<pre><code>[
(identifier, x), (operator, =), (identifier, a), (operator, +), (identifier, b), (operator, *), (literal, 2), (separator, ;)
]</code></pre>
<p><a href="https://en.wikipedia.org/wiki/Lexical_analysis#Token">참고 자료</a></p>
