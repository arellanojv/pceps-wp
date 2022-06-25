import React, { useEffect } from 'react'

function Container(props) {
  return (
    <div className={'min-h-screen ' + (props.wide ? 'flex' : '')}>
      {props.children}
    </div>
  )
}

export default Container
