import { useEffect, useRef } from "react"
import { UpArrow } from "@/components/Icons"

const Anchor = () => {
  const anchorRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!anchorRef.current) return
      const anchor = anchorRef.current
      if (window.scrollY > 100) anchor.classList.remove("hidden")
      else anchor.classList.add("hidden")
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

export default Anchor
