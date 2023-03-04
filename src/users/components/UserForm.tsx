import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import LabeledTextarea from "src/core/components/LabeledTextarea"
import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"

export function UserForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="name" label="Name" placeholder="Name" />
      <LabeledTextField name="imageUrl" label="Image URL" placeholder="Image URL" />
      <LabeledTextarea name="introduction" label="Introduction" placeholder="Introduction" rows={20} />
    </Form>
  )
}
