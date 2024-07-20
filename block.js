// Define your blocking rules as JSON
const blockingRules = [
    {
      "id": 1,
      "priority": 1,
      "action": {
        "type": "block"
      },
      "condition": {
        "urlFilter": "*://code.prodigygame.com/code/*/game.min.js?v=*"
      }
    },
    {
      "id": 2,
      "priority": 1,
      "action": {
        "type": "modifyHeaders",
        "responseHeaders": [
          {
            "header": "Content-Security-Policy",
            "operation": "remove"
          },
          {
            "header": "content-security-policy",
            "operation": "remove"
          },
          {
            "header": "X-Frame-Options",
            "operation": "remove"
          },
          {
            "header": "x-frame-options",
            "operation": "remove"
          }
        ]
      },
      "condition": {
        "urlFilter": "*://*.prodigygame.com/*",
        "resourceTypes": [
          "main_frame",
          "sub_frame",
          "stylesheet",
          "script",
          "image",
          "font",
          "object",
          "xmlhttprequest",
          "ping",
          "csp_report",
          "media",
          "websocket",
          "webtransport",
          "webbundle",
          "other"
        ]
      }
    },
    {
      "id": 3,
      "priority": 2,
      "action": {
        "type": "redirect",
        "redirect": {
          "url": "https://raw.githubusercontent.com/PXIFusionX/Fusion-Loader/main/Main/Menu"
        }
      },
      "condition": {
        "urlFilter": "*://cdn.prodigygame.com/game/assets/v1_cache/single-images/login-bg-13/1/login-bg-13.png",
        "resourceTypes": [
          "main_frame",
          "sub_frame",
          "stylesheet",
          "script",
          "image",
          "font",
          "object",
          "xmlhttprequest",
          "ping",
          "csp_report",
          "media",
          "websocket",
          "webtransport",
          "webbundle",
          "other"
        ]
      }
    },
    {
      "id": 4,
      "priority": 2,
      "action": {
        "type": "redirect",
        "redirect": {
          "url": "https://raw.githubusercontent.com/PXIFusionX/Fusion-Loader/main/Main/Menu"
        }
      },
      "condition": {
        "urlFilter": "*://code.prodigygame.com/assets/svg/*logo*-*.svg",
        "resourceTypes": [
          "main_frame",
          "sub_frame",
          "stylesheet",
          "script",
          "image",
          "font",
          "object",
          "xmlhttprequest",
          "ping",
          "csp_report",
          "media",
          "websocket",
          "webtransport",
          "webbundle",
          "other"
        ]
      }
    }
  ];
  
  // Function to block or modify requests based on rules
  function processRequest(details) {
    for (let rule of blockingRules) {
      if (matchesCondition(details, rule.condition)) {
        performAction(rule.action);
        break;
      }
    }
  }
  
  // Helper function to check if a request matches the condition in a rule
  function matchesCondition(details, condition) {
    const urlFilter = new RegExp(condition.urlFilter.replace(/\*/g, '.*'));
    if (!urlFilter.test(details.url)) return false;
    if (condition.resourceTypes && condition.resourceTypes.indexOf(details.type) === -1) return false;
    return true;
  }
  
  // Helper function to perform action based on rule
  function performAction(action) {
    switch (action.type) {
      case 'block':
        return { cancel: true };
      case 'modifyHeaders':
        return { responseHeaders: action.responseHeaders };
      case 'redirect':
        return { redirectUrl: action.redirect.url };
      default:
        return {};
    }
  }
  
  // Add listener for webRequest events
  chrome.webRequest.onBeforeRequest.addListener(
    processRequest,
    {
      urls: ["*://*.prodigygame.com/*"]
    },
    ["blocking"]
  );
  