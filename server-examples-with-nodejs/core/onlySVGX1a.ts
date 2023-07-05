export {};

const { fs, PDFKit, SVGtoPDF } = require("./constants/index.ts");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 540 320">
 <defs>
  <path id="Triangle" d="M120 20 L 220 193.205 L 20 193.205 Z" stroke="red" fill="url(#radial)"/>
  <path id="Maths" d="M250,50C380,50 350,150 480,150" stroke="green" fill="none"/>
  <path id="Chemistry" transform="translate(-200,0) scale(1.5)" d="M250,50C380,50 350,150 480,150" stroke="blue" fill="none"/>
  <path id="Path" d="M20,240 C40,280 60,280 200,230 A100 100 0 0 1 300,260 L 330,280 Q 400,320 500,200" stroke="orange" fill="none"/>
  <linearGradient id="linear" x1="0" x2="1" gradientUnits="objectBoundingBox">
    <stop stop-color="green" offset="0"/>
    <stop stop-color="red" offset="1"/>
  </linearGradient>
  <radialGradient id="radial" cx="0.5" cy="0.6667" r="0.6" gradientUnits="objectBoundingBox">
    <stop stop-color="orange" offset="0.2"/>
    <stop stop-color="yellow" offset="1"/>
  </radialGradient>
  <pattern id="pattern" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect width="4" height="4"/>
    <rect width="2" height="2" fill="red"/>
    <rect x="2" y="2" width="2" height="2" fill="red"/>
  </pattern>
 </defs>
 <rect x="2%" y="2%" width="96%" height="96%" fill="url(#linear)" fill-opacity="0.3" stroke="orange" stroke-width="2" stroke-dasharray="5 2 2 2 5 5"/>
 <use xlink:href="#Triangle"/>
 <use xlink:href="#Maths"/>
 <use xlink:href="#Chemistry"/>
 <use xlink:href="#Path"/>
 <text textLength="600px" lengthAdjust="spacingAndGlyphs" fill="url(#pattern)">
  <textPath xlink:href="#Triangle" font-size="20" font-family="serif" font-weight="bold" textLength="600px" lengthAdjust="spacingAndGlyphs">Text adjusted around a triangle</textPath>
 </text>
 <text font-family="sans-serif">
  <textPath xlink:href="#Maths" font-size="30" fill="blue" text-anchor="middle" startOffset="50%">Maths x<tspan font-size="20" baseline-shift="super">2</tspan> + y<tspan font-size="20" baseline-shift="super">2</tspan> = z<tspan font-size="20" baseline-shift="super">2</tspan>!</textPath>
  <textPath xlink:href="#Chemistry" font-size="30" fill="green" text-anchor="middle" startOffset="50%">Chemistry 2H<tspan font-size="20" baseline-shift="sub">2</tspan> + O<tspan font-size="20" baseline-shift="sub">2</tspan> -> 2H<tspan font-size="20" baseline-shift="sub">2</tspan>O</textPath>
  <textPath xlink:href="#Path" font-size="30" fill="purple" dominant-baseline="middle" text-anchor="middle" startOffset="50%">Text centered on a complex path</textPath>
 </text>
</svg>`;

const svg1 = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 26.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
<g id="&#x421;&#x43B;&#x43E;&#x439;_1">
	<path style="opacity:0.35;" d="M21.5,93C13.505,93,7,86.495,7,78.5v-46C7,24.505,13.505,18,21.5,18H28c0-8.822,7.178-16,16-16
		s16,7.178,16,16h7.5C75.495,18,82,24.505,82,32.5V39c8.822,0,16,7.178,16,16s-7.178,16-16,16v7.5C82,86.495,75.495,93,67.5,93H21.5
		z"/>
	<path style="fill:#F2F2F2;" d="M19.5,91C11.505,91,5,84.495,5,76.5v-46C5,22.505,11.505,16,19.5,16H26c0-8.822,7.178-16,16-16
		s16,7.178,16,16h7.5C73.495,16,80,22.505,80,30.5V37c8.822,0,16,7.178,16,16s-7.178,16-16,16v7.5C80,84.495,73.495,91,65.5,91H19.5
		z"/>
	<path style="fill:#96C362;" d="M80,43.5c-2.518,0-4.8,0.986-6.5,2.585V30.5c0-4.418-3.582-8-8-8H48.915
		c1.599-1.7,2.585-3.982,2.585-6.5c0-5.247-4.253-9.5-9.5-9.5s-9.5,4.253-9.5,9.5c0,2.518,0.986,4.8,2.585,6.5H19.5
		c-4.418,0-8,3.582-8,8v15.585c1.7-1.599,3.982-2.585,6.5-2.585c5.247,0,9.5,4.253,9.5,9.5s-4.253,9.5-9.5,9.5
		c-2.518,0-4.8-0.986-6.5-2.585V76.5c0,4.418,3.582,8,8,8h15.585C33.486,82.8,32.5,80.518,32.5,78c0-5.247,4.253-9.5,9.5-9.5
		s9.5,4.253,9.5,9.5c0,2.518-0.986,4.8-2.585,6.5H65.5c4.418,0,8-3.582,8-8V59.915c1.7,1.599,3.982,2.585,6.5,2.585
		c5.247,0,9.5-4.253,9.5-9.5S85.247,43.5,80,43.5z"/>
	<path style="fill:none;stroke:#40396E;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="
		M80,43.5c-2.518,0-4.8,0.986-6.5,2.585V30.5c0-4.418-3.582-8-8-8H48.915c1.599-1.7,2.585-3.982,2.585-6.5
		c0-5.247-4.253-9.5-9.5-9.5s-9.5,4.253-9.5,9.5c0,2.518,0.986,4.8,2.585,6.5H19.5c-4.418,0-8,3.582-8,8v15.585
		c1.7-1.599,3.982-2.585,6.5-2.585c5.247,0,9.5,4.253,9.5,9.5s-4.253,9.5-9.5,9.5c-2.518,0-4.8-0.986-6.5-2.585V76.5
		c0,4.418,3.582,8,8,8h15.585C33.486,82.8,32.5,80.518,32.5,78c0-5.247,4.253-9.5,9.5-9.5s9.5,4.253,9.5,9.5
		c0,2.518-0.986,4.8-2.585,6.5H65.5c4.418,0,8-3.582,8-8V59.915c1.7,1.599,3.982,2.585,6.5,2.585c5.247,0,9.5-4.253,9.5-9.5
		S85.247,43.5,80,43.5z"/>
</g>
<g id="&#x421;&#x43B;&#x43E;&#x439;_2">
</g>
</svg>`;

const onlySVGX1aPath = "./core/results/onlySVGX1a.pdf";

module.exports = {
  mountOnlySVG: () => {
    const doc = new PDFKit();

    // const svgContent = fs.readFileSync(require.resolve(svg1), {
    //   encoding: "utf8",
    // });

    SVGtoPDF(doc, svg, 10, 0);

    doc.pipe(fs.createWriteStream(onlySVGX1aPath));

    doc.end();
  },
};
