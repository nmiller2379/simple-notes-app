import { connectToDatabase } from "@/lib/mongodb";
import Note from "../../../../models/Notes";

export async function GET(req, { params }) {
  await connectToDatabase();

  const { id } = params;
  console.log(params);

  try {
    const note = await Note.findById(id);
    if (!note) {
      return new Response(JSON.stringify({ message: "Note not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return new Response(JSON.stringify(note), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
