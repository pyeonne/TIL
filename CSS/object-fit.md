# object-fit

## 🔗 Resource:
### MDN
- [object-fit](https://developer.mozilla.org/ko/docs/Web/CSS/object-fit)
- [대체 요소](https://developer.mozilla.org/ko/docs/Web/CSS/Replaced_element)

## 📝 Summary:
1. object-fit 속성은 `<img>`나 `<video>` 요소와 같은 대체 요소의 콘텐츠 크기를 어떤 방식으로 조절해 요소에 맞출 것인지 설정한다.
> Q. 대체 요소란?<br>
대체 요소는 자신의 콘텐츠가 현재 문서 스타일의 영향을 받지 않는 요소라고 할 수 있다. CSS는 대체 요소의 위치에 영향을 줄 수 있지만 콘텐츠에는 미치지 못한다.

2. 값
- `contain`<br>대체 콘텐츠의 가로세로비를 유지하면서 요소의 콘텐츠 박스 내부에 들어가도록 크기를 맞춤 조절한다.
- `cover`<br>대체 콘텐츠의 가로세로비를 유지하면서 요소의 콘텐츠 박스 내부를 가득 채운다. 서로의 가로세로비가 일치하지 않으면 객체 일부가 잘려나간다.
- `fill`
- `none`
- `scale-down`