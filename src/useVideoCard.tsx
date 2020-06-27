import React, { useState, useEffect, createElement } from 'react'

interface GraphicsInformation {
    renderer: string,
    vendor: string,
    unmasked: {
        vendor: string,
        renderer: string
    }
}

function useVideoCard(canvas: HTMLCanvasElement) {
    const [ graphicsCard, setGraphicsCard ] = useState({ });

    useEffect(() => {
        getInfo(canvas).then((info: GraphicsInformation) => setGraphicsCard(info))
    })
    
    return graphicsCard;
}

async function getInfo(canvas: HTMLCanvasElement): Promise<GraphicsInformation> {
    const gl = canvas.getContext("webgl") ?? canvas.getContext("webgl2");
    if (!gl) throw "Unable to get WebGl context out of the canvas"

    const renderInfo = gl.getExtension("WEBGL_debug_renderer_info");
    
    return {
        renderer: gl.getParameter(gl.RENDERER),
        vendor: gl.getParameter(gl.VENDOR),
        unmasked: {
            vendor: renderInfo != null ? gl.getParameter(renderInfo.UNMASKED_VENDOR_WEBGL) : "",
            renderer: renderInfo != null ? gl.getParameter(renderInfo.UNMASKED_RENDERER_WEBGL) : ""
        }
    }
}

export { useVideoCard };