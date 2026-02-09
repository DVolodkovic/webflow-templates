'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    WebFont?: {
      load: (config: { google: { families: string[] } }) => void
    }
    Webflow?: {
      require: (module: string) => any
    }
    jQuery?: any
    $?: any
  }
}

export default function WebflowScripts() {
  useEffect(() => {
    // First, add Webflow mod detection immediately
    const webflowModScript = document.createElement('script')
    webflowModScript.type = 'text/javascript'
    webflowModScript.innerHTML = `
      !function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);
    `
    document.head.appendChild(webflowModScript)

    // Load webfont
    const webfontScript = document.createElement('script')
    webfontScript.src = '/assets/js/webfont.js'
    webfontScript.type = 'text/javascript'
    document.head.appendChild(webfontScript)

    webfontScript.onload = () => {
      if (window.WebFont) {
        window.WebFont.load({
          google: {
            families: ["Poppins:regular,600", "Livvic:regular"]
          }
        })
      }
    }

    // Load jQuery first - must complete before Webflow
    const jqueryScript = document.createElement('script')
    jqueryScript.src = '/assets/js/jquery-3.5.1.min.dc5e7f18c8.js'
    jqueryScript.type = 'text/javascript'
    jqueryScript.async = false
    jqueryScript.defer = false
    
    const loadWebflowScripts = () => {
      // Verify jQuery is loaded
      if (typeof window.jQuery === 'undefined' && typeof window.$ === 'undefined') {
        console.error('jQuery not available, retrying...')
        setTimeout(loadWebflowScripts, 100)
        return
      }

      // Load Webflow scripts sequentially
      const scripts = [
        '/assets/js/webflow.schunk.36b8fb49256177c8.js',
        '/assets/js/webflow.schunk.7bda37803c1a0e9a.js',
        '/assets/js/webflow.b1a52691.b62f6a459917745e.js'
      ]

      let currentIndex = 0

      const loadNextScript = () => {
        if (currentIndex >= scripts.length) {
          // All scripts loaded, initialize Webflow
          setTimeout(() => {
            initializeWebflow()
          }, 200)
          return
        }

        const script = document.createElement('script')
        script.src = scripts[currentIndex]
        script.type = 'text/javascript'
        script.async = false
        script.defer = false
        
        script.onload = () => {
          currentIndex++
          // Wait a bit before loading next script
          setTimeout(() => {
            loadNextScript()
          }, 100)
        }
        
        script.onerror = () => {
          console.error(`Failed to load script: ${scripts[currentIndex]}`)
          currentIndex++
          loadNextScript()
        }
        
        document.body.appendChild(script)
      }

      loadNextScript()
    }

    jqueryScript.onload = () => {
      // Wait for jQuery to be fully initialized
      setTimeout(loadWebflowScripts, 150)
    }

    jqueryScript.onerror = () => {
      console.error('Failed to load jQuery')
    }

    document.body.appendChild(jqueryScript)

    const initializeWebflow = () => {
      const forceInit = () => {
        if (window.Webflow && window.Webflow.require) {
          try {
            const dropdown = window.Webflow.require('dropdown')
            if (dropdown && !dropdown.instance && dropdown.init) {
              dropdown.init(document)
            }
          } catch(e) {
            console.error('Dropdown init error:', e)
          }
          
          try {
            const slider = window.Webflow.require('slider')
            if (slider && slider.ready) {
              slider.ready()
            }
          } catch(e) {
            console.error('Slider init error:', e)
          }
        }
      }

      // Try to initialize immediately
      forceInit()

      // Also try on DOMContentLoaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(forceInit, 100)
        })
      } else {
        setTimeout(forceInit, 100)
      }

      // And on window load
      window.addEventListener('load', () => {
        setTimeout(forceInit, 200)
      })
    }
  }, [])

  return null
}
