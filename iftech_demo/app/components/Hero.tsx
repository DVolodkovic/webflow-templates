'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section data-w-id="96fcb068-a0bd-a694-4a72-bf505495a878" className="page-hero-section">
      <div className="content-container">
        <h1 data-w-id="574fe303-e26b-c30d-9c46-daf66c2b3716" style={{opacity: 0}}>
          Learning without limits,<br/>
          <span className="livvic-text">anytime, anywhere.</span>
        </h1>
        <div className="spacer-40px-height"></div>
        <div className="hero-section-paragraph-wrapper">
          <p data-w-id="719bce47-f9a6-a093-548e-9e8001084918" style={{opacity: 0}} className="large-text">
            Access targeted, expert-led training on our platform—designed to prepare you for real-world challenges.
          </p>
        </div>
        <div data-w-id="43e4e0ff-3501-132d-7f74-32034e995a5b" style={{opacity: 0}} className="download-links-wrapper">
          <Link href="#" className="primary-button w-inline-block">
            <div className="primary-button-icon">
              <Image 
                src="/assets/images/673486c146a8fb4ced1c1a93_download.svg" 
                alt="" 
                width={20} 
                height={20}
                className="primary-button-arrow" 
              />
            </div>
            <div>
              <div>Download Now</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="hero-image-and-numbers-wrapper">
        <div data-w-id="14e5a60a-9d6c-60bb-31f0-3a2a250d20f2" style={{opacity: 0}} className="hero-section-image"></div>
        <div className="numbers-wrapper">
          <div>
            <h5 className="livvic-text">Active users</h5>
            <div className="divider"></div>
            <div className="numbers-text">10,000+</div>
          </div>
          <div>
            <h5 className="livvic-text">Courses completed</h5>
            <div className="divider"></div>
            <div className="numbers-text">500+</div>
          </div>
          <div>
            <h5 className="livvic-text">Store rating</h5>
            <div className="divider"></div>
            <div className="numbers-text">4.8/5</div>
          </div>
        </div>
      </div>
    </section>
  )
}
