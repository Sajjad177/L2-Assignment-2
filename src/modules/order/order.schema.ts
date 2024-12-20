import { model, Schema } from 'mongoose';
import { IOrder } from './order.model';
import validator from 'validator';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      message: 'Email is required',
      validate: {
        validator: (v: string) => validator.isEmail(v),
        message: 'Invalid email address',
      },
    },
    product: {
      type: Object,
      required: true,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export const Order = model<IOrder>('Order', orderSchema);
