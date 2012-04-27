chrome.cookies.set({
    url: 'https://picasaweb.google.com',
    name: 'noRedirect',
    value: '1',
    domain: 'picasaweb.google.com',
    path: '/',
    secure: true,
    httpOnly: true,
    storeId: "0"});
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      var a = document.createElement('a');
      a.href = details.url;
      a.protocol = 'https:';
      return {redirectUrl: a.href};
    }, {urls: ['http://picasaweb.google.com/*'], types: ['main_frame']},
    ['blocking']);
