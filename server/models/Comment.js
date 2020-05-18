const { Schema, model } = require('mongoose')

const commentSchema = new Schema(
    {
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        body: {
            type: String,
            trim: true,
            required: true,
        },
        replies: [
            {
                body: {
                    type: String,
                    trim: true,
                    required: true,
                },
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    required: true,
                },
                createAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    { timestamps: true }
)

module.exports = Comment = model('Comment', commentSchema)
