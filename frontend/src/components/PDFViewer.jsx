/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../src/PDFViewer.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

function PDFViewer() {
    const [pdfFile, setPDFFile] = useState(null)
    const [viewPdf, setViewPdf] = useState(null)
    const fileType = ['media/store/pdfs']

    const handleChange = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFile(e.target.result)
                }
            }
            else {
                setPDFFile(null)
            }
        }
        else {
            console.log("please select")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (pdfFile !== null) {
            setViewPdf(pdfFile)
        }
        else {
            setViewPdf(null)
        }
    }
    const newplugin = defaultLayoutPlugin()

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input type="file" className='form-control' onChange={handleChange} />
                <button type="submit" className='btn btn-success'>View PDF</button>
            </form>
            <h2>View PDF</h2>
            <div className='pdf-container'>
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                    {viewPdf && <>
                        <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
                    </>}
                    {!viewPdf && <>No PDF</>}
                </Worker>
            </div>
        </div>
    )
}

export default PDFViewer
