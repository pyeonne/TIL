# DOM 완전 정복

## 🔗 Resource:

### MDN

-   [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
-   [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
-   [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
-   [Event Target](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
-   [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)

## 📝 Summary:

1. DOM 큰 그림 이해하기

-   DOM(Document Object Model)
-   HTML의 각각의 태그들은 브라우저가 이해할 수 있는 오브젝트로 변환된다. (HTML Tag > JavaScript Node)
-   Node는 EventTarget의 오브젝트이며, 모든 Node는 이벤트가 발생할 수 있다.
-   Document, Element, Text 등도 Node를 상속받기 때문에 이벤트가 발생할 수 있다.
-   Element 안에서도 다양한 Element가 있다. (HTMLElement, SVGElement, HTMLDivElement...)
-   모든 태그의 요소들은 각각 HTML 태그의 Element이고, HTML Element > Element > Node > EventTarget이다.
-   DOM Tree
-   각각 정의한 요소들이 나무 형태로 구성되어져 있다.

2. 우리의 조상 이벤트 타겟

-   EventTarget의 API는 총 3개가 있으며, addEventListener(), removeEventListener(), dispatchEvent()이다.

3. 알면 유용한 CSSOM

-   CSSOM(CSS Object Model)
-   DOM + (external&embedded&inline&user-agent stylesheet)CSS = CSSOM
-   CSSOM에는 cascading 룰에 따라 합해진 모든 CSS 값들이 정의되어 있으며, 이를 compute styles라고 한다.
-   DOM + CSSOM = Render Tree
-   최종적으로 브라우저에 표기될(사용자에게 보여질) 요소들만 Render Tree에 선별 되어져서 표기가 되는 것.
-   HTML head에 있는 요소들은 사용자의 눈에 보이지 않기 때문에 최종 Render Tree에 포함되지 않는다. `display: none;` 처리된 요소도 마찬가지다.
-   `opacity: 0;`, `visibility: hidden;`이 적용된 요소는 Render Tree에 포함된다. 사용자 눈에만 보이지 않을 뿐 요소는 존재하기 때문이다.

4. 성능 보장 렌더링 순서 ⚡️ (정말중요⭐️)

-   Critical rendering path
-   requests/response > loading > scripting > rendering > layout > painting
-   HTML 페이지에서 브라우저가 이해할 수 있도록 브라우저만의 언어로 바꾸는 Construction 파트와 Rendering Tree를 이용해서 계산을 한 다음에 실제로 브라우저 window에 그림을 그려주는 Operation 파트로 나뉘어 진다.
-   Construction은 DOM > CSSOM > RenderTree
-   Operation은 layout > paint > composition
-   paint 단계에서는 브라우저가 성능 개선을 위해서 레이어 별로 paint를 준비해놓는다. 만약 특정한 요소의 변경사항이 있다면 해당되는 레이어만 수정할 수 있다.
-   `will-change: opacity;` 속성을 사용하면 원하는 요소에 레이어를 추가할 수 있지만, 불필요한 곳에 남용하면 브라우저의 성능이 떨어진다.
-   자바스크립트나 CSS로 DOM 요소를 조작할 때 composition만 다시 일어나면 good, paint가 다시 일어나면 not bad, layout이 다시 일어나면 very bad.. 과연 이 애니메이션이 필수적일까? 라고 생각해볼 필요가 있다.
-   Chrome 개발자 도구 > More tools > Layers
-   http://csstriggers.com/ 즐겨찾기 해놓고 CSS 속성이 어떤 것이 좋은지 알아보고 적용하기!

5. DOM 조작하기

-   querySelector에는 querySelector와 querySelectorAll이 있다.
-   querySelector는 CSS에서 쓰는 것처럼 선택자를 유연하게 쓸 수 있는 장점이 있다.
-   createElement로 태그를 추가할 수 있다.
-   setAttribute의 API에 key와 value를 전달하면 속성을 설정할 수 있다.
-   textContent를 이용행 텍스트를 추가할 수 있다.
-   appendChild는 컨테이너 안에서 제일 끝부분에 요소를 추가해준다.
-   insertBefore API에 newNode와 referenceNode를 전달하면 newNode를 referenceNode 전에 추가해준다.
-   부분적으로 변경이 일어나야 된다면 innerHTML을 사용하는 것 보다는 특정 Element의 textContent를 업데이트하는 것이 효율적이다.
