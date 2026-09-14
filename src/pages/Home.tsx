import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { SignalStrip } from '../components/SignalStrip';
import { Capabilities } from '../components/Capabilities';
import { Workspace } from '../components/Workspace';
import { Workflow } from '../components/Workflow';
import { SearchSection } from '../components/SearchSection';
import { Evidence } from '../components/Evidence';
import { Audience } from '../components/Audience';
import { Testimonials } from '../components/Testimonials';
import { Tech } from '../components/Tech';
import { EnterpriseSection } from '../components/EnterpriseSection';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { CTA } from '../components/CTA';

function Home() { useEffect(() => { document.title = 'Lorvane — Research intelligence, organized'; }, []); return <><Header /><main><Hero /><SignalStrip /><Capabilities /><Workspace /><Workflow /><SearchSection /><Evidence /><Audience /><Testimonials /><Tech /><EnterpriseSection /><Pricing /><FAQ /><Contact /><CTA /></main><Footer /></>; }
export { Home };
