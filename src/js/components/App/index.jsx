// @flow
import * as React from 'react'
import style from './style.css'

type AppProps = {
  children: React.Node
}

export default function App(props:AppProps) {
  const { children } = props

  return (
    <div className={style.app}>
      { children }
    </div>
  )
}
