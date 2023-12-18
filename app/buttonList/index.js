import { render } from 'preact'
import { html } from 'htm/preact'
import Style from './Style.js'
import Container from './Container.js'

export const tagName = 'button-list'

export class Element extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' })

    render(
      html`
        <${Style} />
        <${Container} />
      `,
      shadowRoot
    )
  }
}
