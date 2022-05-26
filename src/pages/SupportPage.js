import React from 'react'
import PdfViewerComponent from '../components/PDFViewerComponent';

// Add the PSPDFKit wrapper component to your `render` function.
const DocumentViewerComponent = () => {
  return (
    <div className="PDF-viewer">
      <PdfViewerComponent
        document={"Registration-Packet.pdf"}
      />
    </div>
  );
}
const SupportPage = () => {
  return (
    // <div className="flex flex-col items-center h-full w-full">
    //   <div className="absolute hero min-h-144 w-4/5 mx-20 bg-white mt-20 py-20 rounded-lg shadow-xl">
    //     <div className="hero-content text-center">
    <div className="absolute w-screen h-screen z-50">
      <DocumentViewerComponent />
      {/* <h1 className="text-5xl font-bold">Support Page</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button> */}
    </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default SupportPage