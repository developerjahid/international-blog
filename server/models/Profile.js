const { Schema, model } = require('mongoose')

const profileSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            trim: true,
            maxlength: 100,
        },
        bio: {
            type: String,
            trim: true,
            maxlength: 500,
        },
        profilePic: String,
        links: {
            website: String,
            instagram: String,
            facebook: String,
            twitter: String,
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
        bookmarks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post',
            },
        ],
    },
    { timestamps: true }
)

module.exports = Profile = model('User', profileSchema)
