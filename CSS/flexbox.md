# Flexbox

## ๐ Resource:
### Youtube
- [CSS Flexbox์ CSS Grid, ํ๋ฒ์ ์ ๋ฆฌ!](https://www.youtube.com/watch?v=eprXmC_j9A4)

### Blog
- [์ด๋ฒ์์ผ๋ง๋ก CSS Flex๋ฅผ ์ตํ๋ณด์](https://studiomeal.com/archives/197)

### Tool
- [TEST CSS FLEXBOX RULES](https://flexbox.help/)

## ๐ Summary:
## Flexbox
- `display: flex;`๋ฅผ ์ ์ฉํ๋ฉด item์ด container์ ๋์ด๋งํผ ๋์ด๋๋ค.
- column ๋ ์ด์ด๋ฅผ ๋ง๋ค ๋ ํธ๋ฆฌํ๋ค.
- inline๊ณผ inline-block์ฒ๋ผ item์ ๋๋น๋ content๋งํผ ๋์ด๋๋ค.

### Container์ ์ ์ฉํ๋ ์์ฑ๋ค
#### flex-direction
item๋ค์ด ๋ฐฐ์น๋๋ ์ถ์ ๋ฐฉํฅ์ ๊ฒฐ์ ํ๋ ์์ฑ์ด๋ค. ์ฆ "๋ฉ์ธ์ถ(์ค๋๊ผฌ์น)์ ๋ฐฉํฅ์ ๊ฐ๋ก๋ก ํ ๊ฑฐ๋ ์ธ๋ก๋ก ํ ๊ฑฐ๋"๋ฅผ ์ ํด์ฃผ๋ ๊ฒ์ด๋ค.
- `row` 
- `column` 
- `row-reverse`
- `column-reverse`
> row-reverse์ column-reverse๋ ๋ง์ด ์ฐ์ด์ง ์๋๋ค.

#### flex-wrap
item ์ค๋ฐ๊ฟ์ ์ด๋ป๊ฒ ํ ์ง ๊ฒฐ์ ํ๋ ์์ฑ์ด๋ค.
- `nowrap`
- `wrap`
- `wrap-reverse`
> wrap-reverse๋ ๋ง์ด ์ฐ์ด์ง ์๋๋ค.

#### justify-content
๋ฉ์ธ์ถ ๋ฐฉํฅ์ผ๋ก item๋ค์ ์ ๋ ฌํ๋ ์์ฑ์ด๋ค.
- `flex-start`
- `flex-end`
- `center`
- `space-between`: item๋ค์ ์ ๋์๋ ์ฌ๋ฐฑ์ ์์ ๊ณ  item๋ค์ ์ฌ์ด์ ๊ท ์ผํ ์ฌ๋ฐฑ์ ๋ง๋ค์ด ์ค๋ค.
- `space-around`: item๋ค์ "๋๋ (around)"์ ๊ท ์ผํ ์ฌ๋ฐฑ์ ๋ง๋ค์ด ์ค๋ค. item๋ค์ ์ ๋์ ์ฌ๋ฐฑ๋ณด๋ค item๋ค ์ฌ์ด์ ์ฌ๋ฐฑ์ด ๋ ๋๋ค.
- `space-evenly`: item๋ค์ ์ ๋๊ณผ ์ฌ์ด์ ๊ท ์ผํ ์ฌ๋ฐฑ์ ๋ง๋ค์ด ์ค๋ค.

#### align-items
์์ง์ถ ๋ฐฉํฅ์ผ๋ก item๋ค์ ์ ๋ ฌํ๋ ์์ฑ์ด๋ค.
- `stretch`
- `flex-start`: flex-direction์ด row์ผ ๋๋ ์, column์ผ ๋๋ ์ผ์ชฝ์ ๋ฐฐ์น๋๋ค.
- `flex-end`
- `center`
> justify-content์ align-items๋ฅผ center๋ก ์ค์ ํ๋ฉด item๋ค์ด ์ค์์ ๋ฐฐ์น๋๋ค.

#### align-content
`flex-wrap: wrap;`์ด ์ค์ ๋ ์ํ์์ item๋ค์ ํ์ด 2์ค ์ด์ ๋์์ ๋์ ์์ง์ถ ๋ฐฉํฅ ์ ๋ ฌ์ ๊ฒฐ์ ํ๋ ์์ฑ์ด๋ค.
- `stretch`
- `flex-start`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`

### Item์ ์ ์ฉํ๋ ์์ฑ๋ค
#### flex-grow
flex-grow์ ๋ค์ด๊ฐ๋ ์ซ์์ ์๋ฏธ๋ item๋ค์ content ๋๋น ๊ฐ์ ์ ์ธํ ์ฌ๋ฐฑ ๋ถ๋ถ์ flex-grow์ ์ง์ ๋ ์ซ์์ ๋น์จ๋ก ๋๋์ด ๊ฐ์ง๋ค๊ณ  ์๊ฐํ๋ฉด ๋๋ค.

#### flex-basis
- `auto`: flex-grow์ ๋์ผ
- ๋ณดํต `flex-basis: 0;`์ผ๋ก ์ค์ ํด์ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ๊ฐ ๋ง๋ค. ๊ทธ ์ด์ ๋ flex-grow์ ํจ๊ป ์ฌ์ฉํ๋ฉด item๋ค์ ์๋ฒฝํ ๋น์จ๋ก ๋๋ ์ ์๋ค.

#### flex-shrink
- flex-shrink๋ ์ซ์๊ฐ์ด ๋ค์ด๊ฐ๋๋ฐ, 0๋ณด๋ค ํฐ ๊ฐ์ ์ค์ ํ๋ฉด ํด๋น item์ด ์ ์ฐํ(Flexible) ๋ฐ์ค๋ก ๋ณํ๊ณ  flex-basis๋ณด๋ค ์์์ง๋ค.
- ๊ธฐ๋ณธ๊ฐ์ด 1์ด๊ธฐ ๋๋ฌธ์ ๋ฐ๋ก ์ค์ ํ์ง ์์๋ item์ด flex-basis๋ณด๋ค ์์์ง๋ค.
 
#### flex
- flex-grow, flex-shrink, flex-basis๋ฅผ ํ ๋ฒ์ ์ธ ์ ์๋ ์ถํฅํ ์์ฑ์ด๋ค.
- `flex: 1;` ์ด๋ฐ ์์ผ๋ก flex-basis๋ฅผ ์๋ตํด์ ์ฐ๋ฉด flex-basis์ ๊ฐ์ 0์ด ๋๋ค.
- flex๋ก ์ค์ ๋ item์ ์ ์ฐํ(Flexble) ๋ฐ์ค๋ก ๋ณํ๋ค.
> flex๋ฅผ ์ฌ์ฉํ๋ฉด ๋ฐ๋ก flex-basis๋ฅผ 0์ผ๋ก ์ค์ ํ์ง ์์๋ ๋๊ธฐ ๋๋ฌธ์ flex๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ๊ฐ ๋ง๋ค.

#### align-self
- align-items๊ฐ ์ ์ฒด item์ ์์ง์ถ ๋ฐฉํฅ ์ ๋ ฌ์ด๋ผ๋ฉด, align-self๋ ํด๋น item์ ์์ง์ถ ๋ฐฉํฅ ์ ๋ ฌ์ด๋ค.
- ๊ธฐ๋ณธ๊ฐ์ auto๋ก, align-items ์ค์ ์ ์์๋ฐ๋๋ค.
- ๊ทธ ์ธ์ ๊ฐ์ align-items์ ๋์ผํ๋ค.

#### order
- ๊ฐ item๋ค์ ์๊ฐ์  ๋์ด ์์๋ฅผ ๊ฒฐ์ ํ๋ค.
- ์ค์ ๋ก HTML์ ๊ตฌ์กฐ๊ฐ ๋ฐ๋๋ ๊ฒ์ ์๋๋ค.
