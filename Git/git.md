## Git을 사용하는 이유

-   most commonly used
-   free
-   open source
-   lightning fast
-   work offline
-   undo mistakes
-   easy and fast branching/merging

## 초기 설정

-   `git --version` 버전 확인
-   `git config --list` 설정 목록 확인
-   `git config --global -e` 글로벌 설정 목록 확인
-   `git config --global user.name "username"` 사용자 이름 설정
-   `git config --global user.email "mailaddress"` 사용자 이메일 설정
-   `code .` VSCode 실행
-   `git config --global core.editor "code"`
-   `git config --global core.editor "code --wait`
-   `git config --global core.autocrlf true` window의 경우 git에 저장할 때는 carriage-return을 삭제하고, git에서 window로 가져올 때는 carriage-return을 자동으로 추가한다.
-   `git config --global core.autocrlf input` mac의 경우

## 공부 포인트

-   자주 사용하는 명령어
-   자주 사용하는 옵션
-   [Git Reference](https://git-scm.com/docs)

## 깃 초기화 및 삭제

-   `mkdir` 디렉토리 생성할 때 사용하는 명령어
-   `ls -al` 리스트 목록
-   `git init` 깃 초기화
-   `rm -rf .git` 깃 삭제
-   `git status` 깃 상태
-   `git config --global alias.st status` -> `git st` 깃 상태 단축어 변경
-   `git config --h` config에 관련된 다양한 속성 값들을 확인. reference 글 참고

## Git Workflow

-   working directory -> staging area -> .git directory
-   .git directory에 저장된 버전들은 checkout 명령어를 통해 언제든지 원하는 버전으로 되돌아갈 수 있다.
-   저장된 git history는 Local 환경에만 보관되기 때문에 Local 환경에 문제가 생기면 history를 모두 잃어버릴 수 있다. 그래서 깃허브라는 서버에 push 명령어를 통해 .git directory를 업로드해둔다.
-   서버에 업로드된 .git directory를 Local 환경에 다시 옮기려면 pull 명령어를 이용한다.
-   각각의 commit에는 고유한 해쉬코드가 부가되는데, 이를 통해 버전 정보를 참조할 수 있다.
-   commit에는 id뿐만 아니라 message, author, date, time과 같은 정보들도 포함되어 있다.
-   working directory는 untracked와 tracked로 나누어 볼 수 있다.
-   tracked는 unmodified와 modified로 나누어 볼 수 있다.

## 실습

-   `echo hello world! > a.txt`
-   `git add` working directory -> staging area
-   `git add *.txt` .txt로 끝나는 파일 모두를 가리킴
-   a.txt 파일의 내용을 수정하면 modified로 옮겨진 걸 확인할 수 있다.
-   `git rm --cached *.txt` untracked로 옮기기
-   `git add *` 모든 파일이 staging area로 옮겨진다.
-   `git add .` 모든 파일들을 포함해서 staging area로 옮겨진다.
-   `echo *.log > .gitignore` 깃허브에 추가하고 싶은 파일이 있으면 .gitignore을 만들면 된다.
-   특정 파일이나 특정 디렉토리, 특정 디렉토리 안에 있는 특정 파일을 트랙킹 설정할 수 있다.
-   `git status -h` 깃 상태에 관련된 옵션
-   `git status -s` 깃 상태 간단하게
-   `git diff` working directory 변경사항 자세하게
-   `git diff --staged` staging area 변경사항 자세하게
-   `[diff] tool = vscode`, `[difftool "vscode"] cmd = code --wait --diff $LOCAL $REMOTE` diff vscode에서 열기 설정
-   `git commit`
-   `git log`
-   `git commit -m "커밋메시지"`
-   `git commit -am "커밋메시지"`

## 커밋 팁

-   작은 단위로 의미있는 이름을 지정해서 커밋하는 것이 중요하다. e.g. Initialise project > Add LoginService module > Add UserRepository module > Add Welcome page > Add About page > Add light theme
-   커밋메시지에 맞게 해당되는 내용만 커밋해야 하는 것이 중요하다.
