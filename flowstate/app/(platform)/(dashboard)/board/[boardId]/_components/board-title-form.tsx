"use client"

import { updateBoard } from "@/actions/udpate-board";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button"
import { useAction } from "@/hooks/use-action";
import { Board } from "@prisma/client"
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";

interface BoardTitleFormProps {
    data: Board;
}
const BoardTitleForm = ({data}: BoardTitleFormProps) => {

    const {execute} = useAction(updateBoard, {
        onSuccess: (data) => {
            toast.success(`Board "${data.title}" updated!`)
            setTitle(data.title)
            disableEditing();
        },
        onError: (error) => {
            toast.error(error)
        }
    })

    // reference
    const formRef = useRef<ElementRef<"form">>(null)
    const inputRef = useRef<ElementRef<"input">>(null)


    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [title, setTitle] = useState(data.title);

    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            inputRef.current?.focus()
            inputRef.current?.select()
        },);
    }
    const disableEditing = () => {
        setIsEditing(false);
    }

    const onSubmit = (formData: FormData) => {
        
        const title = formData.get('title') as string
        execute({
            title, 
            id: data.id
        })

        console.log("submitted: ", title)

    }
    const onBlur = ()=> {
        formRef.current?.requestSubmit();
    }

    if(isEditing) {
        return (
            <form ref={formRef} action={onSubmit} className="flex items-center gap-x-2">
                <FormInput 
                    ref={inputRef}
                    id="title"
                    onBlur={onBlur}
                    defaultValue={title}
                    className="text-xl font-bold pb-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none"
                />
            </form>
        )
    }
  return (
    <Button
        onClick={enableEditing}
        variant={'transparent'}
        className="font-bold text-lg h-auto w-auto p-1 px-2 "
    >
        {title}
    </Button>
  )
}

export default BoardTitleForm

