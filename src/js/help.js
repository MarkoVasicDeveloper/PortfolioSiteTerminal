export function help(canvas, ctx) {
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height - 55);
    ctx.fillStyle = '#fec400';
    ctx.shadowOffsetX = 0.1;
    ctx.shadowOffsetY = 0.1;
    ctx.shadowBlur = 2;
    ctx.fillText('Available command for you:', 50, 100);
    ctx.fillText('- home', 50, 150);
    ctx.fillText('- above', 50, 200);
    ctx.fillText('- projects', 50, 250);
}