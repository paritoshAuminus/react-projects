import { Client, Databases, ID, TablesDB } from "appwrite"
import conf from "../config/conf";

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createRow(
                conf.appwriteCollectionId,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    slug
                }
            )
        } catch (error) {
            console.log('Appwrite service :: createPost :: error', error) 
            throw error
        }
    }
}

const service = new Service()

export default service