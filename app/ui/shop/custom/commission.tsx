'use client';

import Script from 'next/script';
import ExternalLink from '@/app/ui/externallink';

export default function Commission() {
    return (
        <div>
        <p className='text-sm'>Form not loading? <ExternalLink url="https://tally.so/r/wolbNe" text="Open the form in a new tab" /></p>
            <iframe data-tally-src="https://tally.so/embed/wolbNe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="949" frameBorder="0" title="Commissions"></iframe>

            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
                onLoad={() => {
                    // @ts-ignore
                    Tally.loadEmbeds();
                }}
            />
        </div>
        )
}
