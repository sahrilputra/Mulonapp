import db from "../../lib/db";
export default function POST(req, res) {
    db.connectDb();
    res.status(200).json({ name: 'john Doe' })
}