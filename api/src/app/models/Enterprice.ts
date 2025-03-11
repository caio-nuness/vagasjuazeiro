import { model, Schema } from 'mongoose';

export const Enterprise = model('Enterprise', new Schema({

  corporateReason: {
    type: String,
    required: true
  },

  cnpj: {
    type: Number,
    required: true,
    length: 21
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

  // Colocar um enum aqui comas as opções sim e não
  is_hiring: {
    type: Boolean,
    required: true
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
    required: true
  },
}));
