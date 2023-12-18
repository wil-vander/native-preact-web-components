import { useEffect, useState } from 'preact/hooks'

const initialState = ['button 1', 'button 2', 'button 3']

const useButtonList = () => {
  const [buttons, setButtons] = useState(initialState)

  useEffect(() => {
    console.log('useButtonList initialized')
  }, [])

  const onClick = (button) => {
    setButtons([...buttons, `${button} - copy`])

    // Trigger an event that can be picked up by the surrounding page.
    const event = new CustomEvent('button:click', { detail: button })
    document.dispatchEvent(event)
  }

  return {
    buttons,
    onClick,
  }
}

export default useButtonList
