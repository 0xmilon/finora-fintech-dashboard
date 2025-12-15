import { readdir, mkdir, readFile, writeFile } from "fs/promises";
import { join, dirname, basename, extname } from "path";
import { $ } from "bun";

const SRC_DIR = "./src";
const DIST_DIR = "./dist";
const COMPONENTS_DIR = join(SRC_DIR, "components");
const PAGES_DIR = join(SRC_DIR, "pages");
const LAYOUT_DIR = join(SRC_DIR, "layout");

async function buildHtml() {
    console.log("🏗️  Building HTML...");

    // Ensure dist exists
    await mkdir(DIST_DIR, { recursive: true });

    // Get all pages
    const files = await readdir(PAGES_DIR);
    const htmlFiles = files.filter((f) => f.endsWith(".html"));

    for (const file of htmlFiles) {
        const filePath = join(PAGES_DIR, file);
        let content = await readFile(filePath, "utf-8");

        // Process Layout (simplified: wrap content in layout if indicated, or just manual include)
        // For now, let's assume pages might start with a layout directive or just use includes.
        // We'll stick to 'include' for simplicity and flexibility.

        // Process Includes with recursion support (1 level deep for now to avoid infinite loops easily)
        content = await processIncludes(content);

        // Write to dist
        await writeFile(join(DIST_DIR, file), content);
        console.log(`✅ Wrote ${file}`);
    }
}

async function processIncludes(content: string): Promise<string> {
    const includeRegex = /<!--\s*include:\s*['"](.+?)['"]\s*-->/g;

    // Replace all occurrences
    const replacements = await Promise.all(
        Array.from(content.matchAll(includeRegex)).map(async (match) => {
            const componentName = match[1];
            const componentPath = join(COMPONENTS_DIR, componentName.endsWith('.html') ? componentName : `${componentName}.html`);

            try {
                let componentContent = await readFile(componentPath, "utf-8");
                // Recursive processing? nice to have.
                // componentContent = await processIncludes(componentContent); 
                return { match: match[0], content: componentContent };
            } catch (e) {
                console.error(`⚠️  Component not found: ${componentPath}`);
                return { match: match[0], content: `<!-- Error found component: ${componentName} -->` };
            }
        })
    );

    let newContent = content;
    for (const rep of replacements) {
        newContent = newContent.replace(rep.match, rep.content);
    }

    return newContent;
}

async function buildCss() {
    console.log("🎨 Building CSS...");
    try {
        await $`bun x tailwindcss -i ./src/styles/input.css -o ./dist/styles.css --minify`;
        console.log("✅ CSS Built");
    } catch (e) {
        console.error("❌ CSS Build Failed", e);
    }
}

async function main() {
    const start = performance.now();

    await Promise.all([
        buildHtml(),
        buildCss()
    ]);

    const end = performance.now();
    console.log(`✨ Build finished in ${(end - start).toFixed(2)}ms`);
}

main();
