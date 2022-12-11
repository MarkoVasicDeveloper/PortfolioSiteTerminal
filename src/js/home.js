export function home(canvas) {
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height - 55);
    ctx.shadowOffsetX = 0.1;
    ctx.shadowOffsetY = 0.1;
    ctx.shadowBlur = 2;
    ctx.fillStyle = "#fec400";
    ctx.fillText(`Hi there,`, 50, 50);
    ctx.font = '50px Arial'
    ctx.fillRect(50, 90, 350, 60);
    ctx.fillStyle = "#111";
    ctx.font = 'Bold 50px Arial';
    ctx.fillText(`I' am Marko!`, 50, 140);
    ctx.fillStyle = "#fec400";
    ctx.font = '25px Arial';
    ctx.fillText('- Frontend developer', 50, 210);
    ctx.fillText('- Programming freak', 50, 255);
    ctx.fillText('- Technology lover', 50, 305);
    ctx.fillText('Welcome to MV - Linux 1.0', 50, 380);
    ctx.fillText('==> Scroll or type "help" to started', 50, 410);
}