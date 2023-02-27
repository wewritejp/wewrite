import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { TextInput } from "flowbite-react"

export interface LabeledTextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
  isNumber?: boolean
}

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, outerProps, labelProps, name, isNumber = false, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()

    return (
      <div {...outerProps}>
        <label {...labelProps}>
          {label}
          <TextInput
            disabled={isSubmitting}
            {...register(name, { valueAsNumber: isNumber })}
            {...props}
          />
        </label>

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

export default LabeledTextField
