"use client"

import { createBoard } from "@/actions/create-board/index"
import { useAction } from "@/hooks/use-action"
import { FormInput } from "@/components/form/form-input"
import { FormSubmit } from "@/components/form/form-submit"


interface ErrorProps {
    errors?: {
        title: string[]
    }
}

export const Form = ({errors}: ErrorProps) => {
    const {execute, FieldErrors} = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data, "Success!!")
        }, 
        onError: (error) => {
            console.log(error)
        }
    })
    const onSubmit = (formData: FormData) => {
        const title = formData.get('title') as string;
        execute({title})
    }
    return (
        <form action={onSubmit}>
            <div className="flex flex-col space-y-2">

                <FormInput 
                        id="title"
                        errors = {FieldErrors}
                        label="Board Label"
                />
            </div>

           <FormSubmit>
            Save
           </FormSubmit>
            


        
        </form>
    )
}


