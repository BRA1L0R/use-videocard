import React, { useState, useEffect } from 'react'

interface GraphicsInformation {
    renderer: string,
    vendor: string,
    unmasked: {
        vendor: string,
        renderer: string
    }
}

// function useVideoCard(canvas: HTMLCanvasElement) {
//     const [ graphicsCard, setGraphicsCard ] = useState({ });

//     useEffect(() => {
//         const gl = canvas.getContext("webgl") ?? canvas.getContext("webgl2")
//         if (gl) getInfo(gl).then((info: GraphicsInformation) => setGraphicsCard(info))
//     })
    
//     return graphicsCard;
// }

function getGraphicsInformation(gl: WebGLRenderingContext | WebGL2RenderingContext): GraphicsInformation {
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

function useVideoCard (initialGl?: WebGLRenderingContext) {
    const [ gl, setGl ] = useState<WebGLRenderingContextOverloads | undefined>(initialGl)
    const [ info, setInfo ] = useState<GraphicsInformation>()

    useEffect(() => {
        if (!initialGl) {
            const canvas = document.createElement("canvas")
            const context = canvas.getContext("webgl") ?? canvas.getContext("webgl2")

            if (context)
            setInfo(getGraphicsInformation(context))

            canvas.remove();
        } else {
            setInfo(getGraphicsInformation(initialGl))
        }
    }, [])

    return info
}

export { useVideoCard };