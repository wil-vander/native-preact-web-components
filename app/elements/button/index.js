import { render } from 'preact'
import { html } from 'htm/preact'
import Style from './Style.js'
import Button from '../../components/Button.js'

export const tagName = 'button'

export class Element extends HTMLElement {
  onClick = (event, children) => {
    event.stopImmediatePropagation()

    this.dispatchEvent(
      new CustomEvent('click', { bubbles: true, composed: true })
    )
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' })

    render(
      html`
        <${Style} />
        <${Button} onClick=${this.onClick} />
      `,
      shadowRoot
    )

    this.transferChildren(shadowRoot)
  }

  /**
   * Transfers the children of the custom element to the shadow root.
   */
  transferChildren(shadowRoot) {
    const element = shadowRoot.querySelector('button')
    element.appendChild(...this.children)
  }
}
