const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
    {
        heading: {
            type: String,
            required: [true]
        },

        readTime: {
            type: Number,
            required: [true]
        },
        description: {
            type: String,
            required: [true]
        },

        categories: {
            type: String,
            required: [true]
        },
        image: {
            type: String,
            required: [true]
        },

        verified: {
            type: Boolean,
            required: [true]
        },
        newest: {
            type: Boolean,
            required: [true]
        },

        trending: {
            type: Boolean,
            required: [true]
        },

}
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;


// heading: String,
// readTime: String,
// description: String,
// categories: [String],
// image: String,
// verified: Boolean,
// newest: Boolean,
// trending: Boolean,