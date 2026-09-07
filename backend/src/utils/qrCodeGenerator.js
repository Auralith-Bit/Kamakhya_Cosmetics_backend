import bwipjs from "bwip-js";
import sharp from "sharp";

function wrapText(text, maxCharsPerLine = 36) {
    const words = String(text || "").trim().split(/\s+/);
    const lines = [];
    let currentLine = "";

    for (const word of words) {
        if ((currentLine + " " + word).trim().length <= maxCharsPerLine) {
            currentLine = (currentLine + " " + word).trim();
        } else {
            if (currentLine) lines.push(currentLine);
            currentLine = word;
        }
    }
    if (currentLine) lines.push(currentLine);
    return lines.length > 0 ? lines : [""];
}

const escapeXml = (str) =>
    String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

/**
 * Generates a full QR Code label image containing:
 * - Solid white background
 * - Outer card border
 * - Product Title
 * - Brand Name
 * - Centered high-resolution QR Code
 * - Scan hint / Target link indicator
 * 
 * @param {string} url - The customer product URL to encode in the QR code
 * @param {object} metadata - Optional metadata { title, brand, width, height }
 * @returns {Promise<Buffer>} PNG image buffer
 */
export const generateQrCode = async (url, metadata = {}) => {
    const { title = "", brand = "", width = 600, height = 620 } = metadata;
    const brandText = Array.isArray(brand) ? brand.join(", ") : (brand || "N/A");
    const titleText = title || "Product Name";
    const targetUrl = url || "";

    // 1. Generate clean high-res QR code image buffer (bwip-js)
    const qrBuffer = await bwipjs.toBuffer({
        bcid: "qrcode",
        text: targetUrl,
        scale: 6,
        includetext: false,
        backgroundcolor: "ffffff",
        barcolor: "000000",
        paddingwidth: 1,
        paddingheight: 1,
    });

    const qrBase64 = `data:image/png;base64,${qrBuffer.toString("base64")}`;

    const safeBrand = escapeXml(brandText);

    // Support 1 or 2 lines for title if long
    const titleLines = wrapText(titleText, 36).slice(0, 2);
    const isMultiLineTitle = titleLines.length > 1;

    // Layout positioning
    const titleY = 48;
    const titleLine2Y = 72;
    const divider1Y = isMultiLineTitle ? 88 : 64;
    const brandY = divider1Y + 30;
    const divider2Y = brandY + 16;
    
    // QR Code display area
    const qrSize = 340;
    const qrX = (width - qrSize) / 2;
    const qrY = divider2Y + 18;
    
    const hintY = qrY + qrSize + 28;
    const totalCalculatedHeight = Math.max(height, hintY + 28);

    const titleSvg = isMultiLineTitle
        ? `
      <text x="32" y="${titleY}" class="field-label">Product:</text>
      <text x="106" y="${titleY}" class="field-val">${escapeXml(titleLines[0])}</text>
      <text x="106" y="${titleLine2Y}" class="field-val">${escapeXml(titleLines[1])}</text>
    `
        : `
      <text x="32" y="${titleY}" class="field-label">Product:</text>
      <text x="106" y="${titleY}" class="field-val">${escapeXml(titleLines[0])}</text>
    `;

    const svg = `
    <svg width="${width}" height="${totalCalculatedHeight}" viewBox="0 0 ${width} ${totalCalculatedHeight}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .bg { fill: #ffffff; }
        .border-box { fill: #ffffff; stroke: #111111; stroke-width: 2.5; rx: 10px; }
        .divider { stroke: #111111; stroke-width: 1.8; }
        .field-label { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-weight: 700; fill: #000000; }
        .field-val { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-weight: 500; fill: #111111; }
        .brand-val { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-weight: 600; fill: #000000; }
        .hint-text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 14px; font-weight: 600; fill: #555555; text-anchor: middle; letter-spacing: 0.5px; }
      </style>

      <!-- Outer Canvas Background -->
      <rect width="${width}" height="${totalCalculatedHeight}" class="bg" />

      <!-- Label Border -->
      <rect x="16" y="16" width="${width - 32}" height="${totalCalculatedHeight - 32}" class="border-box" />

      <!-- Product Row -->
      ${titleSvg}

      <!-- Divider 1 -->
      <line x1="16" y1="${divider1Y}" x2="${width - 16}" y2="${divider1Y}" class="divider" />

      <!-- Brand Row -->
      <text x="32" y="${brandY}" class="field-label">Brand:</text>
      <text x="92" y="${brandY}" class="brand-val">${safeBrand}</text>

      <!-- Divider 2 -->
      <line x1="16" y1="${divider2Y}" x2="${width - 16}" y2="${divider2Y}" class="divider" />

      <!-- QR Code Image -->
      <image x="${qrX}" y="${qrY}" width="${qrSize}" height="${qrSize}" href="${qrBase64}" preserveAspectRatio="xMidYMid meet" />

      <!-- Scan Instruction directly underneath -->
      <text x="${width / 2}" y="${hintY}" class="hint-text">📱 Scan with phone camera to view product</text>
    </svg>
    `;

    return await sharp(Buffer.from(svg)).png().toBuffer();
};

export default generateQrCode;
