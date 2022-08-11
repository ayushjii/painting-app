import React from 'react';
import { Canvas } from './Canvas'
import { ClearCanvasButton } from './ClearCanvasButton';


export default function Can() {
    return(
        <>
      <ClearCanvasButton/>
            <Canvas/>
        </>
    );
}