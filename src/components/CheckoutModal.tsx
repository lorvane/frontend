import { useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { X } from 'lucide-react';
import { CheckoutContent } from './CheckoutContent';

function CheckoutModal({ title, amount, onClose }: { title: string; amount: string; onClose: () => void }) {
  useEffect(() => { const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); document.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden'; return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; }; }, [onClose]);
  return <div className="checkout-overlay" onClick={onClose}><div className="checkout-modal" onClick={e => e.stopPropagation()}><button className="checkout-close" onClick={onClose} aria-label="Close"><X size={18} /></button><div className="checkout-head"><span className="brand-mark"><span /><span /><span /></span><small>SECURE CHECKOUT</small><h3>{title} plan</h3><strong className="checkout-price">{amount}<small> / month</small></strong></div><PayPalScriptProvider options={{ clientId: 'BAAPBcPF_0kbLmO4tfomKS6dHXsHBanxaxy2xtk2lMGbbMQlSXtjPp0s2s35ZbVpOf3QLRTGqS9tTtmN7A', currency: 'USD', intent: 'capture', components: 'buttons' }}><CheckoutContent title={title} amount={amount} /></PayPalScriptProvider></div></div>;
}
export { CheckoutModal };
