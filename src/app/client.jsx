'use client'

import { useState } from "react"

export const dynamic = 'force-static'

export function Client() {
  const [counter, setCounter] = useState(0);
  console.log(typeof window === 'undefined' ? `On server ${counter}` : `Client side ${counter}`)

  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}