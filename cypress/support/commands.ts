/* eslint-disable */
/// <reference types="cypress" />

import { Profile } from "../../src/entities/Profile/model/types/profile";
import { login } from "./commands/login";

Cypress.Commands.add('login', login)

declare global {
	namespace Cypress {
		interface Chainable {
			login(username?: string, password?: string): Chainable<Profile>;
		}
	}
}

export {};
