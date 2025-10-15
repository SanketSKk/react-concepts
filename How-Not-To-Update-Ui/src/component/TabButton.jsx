import React from 'react'

function TabButton({children,onSelect}) {
  console.log("tab ....")
  return (
    <div>
      <button onClick={onSelect}>{children}</button>
    </div>
  )
}

export default TabButton
