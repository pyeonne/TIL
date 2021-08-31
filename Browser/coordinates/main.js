const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// window가 전부 load되면...
addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    // 마우스가 움직이면 따라가야 한다.
    // 브라우저 창 위에 있는 X와 Y좌표를 받아 와야 한다.
    // clientX와 Y 좌표를 이용해서 선언한 DOM 요소들의 위치를 바꿔 주면 된다.
    document.addEventListener('mousemove', event => {
        const x = event.clientX;
        const y = event.clientY;

        // px 유닛을 붙여야 하므로 백틱(`)키를 이용해 픽셀값을 전달해줬다.
        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
        tag.style.transform = `translate(${x}px, ${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    });
});

// 요소를 움직일 때는 top, right, bottom, left 속성을 이용하는 것보다는
// translate 속성을 이용해서 composite만 발생할 수 있도록 만드는 것이 더 효율적이다.

// 성능이 개선되었는지 확인하려면 Chrome 개발자 도구의 Performance 탭을 이용해야 한다.
// 사용자에게 1초당 60프레임을 계속해서 보여줘야 한다.
// 즉, 처음부터 무언가 이벤트를 처리하고 다시 브라우저에 표기될 때 16ms 안에 끝내야 된다.
// Layout Shift를 클릭하면 문제가 어디서 발생하는지 자세히 알 수 있다.
// command palette(control+shift+P)에서 Show layout shift regions를 클릭하면 어디서 레이아웃이 발생하는지 시각적으로 확인 가능하다.
