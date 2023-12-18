import { useEffect, useState } from 'preact/hooks'

const initialState = ['button 1', 'button 2', 'button 3']

const useButtonList = () => {
  const [buttons, setButtons] = useState(initialState)

  useEffect(() => {
    console.log('useButtonList initialized')
  }, [])

  const onClick = (button) => {
    const event = new CustomEvent('button:click', { detail: button })
    document.dispatchEvent(event)
    setButtons([...buttons, button])
  }

  return {
    buttons,
    onClick,
  }
}

export default useButtonList
