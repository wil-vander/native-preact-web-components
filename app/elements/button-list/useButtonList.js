import { useEffect, useState } from 'preact/hooks'

const initialState = ['button 1', 'button 2', 'button 3']

const useButtonList = () => {
  const [buttons, setButtons] = useState(initialState)

  useEffect(() => {
    console.log('useButtonList initialized')
  }, [])

  const onClick = (event, button) => {
    const rootNode = event.target.getRootNode()

    const customEvent = new CustomEvent('button:click', {
      bubbles: true,
      composed: true,
      detail: button,
    })

    rootNode.dispatchEvent(customEvent)

    setButtons([...buttons, `${button} - copy`])
  }

  return {
    buttons,
    onClick,
  }
}

export default useButtonList
