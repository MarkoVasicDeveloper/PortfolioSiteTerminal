import * as THREE from 'three';

export function updateTexture() {
    // //create image
    // const bitmap = document.createElement('canvas');
    // // // bitmap.width = bitmap.height = 512;
    // const g = bitmap.getContext('2d');
    // bitmap.width = 100;
    // bitmap.height = 100;
    // g.font = 'Bold 20px Arial';

    // g.fillStyle = 'white';
    // g.fillText('Hello world dsf asd asdas das dasd asdas dasdf asfas d!', 0, 20);

    // // canvas contents will be used for a texture
    // const texture = new THREE.Texture(bitmap) 
    // texture.needsUpdate = true;
    // return texture;

    // var canvas = document.createElement('canvas');

    // canvas.width = 1024;
    // canvas.height =1024;
    // var context = canvas.getContext('2d');
    // context.font = '20pt Arial';
    // context.fillStyle = 'white';
    // context.fillStyle = 'green';
    // context.textAlign = "center";
    // context.textBaseline = "middle";
    // context.fillText('Hello World', 100, 100)

    // context.fillStyle = 'red';
    // context.fillRect(0, 0, 1, 1);

    // const texture = new THREE.CanvasTexture(bitmap) 
    // const ctx = document.createElement('canvas').getContext('2d');
    // ctx.canvas.width = 256;
    // ctx.canvas.height = 256;
    // ctx.font = 'Bold 20px Arial';
    // ctx.fillStyle = '#333';
    // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.fillStyle = '#FF0000';
    // ctx.fillText('Hello World', 50, 50)
    // ctx.fill()
    // const texture = new THREE.CanvasTexture(ctx.canvas);

    
    const img = document.getElementById('titleImg');
    const canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 1024;
    ctx.font = '30px Arial'
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fec400";
    ctx.fillText(`Hi there,`, 50, 100);
    ctx.font = '60px Arial'
    ctx.fillRect(50, 180, 350, 60);
    ctx.fillStyle = "#111";
    ctx.font = 'Bold 60px Arial';
    ctx.fillText(`I' am Marko!`, 50, 230);
    ctx.fillStyle = "#fec400";
    ctx.font = '30px Arial';
    ctx.fillText('- Frontend developer', 50, 330);
    ctx.fillText('- Programming freak', 50, 380);
    ctx.fillText('- Technology lover', 50, 430);
    ctx.fillText('Welcome to MV - Linux 1.0', 50, 730);
    ctx.fillText('==> Scroll or type "help" to started', 50, 780);
    ctx.fillText('user: ~$ ', 50, 930);
    ctx.fillText('|', 170, 930);

    return canvas;
}