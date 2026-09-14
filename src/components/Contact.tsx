import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Building2, Check, Mail, Network, Send, Users, Zap } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

function Contact() {
  const [state, submit] = useForm('mdeorbgw');
  const [token, setToken] = useState('');
  const disabled = token.length === 0 || state.submitting || state.succeeded;
  return <section className="section contact" id="contact"><div className="container"><div className="contact-grid">
    <div className="contact-info">
      <SectionLabel>WHERE YOUR RESEARCH COMES TOGETHER</SectionLabel>
      <h2>Let's map your research workflow.</h2>
      <p>Tell us about your research workflow and we'll show you how Lorvane fits your team — from starting free in the browser to a dedicated environment.</p>
      <div className="contact-details">
        <div className="contact-detail"><span className="contact-icon"><Building2 size={17} /></span><div><small>SRI LANKA</small><strong>Lorvane PVT LTD</strong><span>24 Rheinland Place, 03, Colombo, Sri Lanka<br />Phone: 0112573212</span></div></div>
        <div className="contact-detail"><span className="contact-icon"><Building2 size={17} /></span><div><small>USA</small><strong>Lorvane LLC</strong><span>32854 US Highway 69 N, Jacksonville, TX 75766, United States<br />Phone: +1 903 586 1566</span></div></div>
        <div className="contact-detail"><span className="contact-icon"><Mail size={17} /></span><div><small>EMAIL</small><strong>support@lorvane.net</strong></div></div>
        <div className="contact-detail"><span className="contact-icon"><Users size={17} /></span><div><small>TEAMS</small><strong>For R&amp;D and enterprise</strong></div></div>
        <div className="contact-detail"><span className="contact-icon"><Network size={17} /></span><div><small>RESPONSE</small><strong>Within one business day</strong></div></div>
      </div>
    </div>
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={submit}>
        <div className="form-row">
          <div className="form-field"><label htmlFor="name">Full name</label><input id="name" name="name" type="text" placeholder="Alex Morgan" required /><ValidationError prefix="Name" field="name" errors={state.errors} /></div>
          <div className="form-field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" placeholder="alex@company.com" required /><ValidationError prefix="Email" field="email" errors={state.errors} /></div>
        </div>
        <div className="form-field"><label htmlFor="team">Team / organization</label><input id="team" name="team" type="text" placeholder="R&amp;D Knowledge Team" /></div>
        <div className="form-field"><label htmlFor="message">What are you working on?</label><textarea id="message" name="message" rows={4} placeholder="Tell us about your research sources, workflow, and what you are trying to understand." required /><ValidationError prefix="Message" field="message" errors={state.errors} /></div>
        <div className="form-field turnstile-field"><Turnstile siteKey="0x4AAAAAAEzjcsoAa0vSf1So" onSuccess={setToken} onExpire={() => setToken('')} onError={() => setToken('')} options={{ theme: 'light' }} /></div>
        <button type="submit" className="button button-primary contact-submit" disabled={disabled}>{state.succeeded ? <>Sent <Check size={15} /></> : state.submitting ? <>Sending... <Zap size={15} /></> : <>Send message <Send size={15} /></>}</button>
        {state.succeeded && <p className="form-success">Thanks — we will be in touch within one business day.</p>}
      </form>
    </div>
  </div></div></section>;
}

export { Contact };