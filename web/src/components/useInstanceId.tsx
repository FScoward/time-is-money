// ref: https://isoden.dev/blog/2019-04-16-use-instance-id/
import React from 'react'

let counter = 0

export const useInstanceId = (): number => {
  const ref = React.useRef<number | null>(null)

  if (ref.current === null) {
    ref.current = counter += 1
  }

  return ref.current
}