'use client'

export default function VideoSection() {
  return (
    <div 
      data-poster-url="/assets/images/67333eb7fb25508cc3668a9d_Iftech_VideoMobile-poster-00001.jpg" 
      data-video-urls=""
      data-autoplay="true" 
      data-loop="true" 
      data-wf-ignore="true" 
      className="demo-video w-background-video w-background-video-atom"
    >
      <video 
        id="3c9c6827-15ae-3495-2b99-6af98ee0ae8c-video" 
        autoPlay 
        loop 
        style={{
          backgroundImage: 'url("/assets/images/67333eb7fb25508cc3668a9d_Iftech_VideoMobile-poster-00001.jpg")'
        }}
        muted
        playsInline
        data-wf-ignore="true" 
        data-object-fit="cover"
      >
      </video>
    </div>
  )
}
