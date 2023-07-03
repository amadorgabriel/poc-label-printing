export const fs = require("fs");
export const PDFLib = require("pdf-lib");
export const PDFKit = require("pdfkit");
export const SVGtoPDF = require("svg-to-pdfkit");
export const { exec } = require("child_process");

export const svgPath = "./assets/svg/puzzle.svg";
export const fontPath = "./assets/fonts/Roboto-Medium.ttf";

export const mountOutputPath = "./results/pdfkitMountedPDF.pdf";
export const convertedToX1aPath = "./results/convertedToX1aPDF.pdf";
export const copyPDFSecondConversion = "./results/secondConversion.pdf";
