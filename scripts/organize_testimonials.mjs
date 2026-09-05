import fs from "fs";
import path from "path";

const baseDir = path.resolve("public/bmp_ads");
const testimonialsDir = path.join(baseDir, "testimonials");
const testSvgDir = path.join(testimonialsDir, "svg");
const testPngDir = path.join(testimonialsDir, "png");

// Create directories
fs.mkdirSync(testSvgDir, { recursive: true });
fs.mkdirSync(testPngDir, { recursive: true });

// Move CSV
const csvSrc = path.join(baseDir, "Mentees Feedback [BMP-C02].csv");
const csvDest = path.join(testimonialsDir, "Mentees Feedback [BMP-C02].csv");
if (fs.existsSync(csvSrc)) {
  fs.copyFileSync(csvSrc, csvDest);
  console.log("Copied CSV to testimonials folder.");
}

// Identify testimonial SVG files
const svgSrcDir = path.join(baseDir, "svg");
const pngSrcDir = path.join(baseDir, "png");

const svgFiles = fs.readdirSync(svgSrcDir);
for (const file of svgFiles) {
  if (file.includes("testimonial")) {
    const srcPath = path.join(svgSrcDir, file);
    const destPath = path.join(testSvgDir, file);
    fs.renameSync(srcPath, destPath);
    console.log(`Moved SVG: ${file} -> testimonials/svg/`);
  }
}

const pngFiles = fs.readdirSync(pngSrcDir);
for (const file of pngFiles) {
  if (file.includes("testimonial")) {
    const srcPath = path.join(pngSrcDir, file);
    const destPath = path.join(testPngDir, file);
    fs.renameSync(srcPath, destPath);
    console.log(`Moved PNG: ${file} -> testimonials/png/`);
  }
}

console.log("All testimonials moved successfully!");
