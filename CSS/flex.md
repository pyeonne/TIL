# flex

## π Resource:
### MDN
- [flex](https://developer.mozilla.org/ko/docs/Web/CSS/flex)
- [flex-grow](https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow)

## π Summary:
1. `flex` μμ±μ νλμ flex itemμ΄ flex container λ΄λΆ κ³΅κ°μ λ§μΆκΈ° μν΄ ν¬κΈ°λ₯Ό ν€μ°κ±°λ μ€μ΄λ λ°©λ²μ μ€μ νλ€.
2. ν κ°μμ μΈ κ°μ κ°μ μ¬μ©ν΄ μ§μ ν  μ μλ€.
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
3. `flex-grow` μμ±μ flex itemμ΄ flex container λ΄λΆμμ ν λΉ κ°λ₯ν κ³΅κ°μ ν¬κΈ°λ₯Ό μ€μ νλ€. λ§μ½ flex-itemλ€μ΄ λμΌν flex-grow κ°μ κ°μ§λ©΄ container λ΄λΆμμ λμΌν κ³΅κ°μ ν λΉλ°λλ€.