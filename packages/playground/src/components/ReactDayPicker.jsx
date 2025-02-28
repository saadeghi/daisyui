import { useState } from "react"
import { DayPicker } from "react-day-picker"

export default function MyDatePicker() {
  const [selected, setSelected] = useState()

  return (
    <>
      <button
        popovertarget="rdp-popover"
        className="input input-border"
        style={{ anchorName: "--rdp" }}
      >
        {selected ? `Selected: ${selected.toLocaleDateString()}` : "react-day-picker"}
      </button>
      <div popover="auto" id="rdp-popover" className="dropdown" style={{ positionAnchor: "--rdp" }}>
        <DayPicker
          className="react-day-picker"
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
      </div>
    </>
  )
}
