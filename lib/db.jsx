// import mongoose from "mongoose";

// const connection = { isConnected: false };

// async function connectDb() {
//     try {
//         if (connection.isConnected) {
//             console.log("Already connected to the database.");
//             return;
//         }

//         await mongoose.connect(process.env.MONGODB_URI, {
//         });

//         console.log("Connected to the database.");
//         connection.isConnected = true;
//     } catch (error) {
//         console.error("Error connecting to the database:", error.message);
//     }
// }

// async function disconnectDb() {
//     try {
//         if (connection.isConnected) {
//             await mongoose.disconnect();
//             console.log("Disconnected from the database.");
//             connection.isConnected = false;
//         } else {
//             console.log("Not connected to the database.");
//         }
//     } catch (error) {
//         console.error("Error disconnecting from the database:", error.message);
//     }
// }

// // Koneksi global saat aplikasi dimulai
// connectDb();

// const db = { connectDb, disconnectDb };

// export default db;


import mongoose from "mongoose";

const connect = { isConnection: false }

async function connectDb() {
    if (connect.isConnection) {
        console.log("Already Connected");
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connect.isConnection = true;
    } catch (error) {
        console.log("error by Connected : ", error)
    }
}

async function disconnectedDb() {
    try {
        if (connect.isConnection) {
            await mongoose.disconnect();
            console.log("disconnectDB");
            connect.isConnection = false;
        }
    } catch (error) {
        console.log("erorr : ", error);
    }
}

connectDb();
const db = { connectDb, disconnectedDb };
export default db; 