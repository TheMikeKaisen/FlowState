import { db } from "@/lib/db.connect";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ListContainer from "./_components/list-container";
import { List } from "@prisma/client";

interface BoardIdPageProps {
  params: {
    boardId: string;
  }
}

const BoardIdPage = async({params}: BoardIdPageProps) => {
  const {orgId} = auth();
  if(!orgId){
    redirect('/select-org')
  }
  const lists = await db.list.findMany({
    where: {
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });
  return (
    <div className="p-4 min-h-screen overflow-y-auto">
      <ListContainer 
        boardId={params.boardId}
        data={lists}
      />
      
    </div>
  )
}

export default BoardIdPage
