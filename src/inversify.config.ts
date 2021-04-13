import "reflect-metadata";

// Inversify
import { Container } from "inversify";

// Types
import { TYPES } from "./constants/types";

// Interface
import IUserReadOnlyRepository from "./application/repositories/IUserReadOnlyRepository";

// Class
import AuthServiceLocator from "./configuration/usecases/AuthServiceLocator";
import UserRepository from "./infrastructure/UserRepository";

const container = new Container();

// set up bindings
container.bind<AuthServiceLocator>(TYPES.AuthServiceLocator).to(AuthServiceLocator);
container.bind<IUserReadOnlyRepository>(TYPES.IUserReadOnlyRepository).to(UserRepository);

export { container };