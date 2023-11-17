import db from "../../../../lib/db";
import User from "../../../../models/user";
import { NextResponse } from "next/server"

export async function GET(request) {

    try {
        await db.connectDb();

        const user = await User.find();

        await db.disconnectDb();

        return new NextResponse(JSON.stringify(user), {
            headers: {
                "Content-Type": "application/json",
            },
        });

    } catch (error) {
        console.error(error);
        return NextResponse.error({ message: error.message }, { status: 500 });
    }

}