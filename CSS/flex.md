# flex

## 🔗 Resource:
### MDN
- [flex](https://developer.mozilla.org/ko/docs/Web/CSS/flex)
- [flex-grow](https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow)

## 📝 Summary:
1. `flex` 속성은 하나의 flex item이 flex container 내부 공간에 맞추기 위해 크기를 키우거나 줄이는 방법을 설정한다.
2. 한 개에서 세 개의 값을 사용해 지정할 수 있다.
```css
/* Keyword values */
flex: auto;
flex: initial;
flex: none;

/* One value, unitless number: flex-grow */
flex: 2;

/* One value, length or percentage: flex-basis */
flex: 10em;
flex: 30%;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial;
flex: unset;
```
3. `flex-grow` 속성은 flex item이 flex container 내부에서 할당 가능한 공간의 크기를 설정한다. 만약 flex-item들이 동일한 flex-grow 값을 가지면 container 내부에서 동일한 공간을 할당받는다.