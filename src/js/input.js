import { above } from "./above";
import { drawCanvas } from "./drawCanvas";
import { help } from "./help";
import { home } from "./home";
import { works } from "./works";
import { wrongCommand } from "./wrongCommand";

let string = '';

export function input(char, canvas) {
    switch (char) {
        case 'Backspace':
            string = string.slice(0, -1);
            break;
        case 'Enter':
            command(string,canvas);
            string = '';
            input(string, canvas)
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
            home(canvas);
            break;
        case 'above':
            above(canvas);
            break;
        case 'help':
            help(canvas);
            break;
        case 'projects':
            works(canvas);
            break;
        default:
            wrongCommand(canvas);
            break;
    }
}