import mongoose from 'mongoose'
import { UserSchema } from '../models/user'

class DbContext {
    Users = mongoose.model('User', UserSchema)
}

export const dbContext = new DbContext()
