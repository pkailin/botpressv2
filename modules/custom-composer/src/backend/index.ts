import * as sdk from 'botpress/sdk'

// This is not required for the custom component, but it makes it easier to test this example
const botTemplates: sdk.BotTemplate[] = [
  {
    id: 'custom-composer-demo',
    name: 'Demo - Custom Composer',
    desc: 'This module shows how to implement custom composer on channel web'
  }
]

const entryPoint: sdk.ModuleEntryPoint = {
  botTemplates,
  definition: {
    name: 'custom-composer',
    menuText: 'Custom Composer',
    fullName: 'My Custom Composer',
    noInterface: true, // This prevents your module from being displayed in the menu, since we only add custom components here
    homepage: 'https://botpress.com'
  }
}

export default entryPoint
