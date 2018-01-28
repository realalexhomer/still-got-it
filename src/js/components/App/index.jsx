// @flow
import * as React from 'react'
import style from './style.css' // eslint-disable-line no-unused-vars

type AppProps = {
  children: React.Node
}

export default function App(props:AppProps) {
  const { children } = props

  return (
    <div>
      { children }
    </div>
  )
}
