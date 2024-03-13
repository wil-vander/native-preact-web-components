import * as buttonList from './elements/button-list/index.js'
import * as button from './elements/button/index.js'
import * as table from './elements/table/index.js';

const prefix = 'wil'

customElements.define(`${prefix}-${buttonList.tagName}`, buttonList.Element)
customElements.define(`${prefix}-${button.tagName}`, button.Element)

customElements.define(`${prefix}-${table.tagName}`, table.Element, {
  extends: 'table'
})
