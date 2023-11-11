import db from "../../lib/db";
export default function POST(req, res) {
    db.connectDb();
    db.disconnectDb();
    res.status(200).json({ name: 'john Doe' })
}