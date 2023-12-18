import { SearchInput } from './components/search-input/search-input.js'

customElements.define('wil-search', SearchInput)

const searchInput = document.querySelector('#search-input')

searchInput.addEventListener('search', (event) => {
  console.log('search triggered', event.detail)
})
