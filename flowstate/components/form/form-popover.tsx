"use client";

import React, { ElementRef, useRef } from "react";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";
import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";
import { FormPicker } from "./form-picker";
import { useRouter } from "next/navigation";

interface FormPopoverProps {
  children?: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset = 0,
}: FormPopoverProps) => {
    const closeRef = useRef<ElementRef<"button">>(null);
    const router = useRouter();


    const {execute, FieldErrors} = useAction(createBoard, {
        onSuccess: (data) => {
            toast.success("Board Created")
            closeRef.current?.click()
            console.log("closed")
            router.push(`/board/${data.id}`)
        },
        onError: (error) => {
            console.log({error})
            toast.error(error)
        }
    })

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string
        const image = formData.get('image') as string
        execute({title, image})
        
    }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>

      <PopoverContent
        align={align}
        className="w-80 pt-3 "
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create board
        </div>
        <PopoverClose asChild>
          <Button
            ref={closeRef}
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant={"ghost"}
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className="space-y-4">
            <div className="space-y-4">
                <FormPicker 
                    id="image"
                    errors={FieldErrors}
                />
                <FormInput 
                    id='title'
                    label="Board title"
                    type="text"
                    errors={FieldErrors}
                />
            </div>
            <FormSubmit
                
                className="w-full"
            >
                <button>
                    Create
                </button>

            </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
