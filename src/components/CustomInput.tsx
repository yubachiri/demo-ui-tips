import { FC } from "react";
import { FormControl, FormLabel, forwardRef, Input, InputProps, Textarea, TextareaProps } from "@chakra-ui/react";
import AutosizeTextarea from "react-textarea-autosize"

export const CustomInput: FC<InputProps> = (props) => (
  <Input bg='#dedede' {...props} />
)

export const CustomInputWithLabel: FC<InputProps & { label: string }> = ({ label, ...props }) => (
  <FormControl>
    <FormLabel>{ label }</FormLabel>
    <CustomInput bg='#dedede' {...props} />
  </FormControl>
)

export const InputWithRef = forwardRef<InputProps, "input">((props, ref) => {
  return <Input {...props} ref={ref} />
})

export const CustomAutosizeTextarea = forwardRef<
  TextareaProps,
  "textarea"
  >((props, ref) => {
  return (
    <>
      <Textarea
        rows={5}
        as={AutosizeTextarea}
        minH="unset"
        overflow="hidden"
        minRows={1}
        maxRows={5}
        ref={ref}
        {...props}
      />
    </>
  )
})
