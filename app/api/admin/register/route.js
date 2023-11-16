import db from "../../../../lib/db";
import Admin from "../../../../models/admin";
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        await db.connectDb();

        if (request.method !== 'POST') {
            return new Response(null, { status: 405 }); // Method Not Allowed
        }

        const { name, email, team, password } = request.body;

        if (!name || !email || !password) {
            return new Response(JSON.stringify({
                message: "Lengkapi Formulir"
            }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const admin = await Admin.findOne({ email });

        if (admin) {
            return new Response(JSON.stringify({
                message: "Email sudah terdaftar"
            }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        if (password.length < 6) {
            return new Response(JSON.stringify({
                message: "Password harus memiliki minimal 6 karakter"
            }), { status: 400, headers: { 'Content-Type': 'application/json' } });
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

        return new Response(JSON.stringify({
            message: 'Pendaftaran berhasil',
            data: addAdmin
        }), { status: 201, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            message: error.message
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}