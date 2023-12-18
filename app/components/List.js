import { html } from 'htm/preact'
import Button from './Button.js'

const List = ({ buttons, onClick }) => html`
  <ul>
    ${buttons.map(
      (button) => html`
        <li>
          <${Button} onClick=${(event) => onClick(event, button)}>${button}<//>
        </li>
      `
    )}
  </ul>
`

export default List
