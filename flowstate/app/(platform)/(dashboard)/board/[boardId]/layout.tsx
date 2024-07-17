import { db } from '@/lib/db.connect'
import { auth } from '@clerk/nextjs/server'
import { notFound, redirect } from 'next/navigation'
import React from 'react'
import BoardNavbar from './_components/board-navbar'

const BoardIdLayout = async ({
    children,
    params
  } : {
    children: React.ReactNode,
    params: {boardId: string}
  }
) => {

    const {orgId} = auth()

    if(!orgId){
        redirect("/select-org")
    }

    const board = await db.board.findUnique({
        where: {
            id: params.boardId,
            orgId
        }
    })
    if(!board){
        notFound(); // redirect to not found page!
    }
    return (
      <div
          className='relative h-full min-h-screen bg-no-repeat bg-center bg-cover overflow-hidden'
          style={{ backgroundImage: `url(${board.imageFullUrl})` }}
      >
          <BoardNavbar data={board} />
          <div className='absolute inset-0 bg-black/10' />
          <main className='relative w-full h-full pt-28'>
              <div className='max-h-full overflow-y-auto'>
                  {children}
              </div>
          </main>
      </div>
  );
}

export default BoardIdLayout
