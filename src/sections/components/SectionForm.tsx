import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import { LabeledTextarea } from "src/core/components/LabeledTextarea"
import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"

export function SectionForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="title" label="Title" placeholder="Title" />
      <LabeledTextarea name="content" label="Content" placeholder="Content" rows={20} />
    </Form>
  )
}
