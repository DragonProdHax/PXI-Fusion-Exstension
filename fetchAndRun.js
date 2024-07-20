chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url.startsWith("https://math.prodigygame.com/?launcher=true&code=")) {
      var codeUrl = details.url.replace("https://math.prodigygame.com/?launcher=true&code=", "");
      fetch(codeUrl)
        .then(response => response.text())
        .then(code => {
          // Evaluate fetched code in the context of the page
          chrome.tabs.executeScript({
            code: code
          });
        })
        .catch(error => console.error('Error fetching code:', error));
    }
  });
  