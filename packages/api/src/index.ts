import express, { Application } from "express";

import Health from "./health/index.js";

async function main(): Promise<void> {
    const application: Application = express();
    
    application.use(express.json());
    
    application.use("/health", Health);
    
    application.listen(3000, () => {
        console.log("http://localhost:3000");
    });
}

main().catch(console.error);
