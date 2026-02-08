import { prisma } from "./src/lib/prisma.js";
import app from "./src/server.js";

const PORT = process.env.PORT || 8080;

async function start() {
  try {
    await prisma.$connect();
    console.log("DataBase Connected Succesfully");

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed!,Something went wrong.", error);
    process.exit(1);
  }
}

start();
