import express, {Application} from "express";

async function main(): Promise<void> {
    const application: Application = express();
    
    application.use(express.json());
    
    import("./health/index.js").then((route) => application.use("/health", route.default));
    
    application.listen(3000, () => {
        console.log("http://localhost:3000")
    });
}

main().catch(console.error);
