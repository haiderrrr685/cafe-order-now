import croissant from "@/assets/croissant.png";
import cookie from "@/assets/cookie.png";
import icedLatte from "@/assets/iced-latte.png";
import chocolateCake from "@/assets/chocolate-cake.png";
import creamPuff from "@/assets/cream-puff.png";
import icedAmericano from "@/assets/iced-americano.png";
import matchaLatte from "@/assets/matcha-latte.png";
import lemonTart from "@/assets/lemon-tart.png";
import tiramisu from "@/assets/tiramisu.png";
import strawberryDonut from "@/assets/strawberry-donut.png";
import cappuccino from "@/assets/cappuccino.png";
import pistachioCroissant from "@/assets/pistachio-croissant.png";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const categories = ["Pastries", "Coffee", "Desserts"];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Butter Croissant",
    description: "Flaky, golden, freshly baked every morning",
    price: 3.50,
    image: croissant,
    category: "Pastries",
  },
  {
    id: "2",
    name: "Pistachio Croissant",
    description: "Filled with creamy pistachio cream",
    price: 4.50,
    image: pistachioCroissant,
    category: "Pastries",
  },
  {
    id: "3",
    name: "Chocolate Chip Cookie",
    description: "Soft & chewy with premium chocolate chips",
    price: 1.99,
    image: cookie,
    category: "Pastries",
  },
  {
    id: "4",
    name: "Cream Puff",
    description: "Fluffy choux pastry with vanilla cream",
    price: 3.10,
    image: creamPuff,
    category: "Pastries",
  },
  {
    id: "5",
    name: "Strawberry Donut",
    description: "Glazed with strawberry icing & sprinkles",
    price: 1.99,
    image: strawberryDonut,
    category: "Pastries",
  },
  {
    id: "6",
    name: "Iced Caramel Latte",
    description: "Espresso with caramel drizzle over ice",
    price: 4.10,
    image: icedLatte,
    category: "Coffee",
  },
  {
    id: "7",
    name: "Iced Americano",
    description: "Bold espresso over ice, simple & refreshing",
    price: 1.88,
    image: icedAmericano,
    category: "Coffee",
  },
  {
    id: "8",
    name: "Cappuccino",
    description: "Rich espresso with steamed milk & foam art",
    price: 3.50,
    image: cappuccino,
    category: "Coffee",
  },
  {
    id: "9",
    name: "Iced Matcha Latte",
    description: "Premium matcha blended with oat milk over ice",
    price: 3.10,
    image: matchaLatte,
    category: "Coffee",
  },
  {
    id: "10",
    name: "Chocolate Fudge Cake",
    description: "Decadent layers of rich chocolate ganache",
    price: 6.99,
    image: chocolateCake,
    category: "Desserts",
  },
  {
    id: "11",
    name: "Lemon Tart",
    description: "Tangy lemon curd in a buttery golden crust",
    price: 4.70,
    image: lemonTart,
    category: "Desserts",
  },
  {
    id: "12",
    name: "Tiramisu",
    description: "Classic Italian layers of coffee & mascarpone",
    price: 5.70,
    image: tiramisu,
    category: "Desserts",
  },
];
