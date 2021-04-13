// Inversify
import { inject } from "inversify";

// Inversify Express
import {controller, httpPost, interfaces, request, response } from "inversify-express-utils";

// Types
import { TYPES } from "@pbb/constants/types";

// Express
import { Request, Response } from "express";

// Interface
import ISigninUseCase from "@pbb/application/usecase/ISigninUseCase";
import IUserDto from "@pbb/application/usecase/IUserDto";

// Class
import AuthServiceLocator from "@pbb/configuration/usecases/AuthServiceLocator";


@controller("/auth")
export default class AuthController implements interfaces.Controller {
    private readonly signInUseCase: ISigninUseCase;

    constructor(@inject(TYPES.AuthServiceLocator) serviceLocator: AuthServiceLocator) {
        this.signInUseCase = serviceLocator.GetSignInUseCase();
    }

    @httpPost("/signin")
    public async sigin(@request() req: Request, @response() res: Response) {
        try {
            const userDto: IUserDto = req.body;
            const foundUserDto: IUserDto =  await this.signInUseCase.signin(userDto)
            res.status(200).json(foundUserDto)

        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }
}
