"use server";

import { createNote, deleteNote, getNoteById, getNotesByUserId, updateNote } from "@/db/queries/notes-queries";
import { InsertNote } from "@/db/schema/notes-schema";
import { revalidatePath } from "next/cache";

export async function createNoteAction(data: InsertNote) {
  const newNote = await createNote(data);
  revalidatePath("/");
  return newNote;
}

export async function getNoteByIdAction(id: string) {
  return getNoteById(id);
}

export async function getNotesByUserIdAction(userId: string) {
  return getNotesByUserId(userId);
}

export async function updateNoteAction(id: string, data: Partial<InsertNote>) {
  const updatedNote = await updateNote(id, data);
  revalidatePath("/");
  return updatedNote;
}

export async function deleteNoteAction(id: string) {
  await deleteNote(id);
  revalidatePath("/");
}