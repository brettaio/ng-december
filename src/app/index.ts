import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './index.html',
})
export class IndexComponent {
    heroFirstSentence = `This cheeky fella here...`;
    heroSecondSentence = `Maximizes Google Ad Accounts.`;
    heroThirdSentence = `With Expert Management & Strategy`;
    heroForthSentence = `Website Optimization & Updates `;

    serviceH6 = `Can I Tell You How Bretta Brings The Holistic Approach To The Game?`;
    serviceH4 = `Here's a basic breakdown`;

    why1 = `I can build ads, but I'm better at running ads. As an educator, I'm fluid in understanding and conceptualising other peoples problems. I can then take that and blue sky dream and conceptualise with you. We can strategize solutions based on your industry and goals. Ongoing Google Ads Management is my bread and butter. Let's make sandwiches.`;
    why2 = ` I quit the corporate marketing game to go rogue and code (and raise kids), but big dogs hungry! I've been bouncing around languauges and command lines as a creative starving artist building projects that have given me an extreme attention to detail, and nouse to scaling ideas. One becomes two becomes four. I also did this to acccompany the idea - speed is key.`;
    why3 = `I'm content in content. I have design, UX UI and content writing background, I also have that primary teaching degree to aid in my story telling. I also have this sick as digital friend called Alan Iverson - Well I call him AI for short. I cover the entire spectrum of digital marketing and branding to fill in the gaps that are needed. Fresh content. Fast Content.`;
    why4 = `I take pride in the friends I've made and the true ones that I stay in constant connect with. Shopify experts, UXUI Gurus, Fullstack Devs, Entreprenuers, Cyber Security Leaders. All these people enrich my life with goodness and they're always one call away. I appreciate them dearly for the opportunites they have provided in my journey. You know who you are. Thank you!`;

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
