import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = {
  largeDesktop: { width: 1920, height: 1080 },
  desktop: { width: 1440, height: 810 },
  tablet: { width: 1024, height: 576 },
  mobile: { width: 450, height: 700 },
};

async function optimiseImage(inputPath, outputDir, baseName) {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true }).catch(() => {});

    for (const [size, dimensions] of Object.entries(sizes)) {
      const outputPath = path.join(outputDir, `${baseName}-${size}.webp`);

      console.log(`Processing ${size} image for ${baseName}...`);

      await sharp(inputPath)
        .resize(dimensions.width, dimensions.height, {
          fit: "cover",
          position: "center",
        })
        .webp({
          quality: 75,
          effort: 6,
        })
        .toFile(outputPath);

      const stats = await fs.stat(outputPath);
      console.log(`Created ${size} image: ${(stats.size / 1024).toFixed(2)}KB`);
    }

    console.log(`Finished processing ${baseName}`);
  } catch (error) {
    console.error(`Error processing ${baseName}:`, error);
  }
}

async function processHeroImages() {
  const images = [
    {
      input: "public/hero/handShake.webp",
      output: "public/hero",
      baseName: "handShake",
    },
    {
      input: "public/hero/graph.webp",
      output: "public/hero",
      baseName: "graph",
    },
  ];

  for (const image of images) {
    await optimiseImage(image.input, image.output, image.baseName);
  }
}

processHeroImages()
  .then(() => {
    console.log("All hero images processed successfully!");
  })
  .catch((err) => {
    console.error("Error processing images:", err);
  });
