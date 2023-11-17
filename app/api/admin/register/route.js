import db from "../../../../lib/db";
import Admin from "../../../../models/admin";
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        await db.connectDb();

        if (request.method !== 'POST') {
            return NextResponse.error('Method Not Allowed', { status: 405 });
        }

        const { name, email, team, password } = await request.json();

        console.log(name);
        if (!name || !email || !password) {
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
            name,
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