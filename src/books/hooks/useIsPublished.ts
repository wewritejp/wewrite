import { useMutation } from "@blitzjs/rpc"
import { Book } from "@prisma/client"
import updateBook from "../mutations/updateBook"
import { useState } from "react"
import { FORM_ERROR } from "src/core/components/Form"

export const useIsPublished = (book: Book)  => {
  const [updateBookMutation] = useMutation(updateBook)
  const [toggled, setToggled] = useState(book.isPublished)
  
  const updatePublishingStatus = async () => {
    try {
      await updateBookMutation({...book, isPublished: !toggled})
      setToggled(!toggled)
    } catch (error: any) {
      console.error(error)
      return {
        [FORM_ERROR]: error.toString(),
      }
    }
  }

  return { toggled, updatePublishingStatus }
}
