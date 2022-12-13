import { home } from "./home";
import { input } from "./input";

export function drawCanvas() {
    const img = document.getElementById('titleImg');
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d');
    canvas.width = 1024;
    canvas.height = 512;
    ctx.shadowColor = "#fec400"
    ctx.shadowOffsetX = 0.1;
    ctx.shadowOffsetY = 0.1;
    ctx.shadowBlur = 2;
    ctx.font = '25px Arial'
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    home(canvas, ctx)
    ctx.fillText('user: ~$ ', 50, 480);
    ctx.fillText('|', 165, 480);
    ctx.drawImage(img, 450, 0)
    input('', canvas, ctx)

    return canvas;
}