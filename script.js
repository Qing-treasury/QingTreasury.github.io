const container = document.getElementById('image-container');
let imagesLoaded = 0;
const totalImages = 20; // 替换为实际的图片总数

function loadImage() {
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';
    const image = document.createElement('img');
    image.className = 'image';
    
    // 替换为实际的图片文件名和路径
    // const imageUrl = `https://gitee.com/Qing-boy/QingTreasury.github.io/tree/main/Waterfall/images/1.png`; // ext是图片的文件扩展名
    //const imageUrl = `https://gitee.com/Qing-boy/QingTreasury.github.io/tree/main/Waterfall/images/1.png`;
    const imageUrl = `https://gitee.com/Qing-boy/QingTreasury.github.io/tree/main/Waterfall/images/${imagesLoaded + 1}.png`; 

    // 创建支持多种图片格式的正则表达式
    const imageFormats = /\.(jpeg|jpg|gif|png|webp|bmp|svg|tiff)$/i;

    if (imageUrl.match(imageFormats)) {
        image.src = imageUrl;
        image.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                // 所有图片都已加载
                // 在此处实现瀑布流布局等功能
            }
        };
        imageItem.appendChild(image);
        container.appendChild(imageItem);
    } else {
        console.error('不支持的图片格式: ' + imageUrl);
    }
}

// 加载初始图片
for (let i = 0; i < 5; i++) {
    loadImage();
}

// 在用户滚动时实现懒加载更多图片
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        // 当用户接近页面底部时加载更多图片
        for (let i = 0; i < 5; i++) {
            if (imagesLoaded < totalImages) {
                loadImage();
            }
        }
    }
});
