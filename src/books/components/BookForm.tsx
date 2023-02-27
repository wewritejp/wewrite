import { Form, FormProps } from "src/core/components/Form";
import { LabeledTextField } from "src/core/components/LabeledTextField";
import { z } from "zod";
export { FORM_ERROR } from "src/core/components/Form";

export function BookForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="title" label="Title" placeholder="Title" className="w-full" />
      {/* <LabeledTextField name="title" label="Title" placeholder="Title" className="w-full" /> */}
      <LabeledTextField name="price" label="Price($100-$9,999)" placeholder="Price" className="w-full" type="number" />
      <LabeledTextField name="purpose" label="Purpose" placeholder="Purpose" className="w-full" />
      {/* <LabeledTextField name="title" label="Title" placeholder="Title" className="w-full" /> */}
      {/* <LabeledTextField name="title" label="Title" placeholder="Title" className="w-full" /> */}
    </Form>
  );
}
