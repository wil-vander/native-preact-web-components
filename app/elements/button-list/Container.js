import { html } from 'htm/preact'
import useButtonList from './useButtonList.js'
import List from '../../components/List.js'

const Container = () => html` <${List} ...${useButtonList()} /> `

export default Container
