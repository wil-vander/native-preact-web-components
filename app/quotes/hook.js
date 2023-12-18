import { useEffect, useState } from 'preact/hooks'

const initialState = ['quote 1', 'quote 2', 'quote 3']

const useQuotes = () => {
  const [quotes, setQuotes] = useState(initialState)

  useEffect(() => {
    console.log('useQuotes initialized')
  }, [])

  const onClick = (quote) => {
    const event = new CustomEvent('quote:click', { detail: quote })
    document.dispatchEvent(event)
    setQuotes([...quotes, quote])
  }

  return {
    quotes,
    onClick,
  }
}

export default useQuotes
