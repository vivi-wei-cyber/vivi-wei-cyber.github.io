document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".column img");
  
    images.forEach((image) => {
      image.addEventListener("mouseover", function () {
        // 鼠标经过时，图片放大一倍
        image.style.transform = "scale(1.3)";
      });
  
      image.addEventListener("mouseout", function () {
        // 鼠标离开时，图片恢复原来大小
        image.style.transform = "scale(1)";
      });
    });
  });
  function navigate(page) {
    switch (page) {
      case 'about.html':
        window.location.href = 'Fourth Page.html';
        break;
      case 'home.html':
        window.location.href = 'First Page.html';
        break;
      case 'contact.html':
        window.open('https://www.zhangliangray.com/Contact', '_blank');
        break;
      // 其他页面的处理
      default:
        break;
    }
  }
  