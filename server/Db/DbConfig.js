import mongoose from 'mongoose'

mongoose.connection.on('error', err => {
    console.error('[DATABASE ERROR]:', err)
})
mongoose.connection.on('connection', () => {
    console.log('DbConnection Successful')
})

mongoose.set('strictQuery', false)

export class DbConnection {
    static async connect(connectionstring = 'mongodb+srv://JoeCalvi:MXSADGinbLwiLrDt@joescluster.pnavs5z.mongodb.net/rrr_db?retryWrites=true&w=majority') {
        const status = 0
        try {
            const status = await mongoose.connect(connectionstring)
            console.log('[CONNECTION TO DB SUCCESSFUL]')
            return status
        } catch (e) {
            console.error(
                '[MONGOOSE CONNECTION ERROR]:',
                'Invalid connection string'
            )
            return status
        }
    }
}