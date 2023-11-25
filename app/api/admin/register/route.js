import db from "../../../../lib/db";
import Admin from "../../../../models/admin";
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        await db.connectDb();

        if (request.method !== 'POST') {
            return NextResponse.error('Method Not Allowed', { status: 405 });
        }

        const { username, firstName, lastName, email, team, password } = await request.json();

        console.log(username, firstName, lastName, email, team, password);


        if (!username || !email || !password) {
            return NextResponse.error({ message: "Lengkapi Formulir" }, { status: 400 });
        }

        const admin = await Admin.findOne({ email });

        if (admin) {
            return NextResponse.error({ message: "Email sudah terdaftar" }, { status: 400 });
        }

        if (password.length < 6) {
            return NextResponse.error({ message: "Password harus memiliki minimal 6 karakter" }, { status: 400 });
        }

        const newAdmin = new Admin({
            username,
            firstName,
            lastName,
            email,
            team,
            password
        });

        const addAdmin = await newAdmin.save();
        console.log(addAdmin);
        await db.disconnectDb();

        return NextResponse.json({
            message: 'Pendaftaran berhasil',
            data: addAdmin
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.error({ message: error.message }, { status: 500 });
    }
}


export async function DELETE(req) {
    try {
        await db.connectDb();

        if (req.method !== 'DELETE') {
            return NextResponse.error('Method Not Allowed', { status: 405 });
        }

        const userId = await req.json();
        console.log(userId);

        if (!userId) {
            return NextResponse.error(
                { message: 'Missing user ID in the request' },
                { status: 400 }
            );
        }
        const findUser = await Admin.findOneAndDelete(userId);
        console.log("user finder", findUser);

        if (!findUser) {
            return NextResponse.error(
                { message: 'User not found or already deleted' },
                { status: 404 }
            );
        }
        return NextResponse.json(
            {
                message: `User with ID ${findUser._id} deleted successfully`,
                data: findUser,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.error({ message: error.message }, { status: 500 });
    }
}