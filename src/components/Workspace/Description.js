import React from 'react'
import PdfViewerComponent from '../../components/PDFViewerComponent';
import { isImage, isPdf } from '../../helpers/media';

const Description = (props) => {
  const { description, file, accessKey } = props.examen;

  return (
    <div className="h-full">
      <p className="text-center text-xl">
        {description || "There is no description for this exam"}
      </p>
      <div className="flex flex-col items-center my-5">
        {isImage(file) && <img className="rounded-xl" src={file} alt="Image" />}
        {isPdf(file) &&
          <div className="PDF-viewer rounded-xl">
            <PdfViewerComponent document={file} />
          </div>
        }
      </div>
    </div>
  )
}

export default Description