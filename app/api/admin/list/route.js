import db from "../../../../lib/db";
import Admin from "../../../../models/admin";
import { NextResponse } from "next/server"

export async function GET(request) {

    try {
        await db.connectDb();
        const user = await Admin.find();

        return new NextResponse(JSON.stringify(user), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });

    } catch (error) {
        console.error(error);
        return NextResponse.error({ message: error.message }, { status: 500 });
    }

}