import { useEffect, useState } from "react"

const useCalculateHeight = () => {
  // 画面の高さ - Navbarの高さ の値を割り出す
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [remainingHeight, setRemainingHeight] = useState(0)

  useEffect(() => {
    const navbarElement = document.querySelector("nav")
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight
      setRemainingHeight(windowHeight - navbarHeight)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [navbarHeight])

  return { remainingHeight }
}

export default useCalculateHeight
