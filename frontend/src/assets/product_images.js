const images = {};

for (let i = 1; i <= 116; i++) {
  images[`p_img${i}`] = new URL(`./selected Product/pro_img${i}.jpg`, import.meta.url).href;
}

export const product_assets = images;
