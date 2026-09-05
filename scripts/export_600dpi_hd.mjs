import fs from "fs";
import path from "path";
import sharp from "sharp";

const rootAdsDir = path.resolve("public/bmp_ads");
const dirsToProcess = [
  {
    svgDir: path.join(rootAdsDir, "testimonials", "svg"),
    pngDir: path.join(rootAdsDir, "testimonials", "png"),
    name: "Testimonials"
  },
  {
    svgDir: path.join(rootAdsDir, "svg"),
    pngDir: path.join(rootAdsDir, "png"),
    name: "Core Promotional Ads"
  }
];

async function export600DPI() {
  console.log("====================================================");
  console.log("Exporting all SVGs to 600 DPI Ultra-HD PNGs (2160x2160)...");
  console.log("====================================================\n");

  for (const group of dirsToProcess) {
    if (!fs.existsSync(group.svgDir)) continue;
    fs.mkdirSync(group.pngDir, { recursive: true });

    const files = fs.readdirSync(group.svgDir).filter((f) => f.endsWith(".svg"));
    console.log(`Processing ${files.length} files in [${group.name}]...`);

    for (const file of files) {
      const svgPath = path.join(group.svgDir, file);
      const pngFilename = file.replace(/\.svg$/, ".png");
      const pngPath = path.join(group.pngDir, pngFilename);

      try {
        const svgBuffer = fs.readFileSync(svgPath);

        // 600 DPI rendering outputting 2160x2160 Ultra-HD resolution
        await sharp(svgBuffer, { density: 600 })
          .resize(2160, 2160, { fit: "contain", kernel: "lanczos3" })
          .png({ quality: 100, compressionLevel: 6 })
          .toFile(pngPath);

        const stats = fs.statSync(pngPath);
        const kbSize = Math.round(stats.size / 1024);
        console.log(`✓ [600 DPI Ultra-HD] ${pngFilename} (${kbSize} KB)`);
      } catch (err) {
        console.error(`✗ Error exporting ${file}:`, err);
      }
    }
    console.log("");
  }

  console.log("====================================================");
  console.log("All SVGs successfully exported to 600 DPI Ultra-HD PNGs!");
  console.log("====================================================");
}

export600DPI();
