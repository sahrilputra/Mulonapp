import User from "../../../../models/user";
import db from "../../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await db.connectDb();

        if (req.method !== 'POST') {
            return NextResponse.error('Method Not Allowed', { status: 405 });
        }

        const { name, email, password, username, phone } = await req.json();

        console.log(phone);
        if (!name || !email || !password || !username || !phone) {
            return NextResponse.error({ message: "Lengkapi Formulir" }, { status: 400 });
        }

        const userEmail = await User.findOne({ email });
        const userPhone = await User.findOne({ phone });

        if (userEmail) {
            return NextResponse.error({ message: "Email sudah terdaftar" }, { status: 400 });
        }
        if (userPhone) {
            return NextResponse.error({ message: "Nomor Hp sudah terdaftar" }, { status: 400 });
        }
        if (password.length < 6) {
            return NextResponse.error({ message: "Password harus memiliki minimal 6 karakter" }, { status: 400 });
        }

        const newCustomer = new User({
            name, email, password, username, phone
        });
        console.log("NEW CUSTOMER : ", newCustomer);

        const addCustomer = await newCustomer.save();

        console.log(addCustomer);

        return NextResponse.json({
            message: 'Pendaftaran berhasil',
            data: addCustomer
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.error({ message: error.message }, { status: 500 });
    }
}


export async function DELETE(req) {
    try {
        await db.connectDb();

        if (req.method !== "DELETE") {
            return NextResponse.error("Method Not Allowed", { status: 405 });
        }

        const userId = req.query.id;

        if (!userId) {
            return NextResponse.error(
                { message: "Missing user ID in the request" },
                { status: 400 }
            );
        }

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return NextResponse.error(
                { message: "User not found or already deleted" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: `User with ID ${userId} deleted successfully`,
                data: deletedUser,
            },
            { status: 200 }
        );


    } catch (error) {
        console.error(error);
        return NextResponse.error({ message: error.message }, { status: 500 });
    }

}