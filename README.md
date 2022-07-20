## Steps to test speech-to-text feature 
1. Open chrome by typing "chrome.exe --user-data-dir="C:\Chrome dev session" --disable-web-security" on cmd after changing directory to where chrome.exe can be found (eg: "C:\Program Files\Google\Chrome\Application"). This is to prevent API calls from returning "XMLHttpRequest blocked by CORS Policy". 
2. Open modules/channel-web/assets/examples/embedded-webchat.html on chrome and subsequently "http://localhost:3000/assets/modules/channel-web/examples/embedded-webchat.html?botId=flight-booking" with the botId changed accordingly. 
3. Press config 1 to enable voice composer and test out speech-to-text feature 

## Steps to test custom component 
The custom component creates a new interface for the composer and overwrites the existing composer 
1. In modules/channel-web/assets/examples/embedded-webchat.html, uncomment line 68 to 90 and comment out line 91 to 93. 
2. In 