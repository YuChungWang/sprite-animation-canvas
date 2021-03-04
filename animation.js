this.canvas = document.getElementById('canvas');
this.ctx = canvas.getContext('2d');

this.img = new Image();
this.img.src = 'https://dlgarenanow-a.akamaihd.net/mgames/kgtw/events/202007TelCgacha/cdn/animation/animation-arrow-light.jpg';

this.frameWidth = 1334;
this.frameHeight = 750;
this.numberOfFrames = 26;
this.frameIndex = 0;
this.lastUpdate = 0;
this.timePerFrame = 20;

this.canvas.width = this.frameWidth;
this.canvas.height = this.frameHeight;

function gameLoop() {
  if (Date.now() - this.lastUpdate >= this.timePerFrame) {
    this.frameIndex += 1;
    if (this.frameIndex >= this.numberOfFrames) {
      this.frameIndex = 0;
    }
    this.lastUpdate = Date.now();
  }

  this.ctx.drawImage(
    this.img,
    0,
    this.frameIndex * this.frameHeight,
    this.frameWidth,
    this.frameHeight,
    0,
    0,
    this.frameWidth,
    this.frameHeight,
  );
  
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
