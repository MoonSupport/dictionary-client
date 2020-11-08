---
title: Stale
label: [Backend,Database]
hashTag: [데이터]
slug: /S/Stale
---
Stale은 탁한, 부실한, 부패한과 같은 의미를 가집니다.

Stale한 상태란 현실에 반영되지 않는 객체에 대한 정보입니다.

예를들어

한 객체의 맴버 변수들이 데이터베이스를 통해 값을 채워넣었습니다. 이 때, 객체의 값들이 채워진 이후에 근본이 되는 데이터(가져온 DB 데이터)가 데이터베이스에서 변화가 된 상태 입니다.

state한 상태는 프로그램의 연산에 나쁜 영향을 미칠 수 있습니다. 즉, 데이터 무결성(intergrity)에 대한 잘못된 가정으로 인해 잘못된 실행의 원인이 될 수 있습니다.

<a href="https://stackoverflow.com/questions/1563319/what-is-stale-state">참고 - 스택오버플로우</a>
