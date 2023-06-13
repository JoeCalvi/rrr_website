import mongoose from 'mongoose'
import { UserSchema } from '../models/User'
import { RequestSchema } from '../models/Request'

class DbContext {
    Users = mongoose.model('User', UserSchema);

    Requests = mongoose.model('Request', RequestSchema);
}

export const dbContext = new DbContext()
