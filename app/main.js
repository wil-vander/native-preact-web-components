import { tagName, Element } from './buttonList/index.js'

const prefix = 'wil'

customElements.define(`${prefix}-${tagName}`, Element)

document.addEventListener('button:click', (event) => {
  console.log('button:click', event.detail)
})
