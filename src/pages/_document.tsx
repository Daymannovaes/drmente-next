import { Html, Head, Main, NextScript } from "next/document";

const FB_PIXEL_ID = "1358024049025263";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');

              fbq('track', 'PageView');
            `
          }}
        />
        <meta name="facebook-domain-verification" content="lb3mkgfapxrjap6h1faiytcyrlghdm" />
      </Head>
      <body className="antialiased">
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            height="1"
            width="1"
            style={{display: 'none'}}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
