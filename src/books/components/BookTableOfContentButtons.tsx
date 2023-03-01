import { Routes } from "@blitzjs/next"
import { Button } from "flowbite-react"
import Link from "next/link"
import { MdDelete } from "react-icons/md"
import { useMutation } from "@blitzjs/rpc"
import deleteChapter from "src/chapters/mutations/deleteChapter"
import { useRouter } from "next/router"
import { BsPencil } from "react-icons/bs"
import { HiPlus } from "react-icons/hi"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"
import { AiOutlineEye } from "react-icons/ai"

// Chater Buttons
// ===========================================================
export const AddChapterButton = ({ book }) => {
  return (
    <Link href={Routes.NewChapterPage({ bookId: book.id })}>
      <Button color={"success"}>Add Chapter</Button>
    </Link>
  )
}

export const EditChapterButton = ({ book, chapter }) => {
  return (
    <Link href={Routes.EditChapterPage({ bookId: book.id, chapterId: chapter.id })}>
      <Button color="success" size={"xs"}>
        <BsPencil className="h-4 w-4" />
      </Button>
    </Link>
  )
}

export const DeleteChapterButton = ({ book, chapter }) => {
  const router = useRouter()
  const [deleteChapterMutation] = useMutation(deleteChapter)
  const handleDeleteChapter = async () => {
    if (confirm("Delete Chapter?")) {
      await deleteChapterMutation({ id: chapter.id })
      await router.push(Routes.ShowBookPage({ bookId: book.id }))
    }
  }

  return (
    <Button color="failure" size={"xs"} onClick={handleDeleteChapter}>
      <MdDelete className="h-4 w-4" />
    </Button>
  )
}

// Section Buttons
// ===========================================================
export const VisitSectionButton = ({ book, chapter, section }) => {
  return (
    <Link
      href={Routes.ShowSectionPage({
        bookId: book.id,
        chapterId: chapter.id,
        sectionId: section.id,
      })}
    >
      <Button size={"xs"} outline>
        <AiOutlineEye />
      </Button>
    </Link>
  )
}

export const AddNewSectionButton = ({ book, chapter }) => {
  return (
    <Link href={Routes.NewSectionPage({ bookId: book.id, chapterId: chapter.id })}>
      <Button size={"xs"}>
        <HiPlus className="h-4 w-4" />
      </Button>
    </Link>
  )
}

export const EditSectionButton = ({ book, chapter, section }) => {
  return (
    <Link
      href={Routes.EditSectionPage({
        bookId: book.id,
        chapterId: chapter.id,
        sectionId: section.id,
      })}
    >
      <Button size={"xs"} color={"success"} outline>
        <HiOutlinePencilAlt />
      </Button>
    </Link>
  )
}

export const DeleteSectionButton = ({ book, chapter, section }) => {
  return (
    <Button size={"xs"} color={"failure"} outline>
      <IoMdClose />
    </Button>
  )
}
