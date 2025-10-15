import React from 'react'

function TabButton({children,onSelect}) {
  return (
    <div>
      <button onClick={onSelect}>{children}</button>
    </div>
  )
}

export default TabButton
