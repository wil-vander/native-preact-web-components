import { html } from 'htm/preact'

const Style = () => html`<style>
  :host {
    font-size: 16px;
    font-family: sans-serif;
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
    transition: opacity 0.5s ease-in-out;

    @starting-style {
      opacity: 0;
    }
  }
</style>`

export default Style
