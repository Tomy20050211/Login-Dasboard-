import { connectDB } from "@/src/database/mongoose";
import User from "@/src/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    try {
        await connectDB()

        const { email, password } = await req.json()


        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json(
                { message: "user not found" },
                { status: 404 }
            )
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return NextResponse.json(
                { message: "No autenticado" },
                { status: 401 }
            );
        }
        return NextResponse.json({
            message: "exit login",
            user
        })
    } catch (error) {
        console.log(error)

        return NextResponse.json(
            { message: "server error" },
            { status: 500 }
        )
    }
}