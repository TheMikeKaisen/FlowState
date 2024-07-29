"use client"

import { useCardModal } from "@/hooks/use-card-modal";
import { Card } from "@prisma/client";

interface CardItemProps {
    data: Card;
    index: number;
}

export const CardItem = ({data, index}:CardItemProps) => {

    const cardModal = useCardModal();
    return (
        <div className="truncate border-2 border-transparent hover:border-gray-200 hover:transition py-2 px-3 text-sm bg-white rounded-md shadow-sm" role="button" onClick={() => cardModal.onOpen(data.id)}>
            {data.title}
        </div>
    )
}