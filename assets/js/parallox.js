let text = document.getElementById('text');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');

window.addEventListener('scroll', () => {
   let value = window.scrollY;

    // 獲取每個元素相對滾動距離
    const startOffset = document.getElementById('container').offsetTop; // 父容器起點
    if (value >= startOffset) {
        let relativeValue = value - startOffset; // 相對滾動距離

        // 更新樣式
        text.style.marginTop = relativeValue * 2.5 + 'px';
        cloud1.style.left = relativeValue * -2.5 + 'px';
        cloud2.style.right = relativeValue * -2.5 + 'px';
    }

});