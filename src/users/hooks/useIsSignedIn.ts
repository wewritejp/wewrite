import { useSession } from "@blitzjs/auth"
import { useEffect, useState } from "react"

export const useIsSignedIn = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const session = useSession({ suspense: false })

  useEffect(() => {
    setIsSignedIn(!!session.userId)
  }, [session])

  return isSignedIn
}

