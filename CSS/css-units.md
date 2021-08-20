# CSS 단위: Absolute VS Relative

## 🔗 Resource:
### Youtube
- [프론트엔드 필수 반응형 CSS 단위 총정리 (EM과 REM)](https://www.youtube.com/watch?v=7Z3t1OWOpHo)

### MDN
- [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

### Tool
- [PXtoEM](http://pxtoem.com/)


## 📝 Summary:
### CSS의 절대적인 유닛(px)
- Absolute lenth units
- px이 가장 많이 쓰인다. 
- 모니터 안에서 나타낼 수 있는 가장 작은 단위다.
- container의 크기가 변경되어도 content의 크기는 고정된 값으로 그대로 유지된다.
- 사용자가 브라우저의 폰트 크기를 변경해도 전혀 영향을 미치지 않는다.
>대부분은 고정된 px보다는 %를 이용해서 '부모의 몇 %를 크기로 가진다' 는 방식으로 사용하고 있다. %를 사용하면 content의 크기는 유동적으로 변한다.

### CSS의 상대적인 유닛(em, rem, vw, vh, %)
1. em
- relative to parent element
- typography에서 현재 지정된 point 크기를 나타내는 단위다. 즉, 현재 폰트 크기를 나타내는 단위다.
- font-size가 같아도 font-family에 따라서 사용자에게 보여지는 텍스트의 크기는 달라질 수 있다.
- em은 선택된 폰트에 전혀 상관없이 항상 고정된 폰트 크기를 가지고 있다.
- 1em == 16px
- 자식 요소의 폰트 크기는 부모 요소의 폰트 크기에 상대적으로 계산된다.
- em은 부모 요소의 폰트 크기를 곱한 값으로 계산된다.

```html
<div class="parent">
    Parent
    <div class="child">Child</div>
</div>
```

```css
/* 브라우저의 기본 폰트 크기 16px */
.parent {
    font-size: 8em; /* 16px * 8 = 128px */
}

.child {
    font-size: 0.5em; /* 128px * 0.5 = 64px */
}
```
> 8em은 800%, 0.5em은 50%와 동일하다.

2. rem
- relative to root element
- rem은 root에 지정된 폰트 크기에 따라 크기가 지정된다.
```css
/* 브라우저의 기본 폰트 크기 16px */
.parent {
    font-size: 8em; /* 16px * 8 = 128px */
}

.child {
    font-size: 0.5em; /* 16px * 0.5 = 8px */
}
```
> html {font-size=100%}는 브라우저에서 지정된 폰트 크기를 따라간다는 말이다. em과 rem을 사용하면 사용자가 브라우저의 폰트 크기를 변경해도 텍스트의 크기는 유동적으로 변한다.

3. v*
- viewport related
- vw는 부모 요소와 상관없이 브라우저의 넓이에 따라 변한다.
- vh는 부모 요소와 상관없이 브라우저의 높이에 따라 변한다.
- vmin는 브라우저의 높이와 넓이 중 작은 값을 사용한다.
- vmax는 브라우저의 높이와 넓이 중 큰 값을 사용한다.

4. %
- parent related
```css
/* 브라우저의 기본 폰트 크기 16px */
.parent {
    font-size: 8em; /* 800% */
}

.child {
    font-size: 0.5em; /* 50% */
}
```

### 차이점
1. 부모 요소의 크기에 따라서 크기가 변경되어 한다면 %, em을 사용하고, 브라우저의 크기에 따라서 크기가 변경되어야 한다면 v*, rem을 사용해야 한다. 
2. 요소의 너비와 높이에 따라서 크기가 변경되어야 한다면 %, v*를 사용하고, 폰트 크기에 따라 크기가 변경되어야 한다면, em, rem을 사용해야 한다.
3. 페이지 어디에서든 component의 크기가 일정해야 한다면 rem을 사용하고, component의 크기가 부모 요소에 따라서 유동적으로 변경되어야 한다면 em을 사용해야 한다.

### 결론
- box 자체의 크기를 결정할 때는 %, v*, flex box를 이용해서 조금 더 유동적으로 만드는 것이 좋다.
- 요소의 폰트 크기를 결정할 때는 root에 따라 변경되야 한다면 rem을 사용하고, 부모 요소에 따라서 변경되어야 한다면 em을 사용하는 것이 좋다.