import { html } from 'htm/preact'
import Button from './Button.js'

const List = ({ quotes, onClick }) => html`
  <ul>
    ${quotes.map(
      (quote) => html`
        <li><${Button} onClick=${() => onClick(quote)}>${quote}<//></li>
      `
    )}
  </ul>
`

export default List
