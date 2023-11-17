import User from "../../../../models/user";
import db from "../../../../lib/db";
import { NextResponse } from "next/server";


export async function POST(req) {

    try {
        await db.connectDb();

        if (req.method !== 'POST') {
            return NextResponse.error('Method Not Allowed', { status: 405 });
        }
        const { phone, price, weight } = await req.json();
        if (!phone || !price || !weight) {
            return NextResponse.error({ message: "Form Tidak Valid" }, { status: 400 });
        }

        const user = await User.findOne({ phone });
        if (!user) {
            return NextResponse.error({ message: "User Tidak Ditemukan" }, { status: 400 });
        }
        const trashHistoryEntry = {
            serviceType: "Collect Waste",  // Set your service type here
            collectionDate: new Date(),
            trashType: "none",
            weight,
            price,
            location: "Offline",
        };

        user.trashHistory.push(trashHistoryEntry)
        await user.save();
        await db.disconnectDb();

        return NextResponse.json({
            message: 'Data berhasil ditambahkan ke trashHistory',
            data: user
        }, { status: 201 });

    } catch (error) {
        console.log(error);
        return NextResponse.error({ message: error.message }, { status: 500 });
    }
}