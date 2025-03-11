import { model, Schema } from 'mongoose';

export const Vacancie = model('Vacancie', new Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true
  },

  imagePath: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  whatsapp: {
    type: String,
    required: true
  },

  userId: {
    type: String,
    required: true
  },

  enterpriseId: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    required: true
  },

  enterprise: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Enterprice',
  },

  user: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'User',
  }
}));
