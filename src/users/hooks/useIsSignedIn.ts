import { useSession } from "@blitzjs/auth"
import { useEffect, useState } from "react"

export const useIsSignedIn = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const session = useSession({ suspense: false })

  useEffect(() => {
    if (!!session.userId !== isSignedIn) {
      setIsSignedIn(!!session.userId)
    }
  }, [session.userId, isSignedIn])
  
  return isSignedIn
}
