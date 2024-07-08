"use client"
import { useOrganizationList } from "@clerk/nextjs"
import { useEffect } from "react";
import { useParams } from "next/navigation"

const OrgControl = () => {
    const params = useParams()
    const {setActive} = useOrganizationList();

    useEffect(() => {
        if(!setActive) return;

        setActive({
            organization: params.organizationId as string
        })
        
    }, [setActive, params.organizationId]);
  return null;
}

export default OrgControl