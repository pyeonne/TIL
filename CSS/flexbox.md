# Flexbox

## 🔗 Resource:
### Youtube
- [CSS Flexbox와 CSS Grid, 한번에 정리!](https://www.youtube.com/watch?v=eprXmC_j9A4)

### Blog
- [이번에야말로 CSS Flex를 익혀보자](https://studiomeal.com/archives/197)

### Tool
- [TEST CSS FLEXBOX RULES](https://flexbox.help/)

## 📝 Summary:
## Flexbox
- `display: flex;`를 적용하면 item이 container의 높이만큼 늘어난다.
- column 레이어를 만들 때 편리하다.
- inline과 inline-block처럼 item의 너비는 content만큼 늘어난다.

### Container에 적용하는 속성들
#### flex-direction
item들이 배치되는 축의 방향을 결정하는 속성이다. 즉 "메인축(오뎅꼬치)의 방향을 가로로 할거냐 세로로 할거냐"를 정해주는 것이다.
- `row` 
- `column` 
- `row-reverse`
- `column-reverse`
> row-reverse와 column-reverse는 많이 쓰이지 않는다.

#### flex-wrap
item 줄바꿈을 어떻게 할지 결정하는 속성이다.
- `nowrap`
- `wrap`
- `wrap-reverse`
> wrap-reverse는 많이 쓰이지 않는다.

#### justify-content
메인축 방향으로 item들을 정렬하는 속성이다.
- `flex-start`
- `flex-end`
- `center`
- `space-between`: item들의 양 끝에는 여백을 없애고 item들의 사이에 균일한 여백을 만들어 준다.
- `space-around`: item들의 "둘레(around)"에 균일한 여백을 만들어 준다. item들의 양 끝의 여백보다 item들 사이에 여백이 더 넓다.
- `space-evenly`: item들의 양 끝과 사이에 균일한 여백을 만들어 준다.

#### align-items
수직축 방향으로 item들을 정렬하는 속성이다.
- `stretch`
- `flex-start`: flex-direction이 row일 때는 위, column일 때는 왼쪽에 배치된다.
- `flex-end`
- `center`
> justify-content와 align-items를 center로 설정하면 item들이 중앙에 배치된다.

#### align-content
`flex-wrap: wrap;`이 설정된 상태에서 item들의 행이 2줄 이상 되었을 때의 수직축 방향 정렬을 결정하는 속성이다.
- `stretch`
- `flex-start`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`

### Item에 적용하는 속성들
#### flex-grow
flex-grow에 들어가는 숫자의 의미는 item들의 content 너비 값을 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나누어 가진다고 생각하면 된다.

#### flex-basis
- `auto`: flex-grow와 동일
- 보통 `flex-basis: 0;`으로 설정해서 사용하는 경우가 많다. 그 이유는 flex-grow와 함께 사용하면 item들을 완벽한 비율로 나눌 수 있다.

#### flex-shrink
- flex-shrink는 숫자값이 들어가는데, 0보다 큰 값을 설정하면 해당 item이 유연한(Flexible) 박스로 변하고 flex-basis보다 작아진다.
- 기본값이 1이기 때문에 따로 설정하지 않아도 item이 flex-basis보다 작아진다.
 
#### flex
- flex-grow, flex-shrink, flex-basis를 한 번에 쓸 수 있는 축향형 속성이다.
- `flex: 1;` 이런 식으로 flex-basis를 생략해서 쓰면 flex-basis의 값은 0이 된다.
- flex로 설정된 item은 유연한(Flexble) 박스로 변한다.
> flex를 사용하면 따로 flex-basis를 0으로 설정하지 않아도 되기 때문에 flex를 사용하는 경우가 많다.

#### align-self
- align-items가 전체 item의 수직축 방향 정렬이라면, align-self는 해당 item의 수직축 방향 정렬이다.
- 기본값은 auto로, align-items 설정을 상속받는다.
- 그 외의 값은 align-items와 동일하다.

#### order
- 각 item들의 시각적 나열 순서를 결정한다.
- 실제로 HTML의 구조가 바뀌는 것은 아니다.
