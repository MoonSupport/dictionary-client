---
title: Chunk
label: [Common,Frontend,Backend,Database,Devops]
hashTag: [힙 메모리 관리,HTTP 메시지 전송,데이터 중복 제거, 데이터 동기화,Javascript Library인 Lodash의 함수]
slug: /C/Chunk
---
<p>일반적으로 Chunk는 덩어리 혹은 상당한 양이라는 뜻을 가진다.<br />
컴퓨터 프로그래밍에서 Chunk는 여러가지 의미를 가진다.</p>
<h2 id="">메모리 관리에서</h2>
<p>일반적인 모던 소프트웨어 시스템에서 힙이라고 하는 자료구조로 부터 동적으로 메모리를 할당합니다.<br />
메모리를 할당하고 비우기 위해 힙관리 루틴이 호출되어 집니다. 힙 관리는 약간의 계산시간이 필요하며 이것은 성능문제를 유발 할수 있습니다.<br />
청킹은 상황의 특정정보를 사용하여 관련된 메모리 할당 <span style="color:#FFBF00; font-weight:bold;">요청을 집계해서 퍼포먼스 향상</span>을 위한 전략으로 나타내어 집니다.<br />
예를 들어, 특정 종류의 객체가 일반적으로 각 객체를 <span style="color:#FFBF00; font-weight:bold;">개별적으로 할당 및 해제하는 대신 힙 관리자를 16 번 호출하는 대신 8 개의 그룹으로</span> 필요하다는 것이 알려진 경우 8 개의 배열을 할당하고 해제 할 수 있습니다. 호출 횟수를 2로 줄입니다.</p>
<h2 id="http">HTTP 메시지 전송에서</h2>
<p>Chunk는 HTTP 1.1프로토콜의 특별한 기능입니다. 메모리 관리에서와 별개의 의미를 지니는데,<br />
불편하게 <span style="color:#FFBF00; font-weight:bold;">커다란 메시지를 더 작은 "덩어리"로 쪼개는 기능</span>을 나타냅니다.</p>
<h2 id="-1">데이터 중복 제거, 데이터 동기화 및 원격 데이터 압축</h2>
<p>청킹은 <span style="color:#FFBF00; font-weight:bold;">청킹 알고리즘에 의해 파일을 Chunk라고하는 작은 조각으로 분할</span>하는 프로세스입니다. 스토리지에서 반복되는 데이터의 중복 사본을 제거하거나 변경된 Chunk 만 선택하여 네트워크를 통해 전송되는 데이터의 양을 줄일 수 있습니다. 롤링 해시와 같은 CDC (Content-Defined Chunking) 알고리즘과 그 변형은 지난 15 년간 가장 인기있는 데이터 중복 제거 알고리즘이었습니다 <a href="https://en.wikipedia.org/wiki/Chunking_(computing)">참고 자료</a></p>
