import { model, Schema } from 'mongoose';

export const Favorite = model('Favorite', new Schema({

  user: {
    type:Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  },

  vacancie: {
    type:Schema.Types.ObjectId,
    required: false,
    ref: 'Vacancie'
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
}));
