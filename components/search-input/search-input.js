const css = './components/search-input/search-input.css'

export class SearchInput extends HTMLElement {
  static observedAttributes = ['value']

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' })
    shadow.innerHTML = this.render()
    shadow.querySelector('input').addEventListener('input', this)
  }

  disconnectedCallback() {
    const element = this.shadowRoot.querySelector('input')
    element.removeEventListener('input', this)
  }

  handleEvent({ type, target }) {
    if (type !== 'input') return
    const options = { detail: target.value }
    const customEvent = new CustomEvent('search', options)
    this.dispatchEvent(customEvent)
  }

  render() {
    return `
      <link rel="stylesheet" href="${css}" />
      <input type="search" />
    `
  }
}
