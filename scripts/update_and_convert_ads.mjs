import fs from "fs";
import path from "path";
import sharp from "sharp";

const svgDir = path.resolve("public/bmp_ads/svg");
const pngDir = path.resolve("public/bmp_ads/png");

if (!fs.existsSync(pngDir)) {
  fs.mkdirSync(pngDir, { recursive: true });
}

const files = fs.readdirSync(svgDir).filter((f) => f.endsWith(".svg"));

console.log(`Found ${files.length} SVG files to process.`);

for (const file of files) {
  const filePath = path.join(svgDir, file);
  let svgContent = fs.readFileSync(filePath, "utf-8");

  // 1. Update Domain & URLs to deepbioacademy.com/programs/bmp
  svgContent = svgContent.replace(/deepbio\.academy\/programs\/bmp/g, "deepbioacademy.com/programs/bmp");
  svgContent = svgContent.replace(/deepbio\.academy\/bmp/g, "deepbioacademy.com/programs/bmp");
  svgContent = svgContent.replace(/deepbio\.academy/g, "deepbioacademy.com/programs/bmp");
  svgContent = svgContent.replace(/mdjubayerhossain\.com\/bmp/g, "deepbioacademy.com/programs/bmp");
  svgContent = svgContent.replace(/mdjubayerhossain\.com/g, "deepbioacademy.com/programs/bmp");

  // 2. Adjust font-size if it was too huge for a longer URL
  // If font-size was 28-32, make it 23-25 so it fits cleanly
  svgContent = svgContent.replace(/font-size="28"(>deepbioacademy\.com\/programs\/bmp)/g, 'font-size="24"$1');
  svgContent = svgContent.replace(/font-size="30"(>deepbioacademy\.com\/programs\/bmp)/g, 'font-size="24"$1');
  svgContent = svgContent.replace(/font-size="26"(>deepbioacademy\.com\/programs\/bmp)/g, 'font-size="23"$1');

  // 3. Fix unescaped ampersands in XML text
  svgContent = svgContent.replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, "&amp;");

  // Save updated SVG
  fs.writeFileSync(filePath, svgContent, "utf-8");
  console.log(`Updated SVG URL in: ${file}`);
}

console.log("All SVGs updated. Starting PNG conversion with sharp...");

async function convertAll() {
  for (const file of files) {
    const filePath = path.join(svgDir, file);
    const pngName = file.replace(/\.svg$/, ".png");
    const outPngPath = path.join(pngDir, pngName);

    try {
      const svgBuffer = fs.readFileSync(filePath);
      await sharp(svgBuffer, { density: 150 })
        .resize(1080, 1080, { fit: "contain", background: { r: 15, g: 23, b: 42, alpha: 0 } })
        .png({ quality: 95, compressionLevel: 8 })
        .toFile(outPngPath);

      console.log(`Converted: ${pngName}`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
  console.log("All PNG conversions complete!");
}

convertAll();
