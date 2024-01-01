
import db from "../../../../lib/db";
import Admin from "../../../../models/admin";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic'
export async function GET(request, { params }) {
    const profile = params.profile;

    try {
        await db.connectDb();

        // Determine if the profile is an id or a username
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(profile);
        const query = isObjectId ? { _id: profile } : { username: profile };

        // Use findOne to find a user by ID or username
        const user = await Admin.findOne(query);


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
        const deletedUser = await Admin.findOneAndDelete(query);


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

export async function PUT(request, { param, body }) {
    const profile = params.profile;
    const data = JSON.parse(body);

    try {
        await db.connectDb();

        // Determine if the profile is an id or a username
        const isObjectId = /^[0-9a-fA-F]{24}$/.test(profile);
        const query = isObjectId ? { _id: profile } : { username: profile };

        // Use findOneAndUpdate to find and update a user by ID or username
        const updatedUser = await Admin.findOneAndUpdate(query, data, {
            new: true, // Return the modified document rather than the original
        });


        // Check if the user was found and updated
        if (!updatedUser) {
            return NextResponse.error(
                { message: "User not found" },
                { status: 404 }
            );
        }

        return new NextResponse(JSON.stringify(updatedUser), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.error({ message: error.message }, { status: 500 });
    }
}