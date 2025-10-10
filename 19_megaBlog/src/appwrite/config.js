import { Client, ID, Query, TablesDB } from "appwrite"
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

    // -------------------------------------------------------------
    // POST RELATED SERVICES
    // -------------------------------------------------------------

    // create new post (row)
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createRow({

                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            })
        } catch (error) {
            console.log('Appwrite service :: createPost :: error', error)
            throw error
        }
    }

    // update post (row)
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status
                }
            }
            )
        } catch (error) {
            console.log('Appwrite service :: updatePost :: error', error)
            throw error
        }
    }

    // delete post (row)
    async deletePost(slug) {
        try {
            await this.databases.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug
            })
            return true
        } catch (error) {
            console.log('Appwrite service :: deletePost :: error', error)
            return false
        }
    }

    // list one post (row)
    async getPost(slug, title) {
        try {
            return await this.databases.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                // check docs for queries (this is a filter)
                queries: [Query.equal('title', title)]
            })
        } catch (error) {
            console.log('Appwrite service :: getPost :: error', error)
        }
    }

    // list all posts (rows)
    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries: queries
            })
        } catch (error) {
            console.log('Appwrite service :: getPosts :: error', error)
            throw error
        }
    }

    // -------------------------------------------------------------
    // FILE RELATED SERVICES
    // -------------------------------------------------------------

    // upload file service
    async uploadFile(file) {
        try {
            await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file,
                permissions: []
            })
        } catch (error) {
            console.log('Appwrite service :: uploadFile :: error', error)
            return false
        }
    }

    // delete file
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            })
            return true
        } catch (error) {
            console.log('Appwrite service :: deleteFile :: error', error)
            return false
        }
    }

    // get file preview
    // not using async as the file itself is not provided and the response time is lightning fast
    getFilePreview(fileId) {
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId: fileId
        })
    }
}

const service = new Service()

export default service