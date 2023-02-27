import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { Label, Textarea } from "flowbite-react"

export interface LabeledTextareaProps extends PropsWithoutRef<JSX.IntrinsicElements["textarea"]> {
  name: string
  label: string
  rows: number
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
}

export const LabeledTextarea = forwardRef<HTMLInputElement, LabeledTextareaProps>(
  ({ label, outerProps, labelProps, name, rows, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()

    return (
      <div {...outerProps}>
        <Label {...labelProps}>
          {label}
          <Textarea disabled={isSubmitting} rows={rows} {...register(name)} {...props} />
        </Label>

        <ErrorMessage
          render={({ message }) => (
            <div role="alert" style={{ color: "red" }}>
              {message}
            </div>
          )}
          errors={errors}
          name={name}
        />
      </div>
    )
  }
)

export default LabeledTextarea
