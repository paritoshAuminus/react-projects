import { Account, Client, ID } from "appwrite"
import conf from "../config/conf";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    // create new account
    async createAccount({ name, email, password }) {
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name
            })

            // login right away
            if (userAccount) {
                this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            console.log('Appwrite service :: createAccount :: ', error)
            throw error
        }
    }

    // login functionality
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({
                email: email,
                password: password
            })
        } catch (error) {
            console.log('Appwrite service :: login :: ', error)
            throw error
        }
    }

    // get current user
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: ', error)
            throw error
        }
        return null
    }

    // logout
    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log('Appwrite service :: logout :: ', error)
            throw error
        }
    }
}

const authService = new AuthService()

export default authService