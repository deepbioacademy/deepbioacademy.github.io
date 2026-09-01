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

  // 1. Update Cohort versions
  svgContent = svgContent.replace(/Cohort 02/g, "Cohort 03");
  svgContent = svgContent.replace(/Cohort 01/g, "Cohort 03");
  svgContent = svgContent.replace(/Cohort 2/g, "Cohort 3");
  svgContent = svgContent.replace(/Cohort 1/g, "Cohort 3");

  // 2. Update Dates
  svgContent = svgContent.replace(/July[–-]Sept 2026/g, "Oct–Dec 2026");
  svgContent = svgContent.replace(/July 3/g, "Oct 2");
  svgContent = svgContent.replace(/July 2/g, "Oct 1");
  svgContent = svgContent.replace(/July 1/g, "Sept 30");
  svgContent = svgContent.replace(/June 30/g, "Sept 29");
  svgContent = svgContent.replace(/Starts Tomorrow, July 3/g, "Starts Oct 2, 2026");
  svgContent = svgContent.replace(/Starts Tomorrow, Oct 2/g, "Starts Oct 2, 2026");
  svgContent = svgContent.replace(/Starts July 3/g, "Starts Oct 2");

  // 3. Update Domain & URLs
  svgContent = svgContent.replace(/mdjubayerhossain\.com\/bmp/g, "deepbio.academy");
  svgContent = svgContent.replace(/mdjubayerhossain\.com/g, "deepbio.academy");

  // 4. Update Branding
  svgContent = svgContent.replace(/CHIRAL Bangladesh/g, "DeepBio Academy");
  svgContent = svgContent.replace(/CHIRAL/g, "DeepBio");

  // 5. Fix unescaped ampersands in XML text
  // Replace & that is not already part of &amp;, &lt;, &gt;, &quot;, &#...;
  svgContent = svgContent.replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, "&amp;");

  // Save updated SVG
  fs.writeFileSync(filePath, svgContent, "utf-8");
  console.log(`Updated SVG: ${file}`);
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
