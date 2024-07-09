"use server"

import { db } from "@/lib/db.connect"
import { revalidatePath } from "next/cache"

export async function deleteBoard(id: string){
    await db.board.delete({
        where: {
            id
        }
    })
    revalidatePath('/organization/org_2iodpyEc1oydB9hzpEiJC6ZGQAN')
}
