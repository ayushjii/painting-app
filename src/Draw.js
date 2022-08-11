import React from 'react';
import {CanvasProvider} from './CanvasContext';
import Can from './Can';

export default function Draw() {
    return(
        <>
            <CanvasProvider>
<Can />
            </CanvasProvider>
        </>
    );
}