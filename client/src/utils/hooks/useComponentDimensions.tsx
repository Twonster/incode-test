import { RefObject, useEffect, useState } from 'react'

export default function useComponentDimensions(ref: RefObject<HTMLDivElement>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const { current } = ref

    setDimensions({
      width: ref.current?.offsetWidth || 0,
      height: ref.current?.offsetHeight || 0
    })

    if (current) {
      const getDimensions = (): { width: number, height: number } => ({
        width: Math.round(current.offsetWidth),
        height: Math.round(current.offsetHeight)
      })

      const resize = () => {
        setDimensions(getDimensions())
      }

      window.addEventListener('resize', resize)

      return () => window.removeEventListener('resize', resize)
    }
  }, [ref])

  return dimensions
}
