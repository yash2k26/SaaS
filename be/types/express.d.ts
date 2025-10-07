import type { User } from "../prisma/prisma-client-js/index.js";


declare global{
    namespace Express{
        interface Request{
            user?:User
        }
    }
}