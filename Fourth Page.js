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
  

  