"use client"

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

interface FormSubmitProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
}

export const FormSubmit = ({
    children, 
    disabled, 
    className, 
    variant='primary'
}: FormSubmitProps) => {
    const {pending} = useFormStatus();
    return (
        <Button
            children={children} 
            disabled={pending || disabled}
            type="submit"
            variant={variant}
            size={'sm'}
            className={className}
        >

        </Button>
    )
}