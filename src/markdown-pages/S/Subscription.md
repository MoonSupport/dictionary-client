---
title: Subscription
label: [Frontend,Backend]
hashTag: [pub-sub pattern,왜 모든 프론트엔드 개발자는 pub-sub을 알아야하는가?,Nodejs & Javascript Event]
slug: /S/Subscription
---
<p>분리된 서로 다른 기능이 메시지 전달을 통해서 연결하고 통신하는 방법의 네트워크 지향 아키텍쳐입니다.<br />
Observer패턴 혹은 Pub-Sub패턴이라 불리는 디자인 패턴에서 사용됩니다.<br />
이 패턴은 비동기 메시징 패러다임이다. 발행-구독 모델에서 발신자의 메시지는 특별한 수신자가 정해져 있지 않다. 대신 발행된 메시지는 정해진 범주에 따라, 각 범주에 대한 구독을 신청한 수신자에게 전달된다. 수신자는 발행자에 대한 지식이 없어도 원하는 메시지만을 수신할 수 있다. 이러한 발행자와 구독자의 <span style="color:#FFBF00; font-weight:bold;">디커플링은 더 다이나믹한 네트워크 토폴로지와 높은 확장성</span>을 허용한다.</p>
