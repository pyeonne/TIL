const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// 마우스가 움직이면 따라가야 한다.
// 브라우저 창 위에 있는 X와 Y좌표를 받아 와야 한다.
// clientX와 Y 좌표를 이용해서 선언한 DOM 요소들의 위치를 바꿔 주면 된다.
document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;

    // px 유닛을 붙여야 하므로 백틱(`)키를 이용해 픽셀값을 전달해줬다.
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px, ${y}px`;
});
