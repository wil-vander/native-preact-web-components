import { html } from 'htm/preact'
import useQuotes from './hook.js'
import List from './components/List.js'

const Container = () => {
  const { quotes, onClick } = useQuotes()
  return html`<${List} quotes=${quotes} onClick=${onClick} />`
}

export default Container
