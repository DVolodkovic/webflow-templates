import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Iftech - Webflow HTML website template',
  description: 'Meet Iftech, a mobile app website template that allows you to showcase your application and services professionally.',
  openGraph: {
    title: 'Iftech - Webflow HTML website template',
    description: 'Meet Iftech, a mobile app website template that allows you to showcase your application and services professionally.',
    images: ['https://cdn.prod.website-files.com/66f80993567d675bb21536a3/671e6a619446befa2ec78c85_Iftech%20-%20Thumbnail.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iftech - Webflow HTML website template',
    description: 'Meet Iftech, a mobile app website template that allows you to showcase your application and services professionally.',
    images: ['https://cdn.prod.website-files.com/66f80993567d675bb21536a3/671e6a619446befa2ec78c85_Iftech%20-%20Thumbnail.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-wf-domain="iftech-template.webflow.io" data-wf-page="66f80993567d675bb21536aa" data-wf-site="66f80993567d675bb21536a3">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="https://cdn.prod.website-files.com/66f80993567d675bb21536a3/670babd82dd26d9853add07c_Favicon%2032x32.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://cdn.prod.website-files.com/66f80993567d675bb21536a3/670babe073a92fa5b4e3d95e_Webclip%20256x256.png" />
      </head>
      <body>
        {children}
        <Script src="/assets/js/webfont.js" strategy="beforeInteractive" />
        <Script id="webfont-load" strategy="beforeInteractive">
          {`
            WebFont.load({
              google: {
                families: ["Poppins:regular,600", "Livvic:regular"]
              }
            });
          `}
        </Script>
        <Script id="webflow-mod" strategy="beforeInteractive">
          {`
            !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
          `}
        </Script>
        <Script src="/assets/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="lazyOnload" />
        <Script src="/assets/js/webflow.schunk.36b8fb49256177c8.js" strategy="lazyOnload" />
        <Script src="/assets/js/webflow.schunk.7bda37803c1a0e9a.js" strategy="lazyOnload" />
        <Script src="/assets/js/webflow.b1a52691.b62f6a459917745e.js" strategy="lazyOnload" />
        <Script id="webflow-init" strategy="lazyOnload">
          {`
            (function() {
              function forceInit() {
                if (window.Webflow) {
                  if (window.Webflow.require) {
                    try {
                      var dropdown = window.Webflow.require('dropdown');
                      if (dropdown && dropdown.instance) {
                      } else if (dropdown && dropdown.init) {
                        dropdown.init(document);
                      }
                    } catch(e) {}
                    
                    try {
                      var slider = window.Webflow.require('slider');
                      if (slider && slider.ready) {
                        slider.ready();
                      }
                    } catch(e) {}
                  }
                }
              }
              
              if (window.Webflow) {
                forceInit();
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(forceInit, 100);
                });
              } else {
                setTimeout(forceInit, 100);
              }
              
              window.addEventListener('load', function() {
                setTimeout(forceInit, 200);
              });
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
