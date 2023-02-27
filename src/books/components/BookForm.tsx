import { Form, FormProps } from "src/core/components/Form"
import { LabeledTextField } from "src/core/components/LabeledTextField"
import { LabeledTextarea } from "src/core/components/LabeledTextarea"
import { z } from "zod"
export { FORM_ERROR } from "src/core/components/Form"

export function BookForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="title" label="Title" placeholder="Title" className="w-full" />
      <LabeledTextarea name="body" label="Body" placeholder="Body" className="w-full" rows={10} />
      <LabeledTextField
        name="price"
        label="Price($100-$9,999)"
        placeholder="Price"
        className="w-full"
        type="number"
        defaultValue={100}
        step={1}
        isNumber
      />
      <LabeledTextField name="purpose" label="Purpose" placeholder="Purpose" className="w-full" />
      <LabeledTextarea
        name="content"
        label="Content"
        placeholder="Content"
        className="w-full"
        rows={10}
      />
      <LabeledTextarea
        name="note"
        label="Note"
        placeholder="Note"
        className="w-full"
        rows={5}
      />
    </Form>
  )
}
