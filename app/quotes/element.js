import { render } from 'preact'
import { html } from 'htm/preact'
import CSS from './CSS.js'
import Container from './Container.js'

class Element extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' })

    render(
      html`
        <${CSS} />
        <${Container} />
      `,
      shadowRoot
    )
  }
}

export default {
  tagName: 'quotes',
  Element,
}
