import { dbContext } from "../Db/DbContext";

class UsersService {
    async createUser(userData) {
        const user = await dbContext.Users.create(userData);
        return user;
    }

}

export const usersService = new UsersService();