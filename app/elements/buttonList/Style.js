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
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: #eee;
    cursor: pointer;
    transition: all 0.2s ease, opacity 0.5s ease-in-out;
    font-weight: 600;
    color: #666;
    border: 1px solid #ddd;
    text-transform: capitalize;
    letter-spacing: 0.05em;

    @starting-style {
      opacity: 0;
    }
  }

  button:hover {
    background-color: #ccc;
    border-color: #bbb;
    color: #333;
  }
</style>`

export default Style
