import { html } from 'htm/preact'

const Style = () => html`<style>
  :host {
    font-size: 16px;
    font-family: sans-serif;
  }

  button {
    all: unset;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 600;
    color: #666;
    border: 1px solid #ddd;
    text-transform: capitalize;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 0 #ddd;
    will-change: scale;
  }

  button:hover {
    background-color: #ffe082;
    border-color: #ffd54f;
    box-shadow: 0 4px 0 #ffd54f;
    color: #bf360c;
    scale: 1.05;
  }

  button:active {
    box-shadow: 0 2px 0 #ffd54f;
    translate: 0 2px;
  }
</style>`

export default Style
