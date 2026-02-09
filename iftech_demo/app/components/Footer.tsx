'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <section id="contact" className="footer">
        <div className="content-container">
          <div className="w-layout-grid footer-grid">
            <div id="w-node-_042d454a-1c72-2f03-6808-52c0fba3cb50-fba3cb4d" className="footer-left-side">
              <div>
                <div className="livvic-text">Say hi</div>
                <div className="link-wrapper">
                  <a href="mailto:info@Iftech.com" className="footer-link">
                    info<span className="livvic-text">@</span>Iftech.com
                  </a>
                  <div className="footer-link-underline"></div>
                </div>
              </div>
              <div>
                <div className="livvic-text">Looking for work?</div>
                <div className="link-wrapper">
                  <a href="mailto:apply@Iftech.com" className="footer-link">
                    apply<span className="livvic-text">@</span>Iftech.com
                  </a>
                  <div className="footer-link-underline"></div>
                </div>
              </div>
            </div>
            <div className="footer-link-wrapper">
              <div className="livvic-text">Links</div>
              <div className="link-wrapper">
                <Link href="#cta" className="footer-link">Download app</Link>
                <div className="footer-link-underline"></div>
              </div>
              <div className="link-wrapper">
                <Link href="#benefits" className="footer-link">Benefits</Link>
                <div className="footer-link-underline"></div>
              </div>
              <div className="link-wrapper">
                <Link href="#industries" className="footer-link">Industries</Link>
                <div className="footer-link-underline"></div>
              </div>
              <div className="link-wrapper">
                <Link href="#testimonials" className="footer-link">Testimonials</Link>
                <div className="footer-link-underline"></div>
              </div>
              <div className="link-wrapper">
                <Link href="#faq" className="footer-link">FAQ</Link>
                <div className="footer-link-underline"></div>
              </div>
              <div className="link-wrapper">
                <Link href="#contact" className="footer-link">Contact</Link>
                <div className="footer-link-underline"></div>
              </div>
              <div className="link-wrapper">
                <Link href="/utility-pages/license" className="footer-link">License</Link>
                <div className="footer-link-underline"></div>
              </div>
            </div>
            <div className="footer-link-wrapper">
              <div className="livvic-text">Follow us</div>
              <div className="link-wrapper">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Linkedin</a>
                <div className="footer-link-underline"></div>
              </div>
              <div className="link-wrapper">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
                <div className="footer-link-underline"></div>
              </div>
            </div>
          </div>
          <div className="footer-logo"></div>
          <div className="powerd-by">
            Powered by <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="webflow-link">Webflow</a>
          </div>
        </div>
      </section>
      <a 
        href="https://www.sithoopa.me/template-customization?ref=iftech" 
        target="_blank" 
        rel="noopener noreferrer"
        className="template-customization w-inline-block"
      >
        <Image 
          width={45} 
          height={45}
          loading="lazy" 
          alt="" 
          src="/assets/images/6873de9b4ce42286636a7e30_Me.png"
        />
        <div className="template-customization-text">
          <div className="semi-bold-text">Need this customized?</div>
          <div className="template-customization-flex">
            <div>See my offers</div>
            <Image 
              loading="lazy" 
              src="/assets/images/6873de9b4ce42286636a7e2e_black arrow.svg" 
              alt="" 
              width={20}
              height={20}
              className="black-arrow"
            />
          </div>
        </div>
      </a>
    </>
  )
}
