const { Schema, model } = require('mongoose');
<<<<<<< HEAD

const PizzaSchema = new Schema({
=======
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema(
  {
>>>>>>> feature/comment-model
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
<<<<<<< HEAD
      default: Date.now
=======
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
>>>>>>> feature/comment-model
    },
    size: {
      type: String,
      default: 'Large'
    },
<<<<<<< HEAD
    toppings: []
  });

  // create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;
=======
    toppings: [],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;
>>>>>>> feature/comment-model
