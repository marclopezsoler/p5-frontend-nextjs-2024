import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const products = [
      {
        Name: "Air Force 1",
        Price: 120,
        Description:
          "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
        Color: "White",
        Seller: "Nike",
        Category: "Clothing",
      },
      {
        Name: "Dri-FIT Fly",
        Price: 40,
        Description:
          "From the gym, to the trail, to the course—this Nike Fly cap is ready for it all. The 5-panel low-depth design features stretchy, sweat-wicking fabric that will keep you fresh through every move.",
        Color: "white",
        Seller: "Nike",
        Category: "Clothing",
      },
      {
        Name: "iPhone 15 Pro",
        Price: 1450,
        Description:
          "iPhone 15 Pro is the first iPhone to feature an aerospace‑grade titanium design, using the same alloy that spacecraft use for missions to Mars.",
        Color: "Black",
        Seller: "Apple",
        Category: "Technology",
      },
      {
        Name: "MacBook Air",
        Price: 2160,
        Description:
          "MacBook Air sails through work and play — and the M3 chip brings even greater capabilities to the world’s most popular laptop.",
        Color: "Titanium",
        Seller: "Apple",
        Category: "Technology",
      },
      {
        Name: "NÄMMARÖ",
        Price: 20,
        Description:
          "Create a comfy living room feel outdoors with NÄMMARÖ series. With everything you need for chill moments, long dinners and cheerful summer parties, no matter if you have a balcony, terrace or garden.",
        Color: "brown",
        Seller: "IKEA",
        Category: "Furniture",
      },
      {
        Name: "FRÖSÖN/DUVHOLMEN",
        Price: 42,
        Description:
          "Separate covers makes it easy to renew your outdoor furniture when you like. These are made of recycled PET bottles and dyed in a more sustainable way, which also makes the colour last longer in the sun.",
        Color: "white",
        Seller: "IKEA",
        Category: "Furniture",
      },
      {
        Name: "Redmi Note 12 Pro",
        Price: 200,
        Description:
          "Built on a flagship-level 6nm process, Redmi Note 12 delivers smooth and boosted performance with a powerful 6nm Snapdragon® 685 from Qualcomm.",
        Color: "white",
        Seller: "Xiaomi",
        Category: "Technology",
      },
      {
        Name: "POCO F5",
        Price: 280,
        Description:
          "The POCO F5 not only comes with 8GB and 12GB RAM versions, but can also be expanded to 19GB* using idle ROM to unlock even faster speeds.",
        Color: "black",
        Seller: "Xiaomi",
        Category: "Technology",
      },
      {
        Name: "EFV-C120D-2A",
        Price: 120,
        Description:
          "Feel the freedom to focus on your life. Get the EFV-C120 analog-digital combination watch that includes a 10-year battery life that you won't have to worry about for a long time.",
        Color: "blue",
        Seller: "Casio",
        Category: "Technology",
      },
      {
        Name: "MRG-B2000SG-1A",
        Price: 6600,
        Description:
          "Celebrate G-SHOCK's 40th anniversary with the distinction and elegance of this limited edition model from G-SHOCK's flagship MR-G range, a tribute to craftsmanship.",
        Color: "black",
        Seller: "Casio",
        Category: "Technology",
      },
      {
        Name: "Sony PlayStation 6",
        Price: 599,
        Description:
          "Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, and an all-new generation of incredible PlayStation games.",
        Color: "Black",
        Seller: "Sony",
        Category: "Gaming",
      },
      {
        Name: "Bose QuietComfort 45",
        Price: 329,
        Description:
          "Bose QuietComfort 45 wireless headphones feature world-class noise cancelling and acoustic sound. A finely tuned balance of comfort and durability. Available in Black and White.",
        Color: "Black",
        Seller: "Bose",
        Category: "Audio",
      },
      {
        Name: "GoPro HERO 12",
        Price: 499,
        Description:
          "With unshakeable HyperSmooth 5.0 stabilization and built-in mounting, HERO 12 is ready to go wherever you go. Perfect for capturing life's adventures in stunning detail.",
        Color: "Black",
        Seller: "GoPro",
        Category: "Photography",
      },
      {
        Name: "Samsung Galaxy Z Fold 5",
        Price: 1799,
        Description:
          "Samsung Galaxy Z Fold 5 combines the portability of a smartphone and the immersive viewing experience of a tablet. Packed with cutting-edge technology and powered by a Snapdragon 9 Gen 3 processor.",
        Color: "Phantom Black",
        Seller: "Samsung",
        Category: "Technology",
      },
      {
        Name: "Nike Air Jordan 4 Retro",
        Price: 200,
        Description:
          "The Air Jordan 4 Retro brings back the classic mid-1980s basketball shoe, offering premium materials and Nike Air cushioning for comfort on and off the court.",
        Color: "White/Cement Grey",
        Seller: "Nike",
        Category: "Clothing",
      },
      {
        Name: "Rolex Submariner Date",
        Price: 9500,
        Description:
          "The ultimate reference watch for divers, the Rolex Submariner Date offers a durable design, water resistance up to 300 meters, and a distinctive black dial with luminescent hour markers.",
        Color: "Steel",
        Seller: "Rolex",
        Category: "Accessories",
      },
      {
        Name: "Leica Q2 Monochrom",
        Price: 5995,
        Description:
          "Leica Q2 Monochrom is a full-frame compact camera with a dedicated black-and-white sensor, delivering unparalleled image quality and creative control for monochrome photography.",
        Color: "Black",
        Seller: "Leica",
        Category: "Photography",
      },
      {
        Name: "DJI Mavic 5 Pro",
        Price: 1499,
        Description:
          "DJI Mavic 5 Pro combines 4K video recording, advanced obstacle sensing, and a compact foldable design. Perfect for capturing stunning aerial footage with ease.",
        Color: "Gray",
        Seller: "DJI",
        Category: "Technology",
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
