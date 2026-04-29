import { Router } from "express";

export const Route = Router();

Route.get("/", async (request, response) => {
    response.status(200);
    
    return response.json({
        message: true
    });
});

export default Route;
