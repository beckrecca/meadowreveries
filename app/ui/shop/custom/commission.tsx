'use client';

import Script from 'next/script';
import ExternalLink from '@/app/ui/externallink';

export default function Commission() {
    return (
        <div>
        <h2>Request a Custom Order</h2>
        <p className='text-sm'>Form not loading? <ExternalLink url="https://tally.so/r/3j7NEx" text="Open the form in a new tab" /></p>
            <iframe data-tally-src="https://tally.so/embed/3j7NEx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="949" frameBorder="0" marginHeight="0" marginWidth="0" title="Commissions"></iframe>

            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    Tally.loadEmbeds();
                }}
            />
        </div>
        )
}
