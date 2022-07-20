## Steps to test speech-to-text feature 
1. cd to speechAPI.py and run "python speechAPI.py" on cmd 
2. Open chrome by typing "chrome.exe --user-data-dir="C:\Chrome dev session" --disable-web-security" on cmd after changing directory to where chrome.exe can be found (eg: "C:\Program Files\Google\Chrome\Application"). This is to prevent API calls from returning "XMLHttpRequest blocked by CORS Policy". 
3. Open modules/channel-web/assets/examples/embedded-webchat.html on chrome and subsequently "http://localhost:3000/assets/modules/channel-web/examples/embedded-webchat.html?botId=flight-booking" with the botId changed accordingly. 
4. Press config 1 to enable voice composer and test out speech-to-text feature 

## Steps to test custom component 
The custom component creates a new interface for the composer and overwrites the existing composer 
1. In modules/channel-web/assets/examples/embedded-webchat.html, uncomment line 68 to 90 and comment out line 91 to 93. 
2. In packages/bp/dist/data/global/bot.config.json, add in:
"modules": [
  ...
  {
    "location": "MODULES_ROOT/custom-component",
    "enabled": true
  }
]

## Compiling botpress after any changes 
1. yarn cache clean (proceed to the next step if this command fails)
2. yarn
3. yarn build
4. yarn start
if any code changes made to any modules, cd to module itself and do yarn && yarn build, then cd back to botpress-master and yarn start. 

## Files that changed 
1. modules/channel-web/assets/examples/embedded-webchat.html
2. packages/bp/dist/data/global/bot.config.json
3. modules/channel-web/src/views/lite/components/Composer.tsx 
4. added modules/custom-component folder 