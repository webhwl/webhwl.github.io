document.title = document.getElementsByTagName('h1').length < 1
    ? '黄伟林_3年PHP开发_简历'
    : document.getElementsByTagName('h1')[0].innerText.replace(/[\s!"#\$%&'()*+,-.\/:;<=>?@\[\\\]\^`{|}~]+/g, '_');
