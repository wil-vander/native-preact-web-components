import { html } from 'htm/preact'

const Button = ({ onClick, children }) => html`
  <button type="button" onClick=${onClick}>${children}</button>
`

export default Button
