import { connectToDatabase } from "@/lib/mongodb";
import Note from "../../../models/Notes";

export async function GET(req) {
  await connectToDatabase();

  try {
    const notes = await Note.find({});
    return new Response(JSON.stringify(notes), {
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

export async function POST(req) {
  await connectToDatabase();

  try {
    const { title, content } = await req.json();
    const note = new Note({
      title,
      content,
    });
    await note.save();
    return new Response(JSON.stringify(note), {
      status: 201,
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

export async function DELETE(req) {
  await connectToDatabase();

  try {
    const { id } = await req.json();
    await Note.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: "Note deleted" }), {
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

export async function PUT(req) {
  await connectToDatabase();

  try {
    const { id, title, content } = await req.json();
    const note = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    const responseNote = {
      ...note.toObject(),
      message: "Note updated",
    }
    return new Response(JSON.stringify(responseNote), {
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
