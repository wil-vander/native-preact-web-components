import quotes from './quotes/element.js'

const prefix = 'wil'

customElements.define(`${prefix}-${quotes.tagName}`, quotes.Element)

document.addEventListener('quote:click', (event) => {
  console.log('quote:click', event.detail)
})
