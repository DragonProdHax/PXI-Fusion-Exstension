chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
      var headers = details.responseHeaders;
      for (var i = 0; i < headers.length; i++) {
        if (headers[i].name.toLowerCase() === 'content-security-policy' || headers[i].name.toLowerCase() === 'x-frame-options') {
          headers.splice(i, 1);
          i--;
        }
      }
      return { responseHeaders: headers };
    },
    {
      urls: ["*://*.prodigygame.com/*"]
    },
    ["blocking", "responseHeaders"]
  );
  