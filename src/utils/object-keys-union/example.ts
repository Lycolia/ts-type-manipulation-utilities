import { ObjectKeysUnion } from 'src/utils/object-keys-union';

const PaymentMethodContext = {
  visa: {
    type: 'credit-card',
    name: 'VISA',
    logo: 'visa.png',
  },
  master: {
    type: 'credit-card',
    name: 'Mastercard',
    logo: 'master.png',
  },
  amex: {
    type: 'credit-card',
    name: 'American Express',
    logo: 'amex.png',
  },
  diners: {
    type: 'credit-card',
    name: 'Diners card',
    logo: 'diners.png',
  },
  paypal: {
    type: 'PSP',
    name: 'PayPal',
    logo: 'paypal.png',
  },
} as const;

type PaymentMethods = ObjectKeysUnion<typeof PaymentMethodContext>;

// usage example
const getPaymentMethodContext = (pm: PaymentMethods) => {
  return pm in PaymentMethodContext
    ? PaymentMethodContext[pm]
    : new Error(`Invalid payment method: ${pm}`);
};
