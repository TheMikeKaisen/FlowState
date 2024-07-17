"use client"

import { ListWithCards } from "@/types";
import ListForm from "./list-form";
import { useEffect, useState } from "react";
import ListItem from "./list-item";

interface ListContainerProps {
    boardId: string;
    data: ListWithCards[]
}

const ListContainer = ({ boardId, data }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data)

  useEffect(() => {
    setOrderedData(data)
  }, [data])

  return (
    <div className="flex flex-wrap justify-center gap-3 h-full overflow-y-auto">
      {orderedData.map((list, index) => (
        <div key={list.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <ListItem 
            index={index}
            data={list}
          />
        </div>
      ))}
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <ListForm />
      </div>
    </div>
  )
}

export default ListContainer
