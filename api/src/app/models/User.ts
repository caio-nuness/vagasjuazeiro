import { model, Schema } from 'mongoose';

export const User = model('User', new Schema({

  name: {
    type: String,
    required: true
  },

  addres: {
    zipCode: {
      type: String,
      required: true,
      length: 8,
    },

    district: {
      type: String,
      required: false
    },

    road: {
      type: String,
      required: false
    },

    number: {
      type: Number,
      required: true
    }
  },

  // Verificar como funciona para criptografar as senhas
  password: {
    type: String,
    required: true,
  },

  rePassword: {
    type: String,
    required: true,
  },

  imagePath: {
    type: String,
    required: false
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true,
    length: 14
  },

  whatsapp: {
    type: String,
    required: false,
    length: 14
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
}));
