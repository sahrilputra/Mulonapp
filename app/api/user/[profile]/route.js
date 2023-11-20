
import db from "../../../../lib/db";
import User from "../../../../models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const profile = params.profile;

    try {
        await db.connectDb();

        // Determine if the profile is an id or a username
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(profile);
        const query = isObjectId ? { _id: profile } : { username: profile };

        // Use findOne to find a user by ID or username
        const user = await User.findOne(query);

        await db.disconnectDb();

        // Check if the user was found
        if (!user) {
            return NextResponse.error(
                { message: "User not found" },
                { status: 404 }
            );
        }

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


export async function DELETE(request, { params }) {
    const profile = params.profile;

    try {
        await db.connectDb();

        // Determine if the profile is an id or a username
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(profile);
        const query = isObjectId ? { _id: profile } : { username: profile };

        // Use findOneAndDelete to find and delete a user by ID or username
        const deletedUser = await User.findOneAndDelete(query);

        await db.disconnectDb();

        // Check if the user was found and deleted
        if (!deletedUser) {
            return NextResponse.error(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return new NextResponse(JSON.stringify(deletedUser), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.error({ message: error.message }, { status: 500 });
    }
}

