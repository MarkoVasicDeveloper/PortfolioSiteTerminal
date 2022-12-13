import { above } from "./above";
import { drawCanvas } from "./drawCanvas";
import { help } from "./help";
import { home } from "./home";
import { works } from "./works";
import { wrongCommand } from "./wrongCommand";

let string = '';

export function input(char, canvas, ctx) {
    switch (char) {
        case 'Backspace':
            string = string.slice(0, -1);
            break;
        case 'Enter':
            command(string,canvas);
            string = '';
            input(string, canvas, ctx)
            return;
        default:
            break;
    }
    
    if(char.length === 1 && string.length < 55) string = string + char;
    
    ctx.font = '25px Arial'
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#111';
    ctx.fillRect(160, 460, canvas.width, 35);
    ctx.shadowColor = "#fec400"
    ctx.shadowOffsetX = 0.5;
    ctx.shadowOffsetY = 0.5;
    ctx.shadowBlur = 3;
    ctx.fillStyle = '#fec400';
    ctx.fillText(string + '|', 165, 480);
}

function command(string, canvas) {
    switch (string) {
        case 'home':
            home(canvas, ctx);
            break;
        case 'above':
            above(canvas, ctx);
            break;
        case 'help':
            help(canvas, ctx);
            break;
        case 'projects':
            works(canvas,ctx);
            break;
        default:
            wrongCommand(canvas);
            break;
    }
}