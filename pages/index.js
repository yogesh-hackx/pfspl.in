import Image from 'next/image';
import Hero from '@components/Hero';
import Services from '@components/Services.js';
import Clients from '@components/Clients';
import Clients2 from '@components/Clients2';
import Gallery from '@components/Gallery';
import ContactUs from '@components/ContactUs';

export default function IndexPage() {
    return (
        <div className="flex flex-col items-center justify-center space-y-12">
            <Hero />
            <div className="below-hero">
                <div>
                    <Services />
                </div>
                <div>
                    <h2 className="sub-heading">Our prime Clients</h2>
                    <Clients />
                </div>
                <div>
                    <Clients2 />
                </div>
                <div>
                    <h2 className="sub-heading">Gallery</h2>
                    <Gallery />
                </div>
                <div>
                    <h2 className="sub-heading">How can we help?</h2>
                    <ContactUs />
                </div>
                
            </div>
        </div>
    );
}
