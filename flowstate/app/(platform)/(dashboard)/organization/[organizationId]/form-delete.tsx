"use client"
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const FormDelete = () => {
    const {pending} = useFormStatus();
  return (
    <div>
      <Button disabled={pending} variant={"destructive"} size={"sm"}>
        Delete
      </Button>
    </div>
  );
};

export default FormDelete;
