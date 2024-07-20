document.addEventListener('DOMContentLoaded', function() {
    var goToProdigyButton = document.getElementById('goToProdigy');
    goToProdigyButton.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://sso.prodigygame.com/premises' });
    });
  });
  