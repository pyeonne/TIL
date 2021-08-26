// window.screen - 모니터 사이즈
// window.outer - 페이지를 넘어선 브라우저 전체의 사이즈
// window.inner - 스크롤바가 포함된 브라우저 페이지의 사이즈
// documentElement.clientWidth - 스크롤바를 제외한 순수 document 페이지의 사이즈

const tag = document.querySelector('.tag');
function updateTag() {
    tag.innerHTML = `
        window.screen: ${window.screen.width}, ${window.screen.height} <br/>
        window.outer: ${window.outerWidth}, ${window.outerHeight} <br/>
        window.inner: ${window.innerWidth}, ${window.innerHeight} <br/>
        documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight} 
    `;
}
window.addEventListener('resize', () => {
    updateTag(); // 2. resize되면 함수 호출
});
updateTag(); // 1. 웹페이지가 실행되면 함수 호출
