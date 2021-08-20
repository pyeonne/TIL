# 리액트 설치와 셋팅법

1. [Node.js](https://nodejs.org/en/) 최신버전으로 설치하기
- 요즘은 맥과 윈도우의 설치방법은 동일
- 무조건 최신버전 설치
- 필요 툴 자동 설치 체크

> Q. Node.js가 이미 설치되어 있는데요?<br>
그래도 최신버전으로 재설치하길 권장. 100% 에러남!

2. VSCode에서 작업 폴더 열기

3. 터미널을 열고 `npx create-react-app 프로젝트명` 입력하기
- `npx`는 라이브러리 설치를 도와주는 명령어다. node.js 설치가 잘 되어있다면 누구나 이용할 수 있다.
- `create-react-app`은 리액트 셋팅이 완료된 boilerplate(프로젝트)를 만들기 쉽게 도와주는 라이브러리다.
- 작업 폴더에 프로젝트명으로 하위 폴더가 생성되며, 그 폴더 안에 리액트 개발에 필요한 모든 파일이 설치된다.
- [빨간 에러가 난다면...](https://online.codingapple.com/unit/react1-install-create-react-app-npx/?id=2305)

4. 생성된 하위 폴더 열고 코딩 시작하기
- App.js가 main js파일이며, index.html과 비슷하다.
5. 코드 작성한 걸 미리보고 싶으면 터미널을 열고 `npm start` 입력하기

- 브라우저가 자동으로 열리지 않으면 Local: http://localhost:3000 주소를 직접 입력해서 접속한다.

# Q&A

1. node.js를 왜 설치하나요?
- node.js를 설치하면 npm이라는 툴을 이용할 수 있다. npm은 제이쿼리, 부트스트랩 등과 같은 라이브러리를 쉽게 설치할 수 있도록 도와주는 툴이다. 
- npm을 이용하여 [create-react-app](https://create-react-app.dev/) 라이브러리를 설치했다.

2. App.js 파일은 무엇인가요?
- 메인페이지에 들어갈 HTML 코드를 작성하는 곳이다.
- 실제 메인페이지는 public/index.html이다.
- App.js에 작성한 HTML 코드는 index.js를 통해 index.html로 가져온다.
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    // 이 자리에 App.js에서 작성한 HTML 코드를 가져와라
    document.getElementById('root'),
);
```

3. node_modules 폴더는 무엇인가요?
- 설치한 라이브러리를 전부 모아놓은 폴더
- creat-react-app을 구동하기위해 필요한 라이브러리들

4. public 폴더는 무엇인가요?
- static 파일 보관함
- 동적으로 바뀌지 않는 파일들을 모아놓은 곳
- 보통 react 프로젝트를 다 만들면 발행을 하는데, 그러면 작성한 코드들이 다 압축이 된다. 이때 public 폴더 안의 파일들은 압축이 되지 않는다.

5. src 폴더는 무엇인가요?
- 소스 코드 보관함
- 실직적으로 코드를 작성하는 파일들을 모아놓은 곳


6. pakage.json 파일은 무엇인가요?
- 설치한 라이브러리 목록
- 설치한 라이브러리의 이름과 버전들을 모아놓은 곳
- 따로 건드릴 필요는 없고 npm으로 설치를 할 때마다 자동으로 기록된다.