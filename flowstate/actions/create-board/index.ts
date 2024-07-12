"use server";

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db.connect";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";
import { ElementRef, useRef } from "react";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "unauthorized",
    };
  }
  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
    image.split("|");

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageUserName ||
    !imageLinkHTML
  ) {
    return {
      error: "Missing fields. Failed to create board."
    }
    
  }

  console.log({imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName})

  let board;
  try {
    console.log("inside try catch")
    board = await db.board.create({
      data: {
      title,
      orgId,
      imageId,
      imageThumbUrl,
      imageFullUrl,
      imageUserName,
      imageLinkHTML
      },
    });
    console.log("data base created!")
  } catch (error) {
    console.log("error 321: ", error)
    return {
      error: "Failed to create.",
    };
  }
  revalidatePath(`/board/${board.id}`);
  return {
    data: board,
  };
};

export const createBoard = createSafeAction(CreateBoard, handler);
