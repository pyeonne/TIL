# HTML 문서에 SVG를 넣는 방법

## 🔗 Resource:

### Youtube

-   [SVG #2 HTML 문서에 SVG를 넣는 여러가지 방법들](https://www.youtube.com/watch?v=0U14rPBrs0Y)

## 📝 Summary:

## HTML 문서에 SVG를 넣는 방법

### 1. `<img>` 태그

```html
<img src="images/sudiomeal.svg" alt />
```

### 2. CSS Background

```css
.svg {
    width: 300px;
    height: 300px;
    background: url('images/studiomeal.svg') no-repeat 0 0;
}
```

### 3. SVG 요소들을 직접 inline으로 삽입

### 4. `<object>` 태그

```html
<object data="images/face.svg" type="image/svg+xml"></object>
```

-   `<img>` 태그로 삽입한 것과 다른 점은 `<object>` 태그 안에는 svg 코드들이 들어 있는 걸 볼 수 있다.
