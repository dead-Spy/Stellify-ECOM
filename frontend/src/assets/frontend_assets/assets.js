import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
//import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
//import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
//import razorpay_logo from './razorpay_logo.png'
//import stripe_logo from './stripe_logo.png'
//import cross_icon from './cross_icon.png'

const product_assets = {};
for (let i = 1; i <= 116; i++) {
  // পাথ থেকে 'selected Product/' সরিয়ে সরাসরি './' করা হয়েছে
  product_assets[`p_img${i}`] = new URL(`./pro_img${i}.jpg`, import.meta.url).href;
}

// Special Case: p_img2_1 থেকে p_img2_4 এর জন্য পাথ ঠিক করা হলো
for (let j = 1; j <= 4; j++) {
  product_assets[`p_img2_${j}`] = new URL(`./pro_img2_${j}.jpg`, import.meta.url).href;
}

export const assets = {
    ...product_assets,
    logo, hero_img, cart_icon, contact_img, bin_icon, dropdown_icon, exchange_icon,
    profile_icon, search_icon, 
    menu_icon, about_img,
    star_icon: logo, 
    star_dull_icon: logo 
};

// আপনার প্রোডাক্ট লিস্টের জন্য ডেসট্রাকচারিং অংশটি একই রাখা হয়েছে
const { 
p_img1, p_img2, p_img3, p_img4, p_img5,
p_img6, p_img7, p_img8, p_img9, p_img10, p_img11, p_img12, p_img13,
p_img14, p_img15, p_img16, p_img17, p_img18, p_img19, p_img20, p_img21,
p_img22, p_img23, p_img24, p_img25, p_img26, p_img27, p_img28, p_img29,
p_img30, p_img31, p_img32, p_img33, p_img34, p_img35, p_img36, p_img37,
p_img38, p_img39, p_img40, p_img41, p_img42, p_img43, p_img44, p_img45,
p_img46, p_img47, p_img48, p_img49, p_img50, p_img51, p_img52, p_img53,
p_img54, p_img55, p_img56, p_img57, p_img58, p_img59, p_img60, p_img61,
p_img62, p_img63, p_img64, p_img65, p_img66, p_img67, p_img68, p_img69,
p_img70, p_img71, p_img72, p_img73, p_img74, p_img75, p_img76, p_img77,
p_img78, p_img79, p_img80, p_img81, p_img82, p_img83, p_img84, p_img85,
p_img86, p_img87, p_img88, p_img89, p_img90, p_img91, p_img92, p_img93,
p_img94, p_img95, p_img96, p_img97, p_img98, p_img99, p_img100, p_img101,
p_img102, p_img103, p_img104, p_img105, p_img106, p_img107, p_img108,
p_img109, p_img110, p_img111, p_img112, p_img113, p_img114, p_img115,
p_img116
} = product_assets;
// এখান থেকে আপনার 'export const products = [' শুরু হবে। নিচের কিছু মুছবেন না।

export const products = [
    {
        _id: "pro_id1",
        name: "Lilac Whisper",
        description: "Calm, elegant, and effortlessly graceful — this lavender bangle feels like a breath of serenity. The silk wrapping adds a touch of softness, while the golden lattice shines with quiet charm. It's a gentle reminder that beauty often speaks in whispers.",
        price: 100,
        image: [p_img57],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "pro_id2",
        name: "Eclipse Dune",
        description: "A bold and earthy interplay of tones, exuding tribal-inspired charm and rich cultural texture, elevated by glimmering gold-tone studs that infuse the piece with a refined touch of modern elegance and allure.",
        price: 200,
        image: [p_img72],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "pro_id3",
        name: "COWRIE CHARM",
        description: "A handcrafted, minimalist bangle, inviting you to touch and feel the beauty of natural materials. The smooth, cool touch of creamy pearls contrasts with the warm, textured feel of earthy jute, creating a sensory delight",
        price: 220,
        image: [p_img3],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "pro_id4",
        name: "Modern Bangles",
        description: "These unique bangles are meticulously crafted using a combination of smooth, rich fabric and natural jute twine. The square frames are adorned with subtle beading and a metallic accent, creating a striking contrast. A perfect accessory for adding a touch of artisanal charm and contemporary flair to any outfit.",
        price: 110,
        image: [p_img4],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "pro_id5",
        name: "Braid Bangles",
        description: "A handcrafted minimalist piece that invites you to experience the contrast of smooth pearls and textured earthy jute",
        price: 130,
        image: [p_img5],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "pro_id6",
        name: "COWRIE CHARM",
        description: "A handcrafted, minimalist bagel, inviting you to touch and feel the beauty of natural materials. The smooth, cool touch of creamy pearls contrasts with the warm, textured feel of earthy jute, creating a sensory delight.",
        price: 140,
        image: [p_img6],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "pro_id7",
        name: "Modern Bangles",
        description: "These unique bangles are meticulously crafted using a combination of smooth, rich fabric and natural jute twine. The square frames are adorned with subtle beading and a metallic accent, creating a striking contrast. A perfect accessory for adding a touch of artisanal charm and contemporary flair to any outfit.",
        price: 190,
        image: [p_img7],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "pro_id8",
        name: "ThreadNest",
        description: "These vibrant bangles are a celebration of color and movement. Handcrafted with a striking color combination and adorned with playful bells, they add a touch of playful elegance and auditory delight to any outfit. Whether you’re dancing, walking, or simply moving through your day, these bangles will add a cheerful rhythm to your steps.",
        price: 140,
        image: [p_img8],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "pro_id9",
        name: "ThreadNest",
        description: "These vibrant bangles are a celebration of color and movement. Handcrafted with a striking color combination and adorned with playful bells, they add a touch of playful elegance and auditory delight to any outfit. Whether you’re dancing, walking, or simply moving through your day, these bangles will add a cheerful rhythm to your steps.",
        price: 140,
        image: [p_img54],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "pro_id10",
        name: "MYSTICAL",
        description: "This set of black thread-wrapped bangles features bold gold-toned triangular embellishments with warm amber inlays. Perfect for adding a touch of modern elegance and drama.",
        price: 110,
        image: [p_img10],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "pro_id11",
        name: "LUSTROUS",
        description: "This set of handcrafted bangles features a beautifully textured, natural-toned thread wrap, adorned with polished stones, geometric metallic accents, and delicate floral motifs. Perfect for adding a touch of artisanal elegance to any outfit.",
        price: 150,
        image: [p_img12],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "pro_id12",
        name: "LUSTROUS",
        description: "This set of handcrafted bangles features a beautifully textured, natural-toned thread wrap, adorned with polished stones, geometric metallic accents, and delicate floral motifs. Perfect for adding a touch of artisanal elegance to any outfit.",
        price: 150,
        image: [p_img55],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "pro_id13",
        name: "RADIANT",
        description: "This set of red thread-wrapped bangles features intricate gold-toned floral motifs. Perfect for adding a touch of festive elegance and cultural richness to your look, creating a statement of handcrafted style.",
        price: 130,
        image: [p_img13],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "pro_id14",
        name: "SHINNING",
        description: "This set of turquoise thread-wrapped bangles features delicate mirror work framed by pink thread detailing. Perfect for adding a touch of bohemian chic and vibrant color to your look.",
        price: 160,
        image: [p_img14],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "pro_id15",
        name: "Modern-Traditional Bangles",
        description: "These unique bangles are meticulously crafted using traditional techniques. The square frames are woven with colorful threads and embellished with tiny beads, creating a striking contrast. A perfect accessory for adding a pop of color and a touch of artisanal charm to any outfit.",
        price: 140,
        image: [p_img15],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "pro_id16",
        name: "COWRIE CHARM",
        description: "A handcrafted, minimalist bagel, inviting you to touch and feel the beauty of natural materials. The smooth, cool touch of creamy pearls contrasts with the warm, textured feel of earthy jute, creating a sensory delight.",
        price: 170,
        image: [p_img16],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "pro_id17",
        name: "ThreadNest",
        description: "These vibrant bangles are a celebration of color and movement. Handcrafted with a striking color combination and adorned with playful bells, they add a touch of playful elegance and auditory delight to any outfit. Whether you’re dancing, walking, or simply moving through your day, these bangles will add a cheerful rhythm to your steps.",
        price: 140,
        image: [p_img58],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "pro_id18",
        name: "LUSTROUS",
        description: "This set of handcrafted bangles features a beautifully textured, natural-toned thread wrap, adorned with polished stones, geometric metallic accents, and delicate floral motifs. Perfect for adding a touch of artisanal elegance to any outfit.",
        price: 150,
        image: [p_img66],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "pro_id19",
        name: "LUSTROUS",
        description: "This set of handcrafted bangles features a beautifully textured, natural-toned thread wrap, adorned with polished stones, geometric metallic accents, and delicate floral motifs. Perfect for adding a touch of artisanal elegance to any outfit.",
        price: 150,
        image: [p_img86],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "pro_id20",
        name: "PEACHY GRACE",
        description: "The bangles themselves are the focal point. Each bangle is crafted with a base material that appears to be wrapped in a delicate, peach or light coral-colored thread or yarn. This wrapping creates a soft, textured look.",
        price: 190,
        image: [p_img20],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716633245448,
        bestseller: false
    },
    {
        _id: "pro_id21",
        name: "LUMINOUS",
        description: "This set of off-white thread-wrapped bangles features delicate pink oval beads and floral bead clusters. Perfect for adding a touch of subtle color and artisanal charm to your look.",
        price: 170,
        image: [p_img21],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "pro_id22",
        name: "GLEAMING",
        description: "Add a touch of feminine charm with this stack of pink thread-wrapped bangles. Featuring delicate floral bead clusters and polished oval beads, this set is perfect for adding a pop of color and texture to your look.",
        price: 200,
        image: [p_img22],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716635445448,
        bestseller: false
    },
    {
        _id: "pro_id23",
        name: "LUSTROUS",
        description: "This set of handcrafted bangles features a beautifully textured, natural-toned thread wrap, adorned with polished stones, geometric metallic accents, and delicate floral motifs. Perfect for adding a touch of artisanal elegance to any outfit.",
        price: 180,
        image: [p_img23],
        category: "Kids",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716636545448,
        bestseller: false
    },
    {
        _id: "pro_id24",
        name: "LUMINOUS",
        description: "This set of off-white thread-wrapped bangles features delicate pink oval beads and floral bead clusters. Perfect for adding a touch of subtle color and artisanal charm to your look.",
        price: 210,
        image: [p_img24],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716637645448,
        bestseller: false
    },
    {
        _id: "pro_id25",
        name: "GLEAMING",
        description: "Add a touch of feminine charm with this stack of pink thread-wrapped bangles. Featuring delicate floral bead clusters and polished oval beads, this set is perfect for adding a pop of color and texture to your look.",
        price: 190,
        image: [p_img25],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716638745448,
        bestseller: false
    },
    {
        _id: "pro_id26",
        name: "DARK AURA",
        description: "Exquisitely crafted, this pair of bangles presents a unique fusion of traditional artistry and modern minimalism. The rich, velvety black thread serves as a refined canvas, providing a striking contrast to the precisely aligned, shimmering fuchsia rhinestones that encircle each piece.",
        price: 220,
        image: [p_img78],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716639845448,
        bestseller: false
    },
    {
        _id: "pro_id27",
        name: "ÉCLAT VANTA",
        description: "Crafted with precision and passion, Aurika Noir is a stunning set of handcrafted bangles that capture the essence of duality light and dark, modern and classic. Wrapped in luxurious black and white threads, each bangle is adorned with delicately placed golden floral motifs",
        price: 200,
        image: [p_img98],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716640945448,
        bestseller: false
    },
    {
        _id: "pro_id28",
        name: "ROSY RUSTIC",
        description: "This set includes three handmade bangles featuring a soft, wrapped texture in red and white. Each bangle is adorned with delicate pearl clusters arranged in floral motifs, adding a touch of elegance and sophistication.",
        price: 230,
        image: [p_img33],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716642045448,
        bestseller: false
    },
    {
        _id: "pro_id29",
        name: "LOOMAURA",
        description: "This striking trio of handcrafted bangles features a unified base tone, brought to life through varied embellishments and textures. The top and bottom bangles are adorned with a repeating pattern of diamond-shaped metallic studs, designed to reflect light with every movement.",
        price: 210,
        image: [p_img35],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716643145448,
        bestseller: false
    },
    {
        _id: "pro_id30",
        name: "TRESSORA",
        description: "A pair of handcrafted light blue and golden yellow silk thread bangles, embellished with a repeating geometric pattern outlined in teal blue thread and accented with small, round, golden-toned Kundan work studs.",
        price: 240,
        image: [p_img77],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716644245448,
        bestseller: false
    },
    {
        _id: "pro_id31",
        name: "ORVIA",
        description: "Celebrate style and sparkle with the Ruby Radiance bangle. A rich red silk band at the center is adorned with faceted rhinestones and kundan stones set in gold, while crisp white edges and tiny golden bead borders add luxe detailing. This festive bangle radiates glamour, perfect for special occasions and traditional celebrations.",
        price: 220,
        image: [p_img108],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "pro_id32",
        name: "ROYAL WEAVE",
        description: "A timeless nod to tradition, this bold cuff-style bangle shines in rich, vibrant colors—Rani Pink, classic black, serene turquoise, and pure white. Wrapped meticulously in silk thread, each piece flaunts a delicate lattice of golden threadwork, adorned with light like precious stars.",
        price: 250,
        image: [p_img102],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716646445448,
        bestseller: false
    },
    {
        _id: "pro_id33",
        name: "BLACK MAJESTY ",
        description: "Draped in the timeless elegance of deep black silk, this handcrafted cuff bangle radiates power and refinement. Fine golden threads weave across its surface in a precise crisscross pattern, forming diamond-shaped windows of symmetry and grace. At every intersection, tiny golden square embellishments catch the light.",
        price: 230,
        image: [p_img67],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716647545448,
        bestseller: false
    },
    {
        _id: "pro_id34",
        name: "MONOCHROME MUSE",
        description: "Boldly monochrome and eternally chic, this piece blends crisp black with soft ivory for a look that is as versatile as it is sophisticated. Perfect for making a statement with understated luxury.",
        price: 260,
        image: [p_img56],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716648645448,
        bestseller: false
    },
    {
        _id: "pro_id35",
        name: "ZIVARA THREADS",
        description: "This handcrafted trio of wide bangles is designed to stand out through its layered contrast and textured elegance. Each bangle is meticulously wrapped in fine thread, showcasing subtle variations in tone that create a beautiful gradient-like effect.",
        price: 240,
        image: [p_img79],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716649745448,
        bestseller: false
    },
    {
        _id: "pro_id36",
        name: "ARIA",
        description: "This set of handcrafted bangles features a rich, dual-tone thread wrap in espresso and cream, adorned with antique gold geometric accents and structured metallic borders. Perfect for adding a bold, earthy sophistication to any traditional or fusion ensemble.",
        price: 270,
        image: [p_img76],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716650845448,
        bestseller: false
    },
    {
        _id: "pro_id37",
        name: "ARISHA",
        description: "This bangle is a true mark of royalty, crafted with timeless artistry. Adorned with deep ruby-red stones, delicate pearls, and intricate mirror inlays, it carries the aura of a queen’s treasure. The golden framework highlights the richness of heritage while the symmetrical floral patterns symbolize grace and nobility.",
        price: 250,
        image: [p_img109],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716651945448,
        bestseller: false
    },
    {
        _id: "pro_id38",
        name: "ROYAL EMBER",
        description: "A symbol of regality and devotion, this bangle blends the power of crimson with the purity of ivory. The red velvet bands evoke passion and strength, while the central mirror stone reflects grace and light. Detailed with pearls and golden accents, the design carries the elegance of Mughal artistry and the richness of traditional heritage.",
        price: 280,
        image: [p_img110],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716653045448,
        bestseller: false
    },
    {
        _id: "pro_id39",
        name: "ALEENA",
        description: "This set of handcrafted bangles features a rich, dual-tone thread wrap in espresso and cream, adorned with antique gold geometric accents and structured metallic borders. Perfect for adding a bold, earthy sophistication to any traditional or fusion ensemble.",
        price: 260,
        image: [p_img39],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716654145448,
        bestseller: false
    },
    {
        _id: "pro_id40",
        name: "SEHRISH",
        description: "This set of handcrafted bangles features a lustrous, dual-tone silk thread wrap in royal indigo and electric turquoise, adorned with sparkling square-cut crystals, geometric metallic accents, and intricate kundan floral motifs.",
        price: 290,
        image: [p_img40],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716655245448,
        bestseller: false
    },
    {
        _id: "pro_id41",
        name: "RUHANI",
        description: "Wrapped in deep crimson threads and highlighted with intricate golden accents, Ruhani radiates timeless elegance. The central motif, adorned with shimmering stones and lustrous pearls, creates a focal point of regal beauty, perfect for the woman who embraces heritage with grace.",
        image: [p_img41],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "pro_id42",
        name: "ZAINA",
        description: "Midnight black meets scarlet red in Zaina, a bangle that captures boldness and grace in perfect harmony. The hand-twined golden lattices are arranged in intricate geometric patterns, offering a refined, traditional touch to its striking color palette.",
        price: 270,
        price: 300,
        image: [p_img42],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716657445448,
        bestseller: false
    },
    {
        _id: "pro_id43",
        name: "LIYANA",
        description: "A soft, feminine delight, Liyana pairs gentle blue silk threads with intricate golden latticework to create a bangle that is both delicate and regal. The interplay of thread and metal reflects a dedication to craftsmanship, giving this piece a timeless appeal.",
        price: 280,
        image: [p_img43],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716658545448,
        bestseller: false
    },
    {
        _id: "pro_id44",
        name: "ZAREEN",
        description: "Wrapped in white threads and highlighted with intricate golden lattices, Zareen White radiates sophistication and femininity. The interplay of soft and shimmering gold threads creates a bangle that is timeless yet modern, perfect for women who appreciate subtle beauty.",
        price: 310,
        image: [p_img44],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716659645448,
        bestseller: false
    },
    {
        _id: "pro_id45",
        name: "SAHAR",
        description: "Elegant in its simplicity, the Sahar set captures the serene beauty of the early dawn. Featuring layers of metallic silver and cool grey thread work, it offers a subtle, liquid-metal shine that serves as a versatile and classy accessory.",
        price: 290,
        image: [p_img45],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716660745448,
        bestseller: false
    },
    {
        _id: "pro_id46",
        name: "ZARA",
        description: "The bangles themselves are the focal point. Each bangle is crafted with a base material that appears to be wrapped in a delicate, peach or light coral-colored thread or yarn. This wrapping creates a soft, textured look.",
        price: 320,
        image: [p_img46],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716661845448,
        bestseller: false
    },
    {
        _id: "pro_id47",
        name: "ZOYA",
        description: "Vibrant and full of life, the Zoya set features a rich emerald green base wrapped in textured thread. Accented with shimmering silver sequins and round mirrors, these bangles evoke the freshness of nature, perfect for a lively, traditional look.",
        price: 300,
        image: [p_img47],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716662945448,
        bestseller: false
    },
    {
        _id: "pro_id48",
        name: "PEACHY GRACE",
        description: "The bangles themselves are the focal point. Each bangle is crafted with a base material that appears to be wrapped in a delicate, peach or light coral-colored thread or yarn. This wrapping creates a soft, textured look.",
        price: 330,
        image: [p_img48],
        category: "Men",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716664045448,
        bestseller: false
    },
    {
        _id: "pro_id49",
        name: "SAFIR",
        description: "Luxurious and electrifying, the Safir set shines with a brilliant royal blue hue. Wrapped in silk thread and adorned with golden floral sequins, these bangles mimic the precious sapphire stone, adding a regal glow to your special occasions.",
        price: 310,
        image: [p_img49],
        category: "Kids",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716665145448,
        bestseller: false
    },
    {
        _id: "pro_id50",
        name: "AVANI",
        description: "This set of handcrafted bangles features a rich, dual-tone thread wrap in espresso and cream, adorned with antique gold geometric accents and structured metallic borders. Perfect for adding a bold, earthy sophistication to any traditional or fusion ensemble.",
        price: 340,
        image: [p_img50],
        category: "Kids",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716666245448, bestseller: false
    },
    {
        _id: "pro_id51",
        name: "RAYNA",
        description: "A vibrant celebration of color, this set showcases a stunning fusion of tangerine and marigold yellow silk threads. The radiant base is accented with sparkling crystal spacers and golden textured borders, capturing the golden hour glow. It is an ideal choice for Haldi ceremonies.",
        price: 320,
        image: [p_img51],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716667345448,
        bestseller: false
    },
    {
        _id: "pro_id52",
        name: "MAIRA",
        description: "Capturing the essence of blooming gardens, this set blends lively parrot green with deep emerald undertones in a seamless thread wrap. The smooth matte finish is punctuated by detailed gold-plated dividers and stone-encrusted accents, offering a fresh, spirited look.",
        price: 350,
        image: [p_img52],
        category: "Women",
        subCategory: "Bangles",
        sizes: ["2.6", "2.8", "2.4", "2.10"],
        date: 1716668445448,
        bestseller: false
    }

]