# Browser 구조 분석

## 🔗 Resource:

### MDN

-   [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
-   [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
-   [Viewport](https://developer.mozilla.org/en-US/docs/Glossary/layout_viewport)
-   [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

## 📝 Summary:

-   window는 브라우저에서 현재 열려 있는 전체적인 창을 의미
-   document는 HTML에 작성한 부분
-   Navigator는 사용자 눈에 보이지 않지만 브라우저 자체에 관련된 정보들이 담겨있다.
-   window 안에 document라는 오브젝트와 fetch, history, indexedDB와 같은 Web API와 관련된 오브젝트들이 들어있다.
-   this는 오브젝트를 지정하지 않으면 글로벌 오브젝트인 window를 가리킨다.
-   많이 쓰이는 경우는 size, scroll, load
