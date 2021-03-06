# SVG

## 🔗 Resource:

### Youtube

-   [SVG #1 SVG란?](https://www.youtube.com/watch?v=knwej7J-bpU)

## 📝 Summary:

## SVG란?

1. 확장 가능한 벡터 그래픽(Scalable Vector Graphics)

-   벡터 그래픽은 픽셀 하나 하나를 찍어서 그리는 그림이 아니라 어떤 점과 점 사이에 계산을 이용해서 그리는 그림을 말한다.
-   가장 큰 장점은 이미지의 크기를 크게 키워도 이미지가 깨지지 않으며, 용량도 커지지 않는다. 그래서 요즘은 웹페이지에서 많이 활용되고 있다. e.g. Adobe Illustrator
-   웹페이지에서 벡터 그래픽을 사용하는 표준
-   아이콘이나 일러스트 같은 이미지들을 png와 jpg로 사용하지 않고 svg로 많이 사용하고 있다.

2. XML 기반의 2차원 그래픽

-   svg 자체가 XML 코드로 이루어져 있다. svg 태그 안을 보면 알 수 없는 숫자들이 나열되어 있는 것을 볼 수 있다.

3. 아이콘, 이미지, 그래프, 사용자 인터페이스(UI) 등에 널리 쓰인다.
4. DOM의 일부로서 각 개체 별로 HTML element가 추가된다.
5. 벡터이기 때문에 이미지의 크기에 상관 없이 선명하게 유지되고, 모양이 많이 복잡하지 않은 경우 파일 사이즈도 작다.

-   벡터 이미지의 모양이 복잡할수록 용량이 커진다.
-   그림을 그리는 점들이 많을 수록 용량도 늘어나고 연산할 것이 많아지기 때문에 성능도 떨어질 수 있다.
-   모든 이미지가 벡터면 좋은 것이 아니라 아이콘처럼 간단한 이미지들이 벡터 그래픽을 사용하면 유리하다.

6. CSS와 자바스크립트를 이용해서 조작이 가능하다.
7. 크기(width/height)가 큰 이미지를 표현할 때 유리하다.
8. 모양이 복잡하고 개체 수(HTML elements)가 많을 수록 성능이 떨어진다.

## 예제

```html
<svg
    class="home__blob"
    viewBox="0 0 200 187"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
>
    <mask id="mask0" mask-type="alpha">
        <path
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
        />
    </mask>
    <g mask="url(#mask0)">
        <path
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
        />
        <image class="home__blob-img" x="12" y="18" xlink:href="assets/img/perfil.png" />
    </g>
</svg>
```
