const landingBlobsDiv = document.querySelector('.landing__blobs');
const dpr = window.devicePixelRatio || 1;

const blobData = {
  topLeft: {
    className: 'blob--topLeft',
    baseW: 137,
    baseH: 138,
    speed: 0.02,
    strength: 3.5,
    gradientType: 'linear',
    gradientCoords: { x1: 0, y1: 0, x2: 137, y2: 138 },
    gradientOpacity: 0.25,
    gradientColors: [
      { offset: 0, color: "#0CFFCE" },
      { offset: 0.42, color: "#50E567" },
      { offset: 1, color: "#07997C" }
    ],
    strokeSpeed: 0.6,
    strokeWidth: 80,
    getStrokeCoords: (o) => ({ x1: o, y1: o, x2: o + 80, y2: o + 80 }),
    startPoint: { x: 136.635, y: 69.3829 },
    points: [
      { cp1x: 134.929, cp1y: 86.6169, cp2x: 143.516, cp2y: 104.821, x: 122.816, y: 110.367 },
      { cp1x: 102.117, cp1y: 115.912, cp2x: 80.9167, cp2y: 141.065, x: 68.3176, y: 137.69 },
      { cp1x: 50.3393, cp1y: 132.873, cp2x: 24.0909, cp2y: 134.95, x: 18.6974, y: 121.512 },
      { cp1x: 13.6635, cp1y: 106.19, cp2x: 0, cp2y: 89.8237, x: 0, y: 69.3829 },
      { cp1x: 0, cp1y: 51.1258, cp2x: 2.87653, cp2y: 29.1179, x: 18.8342, y: 22.2872 },
      { cp1x: 32.0375, cp1y: 13.659, cp2x: 42.8121, cp2y: -4.60739, x: 68.3176, y: 1.07613 },
      { cp1x: 103.196, cp1y: 10.4202, cp2x: 140.231, cp2y: 33.0724, x: 136.635, y: 69.3829 }
    ]
  },
  topRight: {
    className: 'blob--topRight',
    baseW: 235,
    baseH: 239,
    speed: 0.015,
    strength: 5.0,
    gradientType: 'linear',
    gradientCoords: { x1: 235, y1: 0, x2: 0, y2: 239 },
    gradientOpacity: 0.25,
    gradientColors: [
      { offset: 0, color: "#0CFFCE" },
      { offset: 0.42, color: "#50E567" },
      { offset: 1, color: "#07997C" }
    ],
    strokeSpeed: 0.9,
    strokeWidth: 120,
    getStrokeCoords: (o) => ({ x1: 235 - o, y1: o, x2: 235 - (o + 120), y2: o + 120 }),
    startPoint: { x: 234.374, y: 119.66 },
    points: [
      { cp1x: 231.446, cp1y: 149.383, cp2x: 246.176, cp2y: 180.779, x: 210.67, y: 190.343 },
      { cp1x: 175.164, cp1y: 199.907, cp2x: 138.799, cp2y: 243.286, x: 117.187, y: 237.465 },
      { cp1x: 86.3483, cp1y: 229.158, cp2x: 41.3238, cp2y: 232.741, x: 32.0722, y: 209.564 },
      { cp1x: 23.4374, cp1y: 183.139, cp2x: 0, cp2y: 154.913, x: 0, y: 119.66 },
      { cp1x: 0, cp1y: 88.1735, cp2x: 4.93418, cp2y: 50.2178, x: 32.3069, y: 38.4373 },
      { cp1x: 54.9548, cp1y: 23.5568, cp2x: 73.4367, cp2y: -7.94608, x: 117.187, y: 1.85594 },
      { cp1x: 177.014, cp1y: 17.971, cp2x: 240.542, cp2y: 57.0379, x: 234.374, y: 119.66 }
    ]
  },
  center: {
    className: 'blob--center',
    baseW: 205,
    baseH: 208,
    speed: 0.035,
    strength: 2.8,
    gradientType: 'radial',
    gradientCoords: { x1: 102.5, y1: 104, r1: 0, x2: 102.5, y2: 104, r2: 105 },
    gradientOpacity: 0.40,
    gradientColors: [
      { offset: 0, color: "#0CFFCE" },
      { offset: 0.42, color: "#50E567" },
      { offset: 1, color: "#07997C" }
    ],
    strokeSpeed: 0.7,
    strokeWidth: 90,
    getStrokeCoords: (o) => ({ x1: o, y1: 0, x2: o + 90, y2: 208 }),
    startPoint: { x: 202.335, y: 98.4945 },
    points: [
      { cp1x: 186.551, cp1y: 139.317, cp2x: 198.005, cp2y: 169.312, x: 170.784, y: 172.487 },
      { cp1x: 143.563, cp1y: 175.662, cp2x: 135.785, cp2y: 207.442, x: 102.951, y: 207.442 },
      { cp1x: 70.1176, cp1y: 207.442, cp2x: 44.9481, cp2y: 214.07, x: 30.7675, y: 181.638 },
      { cp1x: 16.5869, cp1y: 149.207, cp2x: 19.609, cp2y: 130.688, x: 3.56772, y: 98.4945 },
      { cp1x: -12.4735, cp1y: 66.3009, cp2x: 30.7675, cp2y: 37.0371, x: 30.9665, y: 23.3781 },
      { cp1x: 31.1655, cp1y: 9.71914, cp2x: 44.8407, cp2y: 0, x: 102.951, y: 0 },
      { cp1x: 161.062, cp1y: 0, cp2x: 218.12, cp2y: 57.6721, x: 202.335, y: 98.4945 }
    ]
  },
  downLeft: {
    className: 'blob--downLeft',
    baseW: 307,
    baseH: 308,
    speed: 0.01,
    strength: 6.0,
    gradientType: 'radial',
    gradientCoords: { x1: 0, y1: 0, r1: 0, x2: 0, y2: 0, r2: 310 },
    gradientOpacity: 0.45,
    gradientColors: [
      { offset: 0, color: "#0CFFCE" },
      { offset: 0.42, color: "#50E567" },
      { offset: 1, color: "#07997C" }
    ],
    strokeSpeed: 0.5,
    strokeWidth: 150,
    getStrokeCoords: (o) => ({ x1: o, y1: o * 0.5, x2: o + 150, y2: (o + 150) * 0.5 }),
    startPoint: { x: 307.18, y: 155.357 },
    points: [
      { cp1x: 303.343, cp1y: 193.947, cp2x: 322.648, cp2y: 234.709, x: 276.112, y: 247.126 },
      { cp1x: 229.576, cp1y: 259.543, cp2x: 181.915, cp2y: 315.863, x: 153.59, y: 308.305 },
      { cp1x: 113.171, cp1y: 297.52, cp2x: 54.1606, cp2y: 302.172, x: 42.0351, y: 272.081 },
      { cp1x: 30.718, cp1y: 237.772, cp2x: 0, cp2y: 201.127, x: 0, y: 155.357 },
      { cp1x: 0, cp1y: 114.477, cp2x: 6.46694, cp2y: 65.1986, x: 42.3427, y: 49.9039 },
      { cp1x: 72.0258, cp1y: 30.5841, cp2x: 96.249, cp2y: -10.3167, x: 153.59, y: 2.4096 },
      { cp1x: 232.001, cp1y: 23.3321, cp2x: 315.263, cp2y: 74.0534, x: 307.18, y: 155.357 }
    ]
  },
  downRight: {
    className: 'blob--downRight',
    baseW: 71,
    baseH: 72,
    speed: 0.04,
    strength: 1.5,
    gradientType: 'linear',
    gradientCoords: { x1: 0, y1: 0, x2: 71, y2: 72 },
    gradientOpacity: 0.10,
    gradientColors: [
      { offset: 0, color: "#0CFFCE" },
      { offset: 0.42, color: "#50E567" },
      { offset: 1, color: "#07997C" }
    ],
    strokeSpeed: 1.2,
    strokeWidth: 40,
    getStrokeCoords: (o) => ({ x1: o, y1: o, x2: o + 40, y2: o + 40 }),
    startPoint: { x: 70.8109, y: 36.1998 },
    points: [
      { cp1x: 69.9264, cp1y: 45.1914, cp2x: 74.3767, cp2y: 54.6894, x: 63.6493, y: 57.5827 },
      { cp1x: 52.9218, cp1y: 60.476, cp2x: 41.9349, cp2y: 73.5991, x: 35.4054, y: 71.8381 },
      { cp1x: 26.0882, cp1y: 69.3251, cp2x: 12.4851, cp2y: 70.4089, x: 9.68991, y: 63.3974 },
      { cp1x: 7.08109, cp1y: 55.4033, cp2x: 0, cp2y: 46.8646, x: 0, y: 36.1998 },
      { cp1x: 0, cp1y: 26.6743, cp2x: 1.49075, cp2y: 15.1919, x: 9.7608, y: 11.6281 },
      { cp1x: 16.6034, cp1y: 7.12643, cp2x: 22.1873, cp2y: -2.40386, x: 35.4054, y: 0.561459 },
      { cp1x: 53.4808, cp1y: 5.43661, cp2x: 72.6743, cp2y: 17.2552, x: 70.8109, y: 36.1998 }
    ]
  }
};





class AnimatedBlob {
  constructor(type) {
    this.config = blobData[type];
    this.canvas = document.createElement('canvas');
    this.canvas.classList.add('blob', this.config.className);
    this.ctx = this.canvas.getContext('2d');
    
    landingBlobsDiv.append(this.canvas);
    
    window.addEventListener('resize', () => this.resize());
    this.resize();
    
    this.moveOffset = 0;
    this.time = Math.random() * 500; 
    
    globalRenderer.add(this);
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
  }

  getOffset(gap, strength = this.config.strength) {
    return Math.sin(this.time + gap) * strength;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    
    this.ctx.scale(dpr, dpr);
    
    const rect = this.canvas.getBoundingClientRect();
    const style = getComputedStyle(this.canvas);
    const padding = parseInt(style.getPropertyValue('--blob-padding'));
    
    const scaleX = (rect.width - (padding * 2)) / this.config.baseW;
    const scaleY = (rect.height - (padding * 2)) / this.config.baseH;

    this.ctx.translate(padding, padding);
    this.ctx.scale(scaleX, scaleY);

    this.time += this.config.speed; 
    const str = this.config.strength;

    this.ctx.beginPath();
    this.ctx.moveTo(
      this.config.startPoint.x + this.getOffset(9, str), 
      this.config.startPoint.y + this.getOffset(13, str)
    );

    this.config.points.forEach((p, i) => {
      const prev = i === 0 ? 6 : i - 1;
      this.ctx.bezierCurveTo(
        p.cp1x + this.getOffset(prev * 1.5, str), 
        p.cp1y + this.getOffset(prev * 2.2, str), 
        p.cp2x + this.getOffset(i * 1.5, str), 
        p.cp2y + this.getOffset(i * 2.2, str), 
        p.x + this.getOffset(i * 1.5, str), 
        p.y + this.getOffset(i * 2.2, str)
      );
    });
    
    this.ctx.closePath();

    let grad;
    const c = this.config.gradientCoords;
    if (this.config.gradientType === 'radial') {
      grad = this.ctx.createRadialGradient(c.x1, c.y1, c.r1, c.x2, c.y2, c.r2);
    } else {
      grad = this.ctx.createLinearGradient(c.x1, c.y1, c.x2, c.y2);
    }
    this.config.gradientColors.forEach(s => grad.addColorStop(s.offset, s.color));
    this.ctx.fillStyle = grad;
    this.ctx.globalAlpha = this.config.gradientOpacity; 
    this.ctx.fill();

    this.moveOffset += this.config.strokeSpeed;
    if (this.moveOffset > this.config.baseW + 200) this.moveOffset = -200;

    const sCoords = this.config.getStrokeCoords(this.moveOffset);
    const strokeGrad = this.ctx.createLinearGradient(sCoords.x1, sCoords.y1, sCoords.x2, sCoords.y2);
    strokeGrad.addColorStop(0, "rgba(255, 255, 255, 0.15)");
    strokeGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.85)"); 
    strokeGrad.addColorStop(1, "rgba(255, 255, 255, 0.15)");

    this.ctx.strokeStyle = strokeGrad;
    this.ctx.lineWidth = 0.5 / Math.min(scaleX, scaleY); 
    this.ctx.stroke();
    
    this.ctx.restore();
  }
}

const globalRenderer = (() => {
    const blobs = new Set();
    const loop = () => {
        blobs.forEach(b => b.render());
        requestAnimationFrame(loop);
    };
    
    loop();

    return {
        add: (b) => blobs.add(b)
    };
})();

Object.keys(blobData).forEach(type => new AnimatedBlob(type));