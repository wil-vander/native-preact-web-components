import { html } from 'htm/preact'

const CSS = () => html`<style>
  :host {
    font-size: 16px;
    font-family: sans-serif;
    display: grid;
    gap: 0.5rem;
  }

  ul,
  li,
  button {
    all: unset;
  }

  ul {
    display: grid;
    gap: 1rem;
  }

  button {
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: #eee;
    cursor: pointer;
  }
</style>`

export default CSS
