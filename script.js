// 스크롤 시 영수증 도장 찍히는 효과
window.addEventListener('scroll', () => {
    const stamp = document.getElementById('stamp');
    const scrollPos = window.scrollY + window.innerHeight;
    const stampPos = stamp.offsetTop + 500; // 영수증 위치쯤 오면 실행

    if (scrollPos > stampPos) {
        stamp.classList.add('active');
    }
});