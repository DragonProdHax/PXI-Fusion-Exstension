// Function to fetch and run script from external URL
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
  
  // Function to load fetchAndRun.js when conditions are met
  function loadFetchAndRunScript() {
    const scriptUrl = 'https://raw.githubusercontent.com/PXIFusionX/Fusion-Loader/main/Main/Menu';
    fetchAndRunScript(scriptUrl);
  }
  
  // Run the loadFetchAndRunScript function when the URL matches the specified pattern
  if (window.location.href.startsWith('https://math.prodigygame.com/') &&
      window.location.search.includes('launcher=true&code=')) {
    loadFetchAndRunScript();
  }
  