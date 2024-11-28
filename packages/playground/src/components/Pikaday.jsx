import React, { useEffect, useRef } from "react"
import Pikaday from "pikaday"

const PikadayComponent = ({ format, options, onInput }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    const picker = new Pikaday({
      field: inputRef.current,
      format: format,
      onSelect: () => {
        if (onInput) {
          onInput(picker.toString())
        }
      },
      ...options,
    })

    return () => {
      picker.destroy()
    }
  }, [format, options, onInput])

  return (
    <input
      className="input input-border"
      type="text"
      ref={inputRef}
      defaultValue="Pikaday from React"
    />
  )
}

export default PikadayComponent
