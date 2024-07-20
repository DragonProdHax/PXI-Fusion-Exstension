function fetchAndRunScript(url) {
    fetch(url)
      .then(response => response.text())
      .then(scriptText => {
        // Create a <script> element and execute the fetched script
        const scriptElement = document.createElement('script');
        scriptElement.textContent = scriptText;
        document.head.appendChild(scriptElement);
      })
      .catch(error => console.error('Error fetching script:', error));
  }
  
  // Replace with your actual script URL
  const scriptUrl = 'https://raw.githubusercontent.com/PXIFusionX/Fusion-Loader/main/Main/Menu';
  
  fetchAndRunScript(scriptUrl);
  