import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    // Creation of 5 seller
    const sellers = [
      { email: "contact@nike.com", name: "Nike" },
      { email: "support@apple.com", name: "Apple" },
      { email: "info@ikea.com", name: "Ikea" },
      { email: "contact@xiaomi.com", name: "Xiaomi" },
      { email: "support@casio.com", name: "Casio" },
    ];

    for (const sellerData of sellers) {
      await prisma.seller.create({
        data: sellerData,
      });
    }

    // Creation of 10 products

    const products = [
      {
        name: "Air Force 1",
        price: 120,
        description:
          "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
        color: "White",
        sellerId: 1,
      },
      {
        name: "Dri-FIT Fly",
        price: 40,
        description:
          "From the gym, to the trail, to the course—this Nike Fly cap is ready for it all. The 5-panel low-depth design features stretchy, sweat-wicking fabric that will keep you fresh through every move.",
        color: "white",
        sellerId: 1,
      },
      {
        name: "iPhone 15 Pro",
        price: 1450,
        description:
          "iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.",
        color: "Black",
        sellerId: 2,
      },
      {
        name: "MacBook Air",
        price: 2160,
        description:
          "MacBook Air sails through work and play — and the M3 chip brings even greater capabilities to the world’s most popular laptop.",
        color: "Titanium",
        sellerId: 2,
      },
      {
        name: "NÄMMARÖ",
        price: 20,
        description:
          "Create a comfy living room feel outdoors with NÄMMARÖ series. With everything you need for chill moments, long dinners and cheerful summer parties, no matter if you have a balcony, terrace or garden.",
        color: "brown",
        sellerId: 3,
      },
      {
        name: "FRÖSÖN/DUVHOLMEN",
        price: 42,
        description:
          "Separate covers makes it easy to renew your outdoor furniture when you like. These are made of recycled PET bottles and dyed in a more sustainable way, which also makes the colour last longer in the sun.",
        color: "white",
        sellerId: 3,
      },
      {
        name: "Redmi Note 12 Pro",
        price: 200,
        description:
          "Built on a flagship-level 6nm process, Redmi Note 12 delivers smooth and boosted performance with a powerful 6nm Snapdragon® 685 from Qualcomm.",
        color: "white",
        sellerId: 4,
      },
      {
        name: "POCO F5",
        price: 280,
        description:
          "The POCO F5 not only comes with 8GB and 12GB RAM versions, but can also be expanded to 19GB* using idle ROM to unlock even faster speeds.",
        color: "black",
        sellerId: 4,
      },
      {
        name: "EFV-C120D-2A",
        price: 120,
        description:
          "Feel the freedom to focus on your life. Get the EFV-C120 analog-digital combination watch that includes a 10-year battery life that you won't have to worry about for a long time.",
        color: "blue",
        sellerId: 5,
      },
      {
        name: "MRG-B2000SG-1A",
        price: 6600,
        description:
          "Celebrate G-SHOCK's 40th anniversary with the distinction and elegance of this limited edition model from G-SHOCK's flagship MR-G range, a tribute to craftsmanship.",
        color: "black",
        sellerId: 5,
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
