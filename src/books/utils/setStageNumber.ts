export const setStageNumber = (book, chapter, section) => {
  const chapterIndex = book.chapters.findIndex((e) => e.id == chapter.id)
  const sectionIndex = chapter.sections.findIndex((e) => e.id == section.id)

  // ex). 1-3
  const stage = `${chapterIndex + 1}-${sectionIndex + 1}` 

  return stage
}
