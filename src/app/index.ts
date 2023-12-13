import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './index.html'
})
export class IndexComponent {
    /* Stripe Link */
    stripeLink = 'https://buy.stripe.com/fZe5ln224amc0WQ7sy';

    /* Hero Text */
    heroFirstSentence = `This cheeky fella here...`;
    heroSecondSentence = `Maximizes Google Ad Accounts.`;
    heroThirdSentence = `With Expert Management & Strategy`;
    heroForthSentence = `Website Optimization & Updates `;

    /* Call To Action Buttons*/
    heroCTA = `How Does Bretta Do It!?`;
    firstServiceCTA = `Let's Advertise`;
    secondServiceCTA = `Let's Optimize`;
    thirdServiceCTA = `Let's Strategise`;
    forthServiceCTA = `Let's Enterprise`;

    serviceH6 = `Can I Tell You How Bretta Brings The Holistic Approach To The Game?`;
    serviceH4 = `Here's a basic breakdown`;

    firstService = 'Google Ads Management';
    secondService = 'Web Development';
    thirdService = 'Digital Marketing Strategy';
    forthService = 'Professional Network Access';

    firstServiceWhy = `I build & run impactful ads. My teaching, coaching & marketing background brings the ulimate toolbelt. I'm fluid in understanding problems to teach on. I connect with the blue sky dreamers. A conceptualist, existential philosopher, our potential is only limited in the mind. Google Ads Management is my bread and butter. Let's make sandwiches.`;
    secondServiceWhy = `I code breakneck speeds. I build landing pages to accompany ads. Articulating Url Slugs & building innant ad relevance. This gives me an extreme attention to detail across ad copy and website copy. Both combined bring ad costs down. Service Location Pages are my absolute jam (example.com/service-location)`;
    thirdServiceWhy = `Outside the square creativity, content in content. I am a story teller, imagination builder. We percieve & conceive as a means to receive what we want to achieve. I am the conduit between real world tactile and its digital application. We stratagise and prioritise what is the least path of resistance to meet our goals.`;
    forthServiceWhy = `I take pride in the friends I've made and the true ones that I stay in constant connect with. Shopify experts, UXUI Gurus, Fullstack Devs, Entreprenuers, Cyber Security Leaders. All these people enrich my life with goodness and they're always one call away. I appreciate them dearly for the opportunites they have provided in my journey. You know who you are. Thank you!`;

    whyH6 = `A little more goodness to get you over the line`;
    whyH4 = `We bring solutions to make life easier for our customers.`;
    why5 = `I am able to connect traditional, feet on the ground, tangible marketing with digital campaigns and strategy. A conduit between actuality and online simplicity. I see what you can't and use what you can.`;
    why6 = `Continual feedback & analyses allow me to effectively & efficiently realign our approach to be ready to succeed at a moments notice.`;
    why7 = `Encompassing a holistic, multi-faceted approach is a must in Google Ads Marketing. Remarketing to traffic and constantly showing to turn leads into sales and push your business into a winning space.`;
    why8 = `I'm here, ready, when you're not. Quick, attentive & responsive, just like your website should be. Only one call away as your digital marketing manager and educator.`;

    landingPagesH6 = `Not all websites are created equally`;
    landingPagesH4 = `A landing page that is guaranteed to convert is essential to Google Ad success.`;
    landingPagesP = `I'm not saying you need a new website, I'm saying your ads need their own website. Built in a modern framework, mobile responsive and super fast. Breakneck Speeds.`;

    storeData: any;
    activeTab = 'all';
    constructor(public store: Store<any>) {
        this.initStore();
    }
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
}
