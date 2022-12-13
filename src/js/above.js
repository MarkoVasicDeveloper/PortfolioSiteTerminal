export function above(canvas, ctx) {
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height - 55);
    ctx.fillStyle = '#fec400';
    ctx.shadowOffsetX = 0.1;
    ctx.shadowOffsetY = 0.1;
    ctx.shadowBlur = 2;
    ctx.fillRect(50, 55, 250, 60)
    ctx.font = 'Bold 50px Arial';
    ctx.fillStyle = '#111';
    ctx.fillText('Above Me!', 50, 100);
    ctx.font = '15px Arial';
    ctx.fillStyle = '#fec400';
    ctx.fillText(`I have three years of experience in creating frontend and backend`, 50, 150);
    ctx.fillText(`parts of the application with JavaScript, Node.js, and React.js.`, 50, 170);
    ctx.fillText(`My portfolio site is in a 3D version where you can see my works.`, 50, 210);
    ctx.fillText(`The site was created using JavaScript, Three.js, and WebGL.`, 50, 230);
    ctx.fillText(`Please visit this site, I think you will like it.`, 50, 250);
    ctx.fillText(`Python is the first programming language I learned.`, 50, 290);
    ctx.fillText(`I often use it for scripting and process automation.`, 50, 310);
    ctx.fillText(`I have experience in Cyber Security. I worked with networks,`, 50, 350);
    ctx.fillText(`protocols,scanning, and attacking networks...`, 50, 370);
}