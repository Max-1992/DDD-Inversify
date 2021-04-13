import express, { Application } from "express";

const setUp = (application: Application) => {
    application.use(express.urlencoded({extended: true}));
    application.use(express.json());
}

export { setUp }