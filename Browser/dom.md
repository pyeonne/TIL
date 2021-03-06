# DOM ์์  ์ ๋ณต

## ๐ Resource:

### MDN

-   [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
-   [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
-   [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
-   [Event Target](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
-   [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)

## ๐ Summary:

1. DOM ํฐ ๊ทธ๋ฆผ ์ดํดํ๊ธฐ

-   DOM(Document Object Model)
-   HTML์ ๊ฐ๊ฐ์ ํ๊ทธ๋ค์ ๋ธ๋ผ์ฐ์ ๊ฐ ์ดํดํ  ์ ์๋ ์ค๋ธ์ ํธ๋ก ๋ณํ๋๋ค. (HTML Tag > JavaScript Node)
-   Node๋ EventTarget์ ์ค๋ธ์ ํธ์ด๋ฉฐ, ๋ชจ๋  Node๋ ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ  ์ ์๋ค.
-   Document, Element, Text ๋ฑ๋ Node๋ฅผ ์์๋ฐ๊ธฐ ๋๋ฌธ์ ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ  ์ ์๋ค.
-   Element ์์์๋ ๋ค์ํ Element๊ฐ ์๋ค. (HTMLElement, SVGElement, HTMLDivElement...)
-   ๋ชจ๋  ํ๊ทธ์ ์์๋ค์ ๊ฐ๊ฐ HTML ํ๊ทธ์ Element์ด๊ณ , HTML Element > Element > Node > EventTarget์ด๋ค.
-   DOM Tree
-   ๊ฐ๊ฐ ์ ์ํ ์์๋ค์ด ๋๋ฌด ํํ๋ก ๊ตฌ์ฑ๋์ด์ ธ ์๋ค.

2. ์ฐ๋ฆฌ์ ์กฐ์ ์ด๋ฒคํธ ํ๊ฒ

-   EventTarget์ API๋ ์ด 3๊ฐ๊ฐ ์์ผ๋ฉฐ, addEventListener(), removeEventListener(), dispatchEvent()์ด๋ค.

3. ์๋ฉด ์ ์ฉํ CSSOM

-   CSSOM(CSS Object Model)
-   DOM + (external&embedded&inline&user-agent stylesheet)CSS = CSSOM
-   CSSOM์๋ cascading ๋ฃฐ์ ๋ฐ๋ผ ํฉํด์ง ๋ชจ๋  CSS ๊ฐ๋ค์ด ์ ์๋์ด ์์ผ๋ฉฐ, ์ด๋ฅผ compute styles๋ผ๊ณ  ํ๋ค.
-   DOM + CSSOM = Render Tree
-   ์ต์ข์ ์ผ๋ก ๋ธ๋ผ์ฐ์ ์ ํ๊ธฐ๋ (์ฌ์ฉ์์๊ฒ ๋ณด์ฌ์ง) ์์๋ค๋ง Render Tree์ ์ ๋ณ ๋์ด์ ธ์ ํ๊ธฐ๊ฐ ๋๋ ๊ฒ.
-   HTML head์ ์๋ ์์๋ค์ ์ฌ์ฉ์์ ๋์ ๋ณด์ด์ง ์๊ธฐ ๋๋ฌธ์ ์ต์ข Render Tree์ ํฌํจ๋์ง ์๋๋ค. `display: none;` ์ฒ๋ฆฌ๋ ์์๋ ๋ง์ฐฌ๊ฐ์ง๋ค.
-   `opacity: 0;`, `visibility: hidden;`์ด ์ ์ฉ๋ ์์๋ Render Tree์ ํฌํจ๋๋ค. ์ฌ์ฉ์ ๋์๋ง ๋ณด์ด์ง ์์ ๋ฟ ์์๋ ์กด์ฌํ๊ธฐ ๋๋ฌธ์ด๋ค.

4. ์ฑ๋ฅ ๋ณด์ฅ ๋ ๋๋ง ์์ โก๏ธ (์ ๋ง์ค์โญ๏ธ)

-   Critical rendering path
-   requests/response > loading > scripting > rendering > layout > painting
-   HTML ํ์ด์ง์์ ๋ธ๋ผ์ฐ์ ๊ฐ ์ดํดํ  ์ ์๋๋ก ๋ธ๋ผ์ฐ์ ๋ง์ ์ธ์ด๋ก ๋ฐ๊พธ๋ Construction ํํธ์ Rendering Tree๋ฅผ ์ด์ฉํด์ ๊ณ์ฐ์ ํ ๋ค์์ ์ค์ ๋ก ๋ธ๋ผ์ฐ์  window์ ๊ทธ๋ฆผ์ ๊ทธ๋ ค์ฃผ๋ Operation ํํธ๋ก ๋๋์ด ์ง๋ค.
-   Construction์ DOM > CSSOM > RenderTree
-   Operation์ layout > paint > composition
-   paint ๋จ๊ณ์์๋ ๋ธ๋ผ์ฐ์ ๊ฐ ์ฑ๋ฅ ๊ฐ์ ์ ์ํด์ ๋ ์ด์ด ๋ณ๋ก paint๋ฅผ ์ค๋นํด๋๋๋ค. ๋ง์ฝ ํน์ ํ ์์์ ๋ณ๊ฒฝ์ฌํญ์ด ์๋ค๋ฉด ํด๋น๋๋ ๋ ์ด์ด๋ง ์์ ํ  ์ ์๋ค.
-   `will-change: opacity;` ์์ฑ์ ์ฌ์ฉํ๋ฉด ์ํ๋ ์์์ ๋ ์ด์ด๋ฅผ ์ถ๊ฐํ  ์ ์์ง๋ง, ๋ถํ์ํ ๊ณณ์ ๋จ์ฉํ๋ฉด ๋ธ๋ผ์ฐ์ ์ ์ฑ๋ฅ์ด ๋จ์ด์ง๋ค.
-   ์๋ฐ์คํฌ๋ฆฝํธ๋ CSS๋ก DOM ์์๋ฅผ ์กฐ์ํ  ๋ composition๋ง ๋ค์ ์ผ์ด๋๋ฉด good, paint๊ฐ ๋ค์ ์ผ์ด๋๋ฉด not bad, layout์ด ๋ค์ ์ผ์ด๋๋ฉด very bad.. ๊ณผ์ฐ ์ด ์ ๋๋ฉ์ด์์ด ํ์์ ์ผ๊น? ๋ผ๊ณ  ์๊ฐํด๋ณผ ํ์๊ฐ ์๋ค.
-   Chrome ๊ฐ๋ฐ์ ๋๊ตฌ > More tools > Layers
-   http://csstriggers.com/ ์ฆ๊ฒจ์ฐพ๊ธฐ ํด๋๊ณ  CSS ์์ฑ์ด ์ด๋ค ๊ฒ์ด ์ข์์ง ์์๋ณด๊ณ  ์ ์ฉํ๊ธฐ!

5. DOM ์กฐ์ํ๊ธฐ

-   querySelector์๋ querySelector์ querySelectorAll์ด ์๋ค.
-   querySelector๋ CSS์์ ์ฐ๋ ๊ฒ์ฒ๋ผ ์ ํ์๋ฅผ ์ ์ฐํ๊ฒ ์ธ ์ ์๋ ์ฅ์ ์ด ์๋ค.
-   createElement๋ก ํ๊ทธ๋ฅผ ์ถ๊ฐํ  ์ ์๋ค.
-   setAttribute์ API์ key์ value๋ฅผ ์ ๋ฌํ๋ฉด ์์ฑ์ ์ค์ ํ  ์ ์๋ค.
-   textContent๋ฅผ ์ด์ฉํ ํ์คํธ๋ฅผ ์ถ๊ฐํ  ์ ์๋ค.
-   appendChild๋ ์ปจํ์ด๋ ์์์ ์ ์ผ ๋๋ถ๋ถ์ ์์๋ฅผ ์ถ๊ฐํด์ค๋ค.
-   insertBefore API์ newNode์ referenceNode๋ฅผ ์ ๋ฌํ๋ฉด newNode๋ฅผ referenceNode ์ ์ ์ถ๊ฐํด์ค๋ค.
-   ๋ถ๋ถ์ ์ผ๋ก ๋ณ๊ฒฝ์ด ์ผ์ด๋์ผ ๋๋ค๋ฉด innerHTML์ ์ฌ์ฉํ๋ ๊ฒ ๋ณด๋ค๋ ํน์  Element์ textContent๋ฅผ ์๋ฐ์ดํธํ๋ ๊ฒ์ด ํจ์จ์ ์ด๋ค.
- removeChild๋ฅผ ํธ์ถํ๋ฉด child๊ฐ ์์ด์ง ์๋ ์๋ค.
- Element์ ๋ณ์๋ฅผ ๊ฐ์ง๊ณ  ์์ผ๋ฉด์ ์กฐ๊ธ ๋ ๋ง์ ๋์์ ํด์ผ๋๋ค๋ฉด CreateElement๋ฅผ ์ด์ฉํด ๋ง๋๋ ๊ฒ์ด ์ข๋ค.
- ํ๋ฒ ์๋ฐ์ดํธ ํ ๋ณ๊ฒฝํ  ๊ฒ์ด ์๋ค๋ฉด innerHTML์ ์ด์ฉํด ๋์ ์ผ๋ก ์ถ๊ฐํด๋ ๊ด์ฐฎ๋ค.
