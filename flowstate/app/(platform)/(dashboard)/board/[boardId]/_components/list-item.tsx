import { ListWithCards } from "@/types";
import { List } from "@prisma/client";
import ListHeader from "./list-header";


interface ListItemProps {
    index: number;
    data: ListWithCards
}
const ListItem = ({index, data}: ListItemProps) => {
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-white shadow-md pb-2 ">
        <ListHeader data={data}/>

      </div>
    </li>
  )
}

export default ListItem
