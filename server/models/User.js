const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 30,
        },
        email: {
            type: String,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            maxlength: 6,
        },
        profile: {
            type: Schema.Types.ObjectId,
            ref: 'Profile',
        },
    },
    { timestamps: true }
)

module.exports = User = model('User', userSchema)
