[
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
          "url": "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/.github/ppnp.png"
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
          "url": "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/.github/ProdigyLoaderPNP.png"
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
  ]
  