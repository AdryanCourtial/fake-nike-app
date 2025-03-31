import { Product } from "~/interface/products.interface";

export const fakeDataProduct = {
    id: 1,
    title: "Sleek White & Orange Wireless Gaming Controller",
    slug: "sleek-white-orange-wireless-gaming-controller",
    price: 100,
    description: "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play, the ergonomic shape and responsive buttons provide maximum comfort and control for endless hours of gameplay. Compatible with multiple gaming platforms, this controller is a must-have for any serious gamer looking to enhance their setup.",
    category: {
      id: 2,
      name: "Electronics",
      slug: "electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2025-03-30T16:01:21.000Z",
      updatedAt: "2025-03-30T16:01:21.000Z"
    },
    images: [
      "https://i.imgur.com/ZANVnHE.jpeg",
      "https://i.imgur.com/Ro5z6Tn.jpeg",
      "https://i.imgur.com/woA93Li.jpeg"
    ],
    creationAt: "2025-03-30T16:01:21.000Z",
    updatedAt: "2025-03-31T04:44:14.000Z"
  };

export const GenerateFakeElementProduct = (times: number): Array<Product> => {
    return Array.from({ length: times }, (_, index) => ({
        ...fakeDataProduct,
        id: index + 1, // ou utilise un uuid si tu veux
      }));
}