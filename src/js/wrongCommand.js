import { help } from "./help";

export function wrongCommand(canvas) {
    help(canvas)
    ctx.fillText('Or you can use SCROLL!', 50, 300);
    ctx.font = 'Bold 40px Arial'
    ctx.fillStyle = '#ff0000';
    ctx.fillText('Command not found!', 50, 400);
}