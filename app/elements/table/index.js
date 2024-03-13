export const tagName = 'button'

export class Element extends HTMLTableElement {
  connectedCallback() {
    console.log('Connected')
  }
}
