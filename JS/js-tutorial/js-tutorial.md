# 자바스크립트 배우기전 꼭 봐야할 영상

## 🔗 Resource:

### YOUTUBE

-   [자바스크립트의 역사와 현재 그리고 미래](https://www.youtube.com/watch?v=wcsVjmHrUQg&t=8s)
-   [자바스크립트 async & defer](https://www.youtube.com/watch?v=tJieVCgGzhs)
-   [자바스크립트 데이터 타입](https://www.youtube.com/watch?v=OCCpGh4ujb8)

## 📝 Summary:
### 1편
#### 1. 현재 가고 있는 방향
- SPA(Single Page Application)라는 하나의 페이지 안에서 필요한 부분만 부분적으로 업데이트하는 방식이 유행하고 있다.
- 물론 Javascript만으로도 만들 수 있지만, React, Angular, Vue와 같은 라이브러리나 프레임워크를 이용하면 SPA를 조금 더 쉽게 만들 수 있다.

#### 2. 이용할 수 있는 분야
- ECMAScript의 활발한 표준화와 강력한 자바스크립트 엔진(V8)을 통해서 nodejs가 등장했다.
- nodejs는 V8을 이용한 back-end에서 서비스를 구현하게 만들 수 있도록 만들어졌다.
- React Native를 이용해 모바일 어플리케이션도 만들 수 있다.
- ELECTRON을 이용해 데스크탑 어플리케이션도 만들 수 있다.

#### 3. 뜨고 있는 다른 기술
- 자바스크립트가 유일한 언어였지만, 요즘엔 웹어셈블리가 등장해서 Python, Go, c# 등 다양한 언어들을 이용해 어플리케이션을 만드는 것이 가능해졌다.
- C++로 만들어진 게임도 웹브라우저에서 동작할 수 있게 되었다.
- Figma도 좋은 예다.

### 2편
#### 1. Dev tool
- Sources 탭은 breakpoint를 걸어서 디버깅을 할 때 유용하다.
- Network 탭은 얼마나 많은 데이터가 오고 갔는지 검사할 수 있다.
- 그 외 Performance, Memory, Application 등

#### 2. async VS defer
- `<head>` 태그 안에 script를 포함하면 js 파일의 용량이 클 경우 사용자가 웹페이지를 불러오는데 시간이 많이 소요된다. 좋지 않은 방법.
- `<body>` 태그 안에 script를 포함하면 사용자가 기본적인 HTML 콘텐츠를 빨리 볼 수 있는 장점은 있지만, 자바스크립트에 의존적인 웹페이지인 경우 서버에서 자바스크립트를 받아 오는 시간도 기다려야 하고 실행하는 시간도 기다려야 한다.
- `head + async`은 다운로드 시간을 절약할 수 있지만, 자바스크립트를 사용하기 전에 HTML 요소가 아직 정의되지 않을 수도 있고 사용자가 자바스크립트를 실행하는 시간은 여전히 기다려야 한다.
- `head + defer`은 parsing HTML + fetching js > page is ready > executing js. 제일 효율적이고 안전한 방법.

#### 3. use-strict
- 비상식적인 행동을 막아준다.
- 자바스크립트 엔진이 조금 더 효율적으로 자바스크립트를 분석해주며 성능 개선까지 기대할 수 있다.

### 3편
