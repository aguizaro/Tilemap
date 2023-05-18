// Antonio Guizar Orozco
// Tilemap Tutorial

'use strict';

// define and configure main Phaser game object
let config = {
    type: Phaser.Canvas,
    render: {
        pixelArt: true
    },
    width: 320,
    height: 240,
    physics:{
        default: 'arcade',
        arcade: {
            debug: true
        }
    }, 
    zoom: 2,
    scene: [Overworld]
}

const game= new Phaser.Game(config)