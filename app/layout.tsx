import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./snipcart.css";
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

export const metadata: Metadata = {
  title: "Meadow Reveries",
  description: "Needle felting tutorials and handmade whimsies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="mailerLite"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
                    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
                    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
                    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                    ml('account', '1003795');`,
          }}
        />
        <Script 
          id="snipcart"
          dangerouslySetInnerHTML={{
            __html: `
              window.SnipcartSettings = {
                  publicApiKey: "${process.env.SNIPCART_API_KEY}",
                  loadStrategy: "on-user-interaction",
                  modalStyle: "side",
              };
              (function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).currency)!=null||(s.currency="usd");var l,p;(p=(l=window.SnipcartSettings).timeoutDuration)!=null||(l.timeoutDuration=2750);var w,u;(u=(w=window.SnipcartSettings).domain)!=null||(w.domain="cdn.snipcart.com");var m,g;(g=(m=window.SnipcartSettings).protocol)!=null||(m.protocol="https");var f,v;(v=(f=window.SnipcartSettings).loadCSS)!=null||(f.loadCSS=!0);var E=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,y=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(y.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),$(n),i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e)),y.forEach(function(h){return document.removeEventListener(h,o)})}function $(t){!E||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
          `
          }}
        />
        <Script
          id="snipcart-localization"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    document.addEventListener('snipcart.ready', function() {
                      Snipcart.api.session.setLanguage('en', {
                        cart: {
                          shipping_taxes_calculated_at_checkout: "Shipping will be calculated at checkout."
                        },
                        discount_box: {
                          promo_code: "Apply a discount coupon code",
                          promo_code_placeholder: "Enter discount code",
                          promocode_applied: "Discount applied!"
                        },
                        shipping_rates: {
                          guaranteed_delivery_days: "Guaranteed to be delivered in %{guaranteedDaysToDelivery} day(s), once we prepare your item for shipment."
                        },
                        errors {
                          promo_code_is_invalid: "Code is not valid",
                          promocode_already_in_cart: "Code already applied",
                          promocode_isnt_applicable: "Code does not apply to the items in this cart",
                          promo_code_is_expired: "This code has expired",
                          quantity_revised: "Oops! We checked our inventory and we don't have that many in stock. We've updated your cart."
                        }
                      });
                    });
                    `,
          }}
        />
      </head>
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
