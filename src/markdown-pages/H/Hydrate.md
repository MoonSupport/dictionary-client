---
title: Hydrate
label: [Frontend,Backend,Database]
hashTag: [Java Object,React Dom hydrate,ORM]
slug: /H/Hydrate
---
<p>객체를 Hydrate 한다는 것은 <span style="color:#FFBF00; font-weight:bold;">아직 어떤 도메인 데이터('진짜' 데이터)도 포함하지 않은 메모리에 존재하는 객체를 가져옵니다. 그런 후에 도메인 데이터(데이터베이스, 네트워크, 혹은 파일 시스템으로부터)를 채웁니다(Populate).</span><br />
Erick Robertson( 마이크로소프트 IT Manager )에 댓글에 의하면</p>
<blockquote>
  <p><a href="https://github.com/MoonSupport/DICTIONARY/blob/master/S/Serialize.md">deserialization</a> == instantiation + Hydrate<br />
  만약 치명적인 퍼포먼스에 걱정할 필요가 없고, 내부에 있는 데이터 액세스 API디버깅 퍼포먼스 최적화같은것을 하지 않는다면 아마 hydration를 다룰 필요는 없을 겁니다.<br />
  여러분들은 전형적으로 deserialization를 대신해서 사용 할 것이고, 이로써 더 적은 코드를 작성할 수 있을 것입니다. 몇몇 데이터 접근 API는 이런 옵션을 주지 않는데, 그러한 케이스들은 명시적으로 Hydrate step을 불러야만 할 것입니다.<br />
  더 자세한 Hydrate 컨셉은 <a href="https://stackoverflow.com/questions/6991135/what-does-it-mean-to-hydrate-an-object">Erick Robertson</a>의 답변을 확인하세요<br />
  또한 React Dom을 구성하는데 역시 hydrate라는 컨셉을 이용합니다.<br />
  render()와 동일하지만 <span style="color:#FFBF00; font-weight:bold;">HTML 콘텐츠가 ReactDOMServer로 렌더링 된 컨테이너에 이벤트를 보충하기 위해 사용</span>됩니다. React는 기존 마크업에 이벤트 리스너를 연결합니다.<br />
  React는 렌더링 된 콘텐츠가 서버와 클라이언트 간에 같을 것으로 예상합니다. React가 텍스트 콘텐츠의 차이를 고칠 수는 있지만 이러한 불일치를 버그로 취급하여 고쳐야 합니다. 개발 모드에서 React는 이벤트 보충 중 발생하는 불일치에 대해 경고합니다. 불일치가 발생하는 경우에 어트리뷰트 차이를 고친다는 보장이 없습니다. 대다수의 어플리케이션에서 불일치가 발생하는 경우는 많지 않으며 발생하는 경우 모든 마크업을 검증하는 것이 매우 큰 비용을 수반하기 때문에 성능상의 이유로 중요한 문제입니다.</p>
</blockquote>
<h3>요약하자면</h3>
<p>서버사이드 렌더링 시에 이미 서버가 HTML을 만들어 제공하기 때문에 렌더링이 필요없다. 하지만 이런 상황에서는 정적인 페이지로만 그치기 때문에 여기서 <span style="color:#FFBF00; font-weight:bold;">
동적인 페이지로 만들어주기 위해서 Store, State 등을 채워주어야(Populate) 하는데 이런 과정을 Hydrate (수분을 보충하는) 라고</span> 한다.</p>
