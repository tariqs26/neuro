import { useEffect, useRef } from "react"
import { UpArrow } from "@/components/Icons"

export const Anchor = () => {
  const anchorRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      anchorRef.current?.classList.toggle("hidden", window.scrollY <= 100)
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <a ref={anchorRef} className="results-anchor hidden" href="#top">
      <UpArrow />
    </a>
  )
}
