import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

function CheckoutContent({ title, amount }: { title: string; amount: string }) {
  const [{ isRejected }] = usePayPalScriptReducer();
  if (isRejected) return <div className="checkout-error">We couldn't load PayPal securely. Please refresh and try again, or contact support at support@lorvane.net.</div>;
  return <><PayPalButtons style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' }} createOrder={(_data, actions) => actions.order.create({ intent: 'CAPTURE', purchase_units: [{ description: `Lorvane ${title} plan`, amount: { currency_code: 'USD', value: amount } }] })} onApprove={(_data, actions) => actions.order!.capture().then(() => { }) } onError={() => { }} /><p className="checkout-note">You'll be redirected to PayPal to complete your purchase securely.</p></>;
}
export { CheckoutContent };
