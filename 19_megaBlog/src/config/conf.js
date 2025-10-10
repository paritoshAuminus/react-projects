/*
This file is just exporting all the code to access the environment variables,
this serves two purposes:
1. It enhances the readability of the code, we don't have to write import.meta.env.VITE_SOME_SHIT
every time
2. Sometimes the Ids in the database are made entirely of numbers (eg: '1223423412') which can be
coerced as a number instead of a string causing the app to crash
*/

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID)
}

export default conf