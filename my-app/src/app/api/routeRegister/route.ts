import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/src/database/mongoose";
import User from "@/src/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const userExists = await User.findOne({ email });

    if (userExists) {
      return NextResponse.json(
        { message: "El usuario ya existe" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "created user",
      user,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "server error" },
      { status: 500 }
    );
  }
}