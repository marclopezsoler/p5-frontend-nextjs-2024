import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const products = [
      {
        name: "Air Force 1",
        price: 120,
        description:
          "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
        color: "White",
        seller: "Nike",
        category: "Clothing",
      },
      {
        name: "Dri-FIT Fly",
        price: 40,
        description:
          "From the gym, to the trail, to the course—this Nike Fly cap is ready for it all. The 5-panel low-depth design features stretchy, sweat-wicking fabric that will keep you fresh through every move.",
        color: "white",
        seller: "Nike",
        category: "Clothing",
      },
      {
        name: "iPhone 15 Pro",
        price: 1450,
        description:
          "iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.",
        color: "Black",
        seller: "Apple",
        category: "Technology",
      },
      {
        name: "MacBook Air",
        price: 2160,
        description:
          "MacBook Air sails through work and play — and the M3 chip brings even greater capabilities to the world’s most popular laptop.",
        color: "Titanium",
        seller: "Apple",
        category: "Technology",
      },
      {
        name: "NÄMMARÖ",
        price: 20,
        description:
          "Create a comfy living room feel outdoors with NÄMMARÖ series. With everything you need for chill moments, long dinners and cheerful summer parties, no matter if you have a balcony, terrace or garden.",
        color: "brown",
        seller: "IKEA",
        category: "Furniture",
      },
      {
        name: "FRÖSÖN/DUVHOLMEN",
        price: 42,
        description:
          "Separate covers makes it easy to renew your outdoor furniture when you like. These are made of recycled PET bottles and dyed in a more sustainable way, which also makes the colour last longer in the sun.",
        color: "white",
        seller: "IKEA",
        category: "Furniture",
      },
      {
        name: "Redmi Note 12 Pro",
        price: 200,
        description:
          "Built on a flagship-level 6nm process, Redmi Note 12 delivers smooth and boosted performance with a powerful 6nm Snapdragon® 685 from Qualcomm.",
        color: "white",
        seller: "Xiaomi",
        category: "Technology",
      },
      {
        name: "POCO F5",
        price: 280,
        description:
          "The POCO F5 not only comes with 8GB and 12GB RAM versions, but can also be expanded to 19GB* using idle ROM to unlock even faster speeds.",
        color: "black",
        seller: "Xiaomi",
        category: "Technology",
      },
      {
        name: "EFV-C120D-2A",
        price: 120,
        description:
          "Feel the freedom to focus on your life. Get the EFV-C120 analog-digital combination watch that includes a 10-year battery life that you won't have to worry about for a long time.",
        color: "blue",
        seller: "Casio",
        category: "Technology",
      },
      {
        name: "MRG-B2000SG-1A",
        price: 6600,
        description:
          "Celebrate G-SHOCK's 40th anniversary with the distinction and elegance of this limited edition model from G-SHOCK's flagship MR-G range, a tribute to craftsmanship.",
        color: "black",
        seller: "Casio",
        category: "Technology",
      },
      {
        name: "Sony PlayStation 6",
        price: 599,
        description:
          "Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, and an all-new generation of incredible PlayStation games.",
        color: "Black",
        seller: "Sony",
        category: "Gaming",
      },
      {
        name: "Bose QuietComfort 45",
        price: 329,
        description:
          "Bose QuietComfort 45 wireless headphones feature world-class noise cancelling and acoustic sound. A finely tuned balance of comfort and durability. Available in Black and White.",
        color: "Black",
        seller: "Bose",
        category: "Audio",
      },
      {
        name: "GoPro HERO 12",
        price: 499,
        description:
          "With unshakeable HyperSmooth 5.0 stabilization and built-in mounting, HERO 12 is ready to go wherever you go. Perfect for capturing life's adventures in stunning detail.",
        color: "Black",
        seller: "GoPro",
        category: "Photography",
      },
      {
        name: "Samsung Galaxy Z Fold 5",
        price: 1799,
        description:
          "Samsung Galaxy Z Fold 5 combines the portability of a smartphone and the immersive viewing experience of a tablet. Packed with cutting-edge technology and powered by a Snapdragon 9 Gen 3 processor.",
        color: "Phantom Black",
        seller: "Samsung",
        category: "Technology",
      },
      {
        name: "Nike Air Jordan 4 Retro",
        price: 200,
        description:
          "The Air Jordan 4 Retro brings back the classic mid-1980s basketball shoe, offering premium materials and Nike Air cushioning for comfort on and off the court.",
        color: "White/Cement Grey",
        seller: "Nike",
        category: "Clothing",
      },
      {
        name: "Rolex Submariner Date",
        price: 9500,
        description:
          "The ultimate reference watch for divers, the Rolex Submariner Date offers a durable design, water resistance up to 300 meters, and a distinctive black dial with luminescent hour markers.",
        color: "Steel",
        seller: "Rolex",
        category: "Accessories",
      },
      {
        name: "Leica Q2 Monochrom",
        price: 5995,
        description:
          "Leica Q2 Monochrom is a full-frame compact camera with a dedicated black-and-white sensor, delivering unparalleled image quality and creative control for monochrome photography.",
        color: "Black",
        seller: "Leica",
        category: "Photography",
      },
      {
        name: "DJI Mavic 5 Pro",
        price: 1499,
        description:
          "DJI Mavic 5 Pro combines 4K video recording, advanced obstacle sensing, and a compact foldable design. Perfect for capturing stunning aerial footage with ease.",
        color: "Gray",
        seller: "DJI",
        category: "Technology",
      },
    ];

    for (const productData of products) {
      await prisma.product.create({
        data: productData,
      });
    }

    console.log("Seed data added successfully");
  } catch (error) {
    console.error("Error adding seed data:", error);
  }
}

main();
