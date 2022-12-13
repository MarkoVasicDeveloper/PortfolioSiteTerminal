export function works(canvas, ctx) {
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height - 55);
    ctx.fillStyle = '#fec400';
    ctx.shadowOffsetX = 0.1;
    ctx.shadowOffsetY = 0.1;
    ctx.shadowBlur = 2;
    ctx.fillRect(50, 55, 300, 60)
    ctx.font = 'Bold 50px Arial';
    ctx.fillStyle = '#111';
    ctx.fillText('My Projects!', 50, 100);
    ctx.font = '20px Arial';
    ctx.fillStyle = '#fec400';
    ctx.fillText(`I have several projects in my git repository!`, 50, 150);
    ctx.fillText(`- App for carpet services`, 50, 200);
    ctx.fillText(`- Site for small busines`, 50, 230);
    ctx.fillText(`- My first portfolio site`, 50, 260);
    ctx.fillText(`- Python script`, 50, 290);
    ctx.fillText(`- Crazy burger`, 50, 320);
    ctx.font = '30px Arial';
    ctx.fillText(`If you want to see more details,`, 50, 380);
    ctx.fillText(`use SCROLL!`, 50, 420);
}