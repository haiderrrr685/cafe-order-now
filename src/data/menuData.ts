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
  image?: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const categories = [
  "Sandwiches",
  "Burgers",
  "Bruschetta",
  "Fries",
  "Hot Dogs",
  "Pav-wala",
  "Wings",
  "Fried Stuff",
  "Wraps",
  "Pizza",
  "Pasta",
  "Tex Mex Bowls",
  "Asian Bowls",
  "Veg Subs",
  "Non Veg Subs",
  "Salads",
  "Soups",
  "Sushi",
  "Specials",
  "Waffles",
  "Cakes",
  "Pastries",
  "Hot Coffee",
  "Cold Coffee",
  "Iced Tea",
  "Mojitos",
  "Gourmet Shakes",
  "Classic Shakes",
  "Smoothies",
  "Breezers",
];

let _id = 0;
const id = () => String(++_id);

export const menuItems: MenuItem[] = [
  // ── Sandwiches ──
  { id: id(), name: "Bombay Batata Sandwich", description: "", price: 295, category: "Sandwiches" },
  { id: id(), name: "Chicken Ham Sandwich", description: "Chicken Ham, Cheese slice, Mayo, Veggie slice", price: 245, category: "Sandwiches" },
  { id: id(), name: "Chicken Khurchan Sandwich", description: "", price: 345, category: "Sandwiches" },
  { id: id(), name: "Chicken Salami Sandwich", description: "Chicken Salami, Cheese slice, Mayo, Veggie slice", price: 345, category: "Sandwiches" },
  { id: id(), name: "Veg Cold Sandwich", description: "Sandwich Bread, Coleslaw, Grated paneer, Pineapple Chunks", price: 250, category: "Sandwiches" },
  { id: id(), name: "Tandoori Paneer Sandwich", description: "Mint mayo, paneer tikka & Cheese slice", price: 325, category: "Sandwiches" },
  { id: id(), name: "Spinach Corn Sandwich", description: "Mustard Mayo, spinach & corn mix, Cheese slice", price: 295, category: "Sandwiches" },
  { id: id(), name: "Tandoori Chicken Sandwich", description: "Mini Chicken Tikka, Tandoori Mayo, Onion, Cheese Slice", price: 345, category: "Sandwiches" },
  { id: id(), name: "Grilled Chicken Sandwich", description: "Grilled Chicken, cheese slice, Garlic Mayo", price: 345, category: "Sandwiches" },
  { id: id(), name: "Truffle Oil & Mushroom Sandwich", description: "Shiitake, button mushroom in creamy sauce, lettuce, tortilla, garlic aioli", price: 345, category: "Sandwiches" },
  { id: id(), name: "Double Cheese Pizza Sandwich", description: "Baked Double Decker stuffed with creamy assorted veggie & cheese", price: 345, category: "Sandwiches" },
  { id: id(), name: "Veg Club Sandwich", description: "Layered toasted sandwich with Sriracha, lettuce, cucumber, tomato, cheese & coleslaw", price: 315, category: "Sandwiches" },
  { id: id(), name: "Chicken Club Sandwich", description: "Layered toasted sandwich with Garlic mayo, lettuce, tomato, cheese & creamy chicken", price: 345, category: "Sandwiches" },

  // ── Burgers ──
  { id: id(), name: "Juicy Lucy Lamb Burger", description: "Grilled Mutton Patty, Iceberg, Lettuce, Onion, Tomato, Cheese, Green Chilli Mayo", price: 275, category: "Burgers" },
  { id: id(), name: "Tandoori Chicken Tikka Burger", description: "Tandoori Chicken Patty, lettuce, Tomato, Onion, Cheese, Coriander Pesto Mayo", price: 245, category: "Burgers" },
  { id: id(), name: "Tandoori Grilled Paneer Burger", description: "Paneer Patty in Tandoori Marinade, Mint Mayo, Onion", price: 245, category: "Burgers" },
  { id: id(), name: "V-Company (Veg Burger)", description: "Veggie patty, lettuce, tomato, onion, cheese, Mustard mayo", price: 215, category: "Burgers" },
  { id: id(), name: "Pulled Mushroom Burger", description: "Creamy Shiitake & Button Mushroom, Cheese, Lettuce, Onion, Garlic Aioli", price: 255, category: "Burgers" },
  { id: id(), name: "Nachos Burger", description: "Tex Mex veg patty, Iceberg, Green Chilli Mayo & Nachos", price: 225, category: "Burgers" },
  { id: id(), name: "Boston Fried Chicken Burger", description: "Batter fried chicken, lettuce, tomato, onion, iceberg & Garlic Mayo", price: 245, category: "Burgers" },

  // ── Bruschetta ──
  { id: id(), name: "Cheesy Garlic Bruschetta", description: "Toasted Garlic bread, Butter Garlic, Mozzarella Cheese", price: 230, category: "Bruschetta" },
  { id: id(), name: "Creamy Mushroom Bruschetta", description: "Toasted French Baguette & Creamy Mushroom", price: 275, category: "Bruschetta" },
  { id: id(), name: "Truffle Oil Mushroom Bruschetta", description: "Mushroom in creamy sauce & Truffle oil, Toasted Garlic Bread", price: 245, category: "Bruschetta" },
  { id: id(), name: "Tomato & Basil Loaded Hummus", description: "Sliced Garlic breads, Hummus, Tomato, Fresh Basil, Mozzarella & Parmesan", price: 245, category: "Bruschetta" },
  { id: id(), name: "Grilled Chicken Bruschetta", description: "Sliced garlic bread, Chicken in Chipotle sauce, Onion, Cheese", price: 275, category: "Bruschetta" },

  // ── Fries ──
  { id: id(), name: "Chicken Tikka Fries", description: "Masala Fries with chunks of Chicken Tikka on top", price: 285, category: "Fries" },
  { id: id(), name: "Classic Salted Fries", description: "French Fries", price: 225, category: "Fries" },
  { id: id(), name: "Truffle Oil Parmesan Fries", description: "French Fries with Truffle Oil & Parmesan cheese", price: 285, category: "Fries" },
  { id: id(), name: "Boston Fries", description: "French fries with Boston special sprinkle", price: 245, category: "Fries" },
  { id: id(), name: "Cheesy Fries", description: "French fries with cheese sauce", price: 285, category: "Fries" },

  // ── Hot Dogs ──
  { id: id(), name: "Cheese Mushroom Hot Dog", description: "Cheese Blend, Creamy Mushroom, Black Olive, Thousand Island", price: 215, category: "Hot Dogs" },
  { id: id(), name: "Original New York Hot Dog", description: "Cheese Blend, Mustard Sauce, Tomato Ketchup, Chicken Sausage", price: 215, category: "Hot Dogs" },
  { id: id(), name: "Veg Strips Hot Dog", description: "Cheese Blend, Veg Nuggets, Onion, Mint Mayo", price: 215, category: "Hot Dogs" },
  { id: id(), name: "Grilled Chicago Hot Dog", description: "Cheese blend, Bell Peppers, Pickle, Chipotle Dressing, Chicken sausage", price: 215, category: "Hot Dogs" },
  { id: id(), name: "Smoked Texas BBQ Hot Dog", description: "Cheese Blend, Smokey Chicken Sausage, BBQ Sauce", price: 215, category: "Hot Dogs" },

  // ── Pav-wala ──
  { id: id(), name: "Egg Bhurji Pav", description: "Masala Egg Bhurji, Mint Chutney, Pav with Masala Onion", price: 210, category: "Pav-wala" },
  { id: id(), name: "Shredded Butter Chicken Pav", description: "Punjabi Style Butter Chicken with Butter Pav, Masala onion & Coriander", price: 315, category: "Pav-wala" },
  { id: id(), name: "Tawa Chaap Masala Pav", description: "Punjabi Style Masala Tawa Chaap with Buttered Pav, Masala onions", price: 265, category: "Pav-wala" },
  { id: id(), name: "Church Gate Vada Pav", description: "Mumbai street style Vada Pav with chutney & fried green chilli", price: 210, category: "Pav-wala" },
  { id: id(), name: "Marine Drive Pav Bhaji", description: "Classic Mumbai street style bhaji with buttered pav, onions, coriander", price: 280, category: "Pav-wala" },
  { id: id(), name: "Mutton Keema Pav", description: "Minced mutton keema with butter toasted pav", price: 300, category: "Pav-wala" },

  // ── Wings ──
  { id: id(), name: "Chicken Wings 65 (6 Pcs)", description: "Andhra style spicy chicken wings with curry leaves", price: 345, category: "Wings" },
  { id: id(), name: "Peri Peri Chicken Wings (6 Pcs)", description: "South African spiced fried wings in Peri Peri Mayo", price: 335, category: "Wings" },
  { id: id(), name: "Smoky BBQ Chicken Wings (6 Pcs)", description: "Grilled chicken wings tossed in BBQ sauce", price: 345, category: "Wings" },
  { id: id(), name: "Boston Fried Hot Wings (6 Pcs)", description: "Crunchy fried chicken wings with garlic Mayo", price: 345, category: "Wings" },

  // ── Fried Stuff ──
  { id: id(), name: "Boston Crispy Fish Popcorn", description: "", price: 345, category: "Fried Stuff" },
  { id: id(), name: "Cheese Cigar Roll", description: "Mozzarella, Processed Cheese, Sweet Corn, Herbs, Rolled in Sheets", price: 295, category: "Fried Stuff" },
  { id: id(), name: "Fish And Chips (2 Pcs)", description: "", price: 345, category: "Fried Stuff" },
  { id: id(), name: "Peri Peri Paneer Popcorn", description: "Deep Fried Paneer with Hot & Spicy Peri Peri Masala", price: 295, category: "Fried Stuff" },
  { id: id(), name: "Boston Crispy Popcorn Chicken", description: "Crunchy fried boneless chicken with Boston Sprinkle & Peri Peri Masala", price: 325, category: "Fried Stuff" },
  { id: id(), name: "Boston Fried Chicken (3 Pcs)", description: "Crunchy fried chicken with Boston Sprinkle & Peri Peri Masala, Garlic Mayo", price: 315, category: "Fried Stuff" },

  // ── Wraps ──
  { id: id(), name: "Bhuna Mutton Roll", description: "Malabar Paratha, Tender Mutton in spicy Bhuna Masala", price: 225, category: "Wraps" },
  { id: id(), name: "Butter Chicken Wrap", description: "Tender chicken in creamy spiced tomato sauce, wrapped in tortilla", price: 225, category: "Wraps" },
  { id: id(), name: "Double Egg Kolkata Wrap", description: "Kolkata Style Double Egg with Shredded Veggies & Sauce", price: 195, category: "Wraps" },
  { id: id(), name: "Falafel Wrap", description: "Crispy Chickpea Patty, Iceberg, Garlic Aioli, Hummus, Tortilla", price: 195, category: "Wraps" },
  { id: id(), name: "Paneer Tikka Roll", description: "Malabar Paratha, Tandoori Paneer Tikka, Mint Mayo, Iceberg", price: 225, category: "Wraps" },
  { id: id(), name: "Paneer Makhani Wrap", description: "Paneer tikka in creamy tomato sauce with roasted fenugreek, Tortilla", price: 225, category: "Wraps" },
  { id: id(), name: "Boston Fried Chicken Wrap", description: "Crunchy fried chicken, lettuce, cheesy mayo, Iceberg, Tortilla", price: 225, category: "Wraps" },

  // ── Pizza ──
  { id: id(), name: "O Margherita", description: "Marinara sauce, basil, mozzarella with cherry Tomato", price: 385, category: "Pizza" },
  { id: id(), name: "Truffle Oil Mushroom Pizza", description: "Marinara, Sauteed Mushroom, Black Olives, Truffle oil, Mozzarella", price: 415, category: "Pizza" },
  { id: id(), name: "Vegetable Market Pizza", description: "Marinara sauce, sauteed seasonal veggies, basil, mozzarella", price: 395, category: "Pizza" },
  { id: id(), name: "Tandoori Paneer Pizza", description: "Marinara, Paneer Tikka, Capsicum, Coriander, Mozzarella", price: 425, category: "Pizza" },
  { id: id(), name: "Chick-Tik Pizza", description: "Marinara, chicken tikka, capsicum, coriander, mozzarella", price: 435, category: "Pizza" },
  { id: id(), name: "Peri Peri Chicken Pizza", description: "Marinara, chicken peri peri, bell peppers, basil, mozzarella", price: 435, category: "Pizza" },
  { id: id(), name: "BBQ Chicken Pizza", description: "Marinara, grilled smokey BBQ chicken, onion, olives, mozzarella", price: 435, category: "Pizza" },

  // ── Pasta ──
  { id: id(), name: "Aglio Oleo Pasta", description: "", price: 385, category: "Pasta" },
  { id: id(), name: "Alfredo Pasta", description: "", price: 415, category: "Pasta" },
  { id: id(), name: "Arrabiata Pasta (Red Sauce)", description: "", price: 385, category: "Pasta" },
  { id: id(), name: "Creamy Pesto Pasta", description: "", price: 415, category: "Pasta" },
  { id: id(), name: "Creamy White Sauce Pasta", description: "", price: 415, category: "Pasta" },
  { id: id(), name: "Mix Sauce (Pink Sauce) Pasta", description: "", price: 415, category: "Pasta" },
  { id: id(), name: "Truffle Oil Alfredo Pasta", description: "", price: 435, category: "Pasta" },

  // ── Tex Mex Bowls ──
  { id: id(), name: "Veg Burrito Bowl", description: "Mix Veg, spicy tomato sauce, Mexican rice with corns & olives, Bellpeppers", price: 335, category: "Tex Mex Bowls" },
  { id: id(), name: "Chicken Burrito Bowl", description: "Chicken Balls, spicy tomato sauce, Mexican rice with corns & olives", price: 365, category: "Tex Mex Bowls" },
  { id: id(), name: "Boston Fried Chicken Meal Bowl", description: "Fried chicken, Mexican rice, salsa, sour cream Indian style", price: 375, category: "Tex Mex Bowls" },

  // ── Asian Bowls ──
  { id: id(), name: "Chilli Chicken + Hakka Noodles", description: "Tender chicken in spicy sauce with Hakka Noodles", price: 395, category: "Asian Bowls" },
  { id: id(), name: "Chilli Paneer + Hakka Noodles", description: "", price: 395, category: "Asian Bowls" },
  { id: id(), name: "Hot Garlic Sauce + Steamed Rice", description: "", price: 335, category: "Asian Bowls" },
  { id: id(), name: "Thai Green Curry + Steamed Rice", description: "", price: 355, category: "Asian Bowls" },
  { id: id(), name: "Thai Red Curry + Steamed Rice", description: "", price: 355, category: "Asian Bowls" },
  { id: id(), name: "Veg Manchurian + Fried Rice", description: "", price: 375, category: "Asian Bowls" },
  { id: id(), name: "Veg Manchurian + Hakka Noodle", description: "", price: 375, category: "Asian Bowls" },
  { id: id(), name: "Chilli Paneer + Veg Fried Rice", description: "", price: 395, category: "Asian Bowls" },
  { id: id(), name: "Chilli Chicken + Veg Fried Rice", description: "Juicy chicken stir-fried in spicy sauce with Veg Fried Rice", price: 395, category: "Asian Bowls" },

  // ── Veg Subs ──
  { id: id(), name: "Crispy Aloo Patty Sub", description: "", price: 245, category: "Veg Subs" },
  { id: id(), name: "Falafel Farmer Sub", description: "", price: 245, category: "Veg Subs" },
  { id: id(), name: "Mexican Patty Sub", description: "", price: 275, category: "Veg Subs" },
  { id: id(), name: "Paneer Tikka Sub", description: "", price: 275, category: "Veg Subs" },
  { id: id(), name: "Grilled Veggie Delight Sub", description: "Prepared with fresh veggies", price: 225, category: "Veg Subs" },

  // ── Non Veg Subs ──
  { id: id(), name: "Chicken Seekh Kebab Sub", description: "Spiced chicken seekh kebabs in a soft sub roll with fresh veggies", price: 295, category: "Non Veg Subs" },
  { id: id(), name: "Chicken Tikka Sub", description: "Freshly Prepared", price: 285, category: "Non Veg Subs" },
  { id: id(), name: "Grilled Chicken Sub", description: "Prepared with fresh chicken", price: 285, category: "Non Veg Subs" },
  { id: id(), name: "Chicken Ham & Cheese Sub", description: "Tender chicken, savory ham, and melted cheese in a soft sub roll", price: 285, category: "Non Veg Subs" },
  { id: id(), name: "Chicken Salami Sub", description: "Chicken Salami with fresh veggies, cheese, and zesty sauces", price: 285, category: "Non Veg Subs" },

  // ── Salads ──
  { id: id(), name: "Boiled Pesto Pasta Salad", description: "", price: 315, category: "Salads" },
  { id: id(), name: "Falafel Farmer Salad", description: "", price: 245, category: "Salads" },
  { id: id(), name: "Veg Delight Salad", description: "", price: 225, category: "Salads" },
  { id: id(), name: "Paneer Tikka Salad", description: "Prepared with fresh veggies and paneer", price: 255, category: "Salads" },
  { id: id(), name: "Pesto Pasta Chicken Salad", description: "Tender chicken with al dente pasta and fresh veggies", price: 355, category: "Salads" },
  { id: id(), name: "Chicken Ham & Cheese Salad", description: "Tender chicken, savory ham, and creamy cheese with fresh greens", price: 250, category: "Salads" },
  { id: id(), name: "Grilled Chicken Salad", description: "Freshly Prepared with veggies and chicken", price: 275, category: "Salads" },
  { id: id(), name: "Chicken Ham Salad", description: "Tender chicken and savory ham with crisp greens", price: 275, category: "Salads" },
  { id: id(), name: "Chicken Salami Salad", description: "Chicken salami with crisp lettuce, cherry tomatoes & veggies", price: 275, category: "Salads" },
  { id: id(), name: "Chicken Tikka Salad", description: "Smoky chicken tikka with fresh greens and tangy yogurt dressing", price: 275, category: "Salads" },

  // ── Soups ──
  { id: id(), name: "Chicken Manchow", description: "Spicy Indo-Chinese soup with tender chicken", price: 195, category: "Soups" },
  { id: id(), name: "Cream Of Chicken", description: "Rich and creamy soup with tender chicken & aromatic herbs", price: 215, category: "Soups" },
  { id: id(), name: "Cream Of Mushroom", description: "", price: 215, category: "Soups" },
  { id: id(), name: "Cream Of Tomato", description: "", price: 195, category: "Soups" },
  { id: id(), name: "Veg Manchow", description: "", price: 185, category: "Soups" },
  { id: id(), name: "Veg Sweet Corn", description: "", price: 185, category: "Soups" },

  // ── Sushi ──
  { id: id(), name: "Maki Dragon Chicken Roll", description: "", price: 595, category: "Sushi" },
  { id: id(), name: "Maki Salsa Roll", description: "", price: 455, category: "Sushi" },
  { id: id(), name: "Nigiri Smoked Salmon", description: "", price: 745, category: "Sushi" },
  { id: id(), name: "Nigiri Sweet Chilli Tofu", description: "", price: 595, category: "Sushi" },
  { id: id(), name: "Uramaki Crispy Prawn Tempura", description: "", price: 645, category: "Sushi" },
  { id: id(), name: "Uramaki Crispy Veg Tempura", description: "", price: 455, category: "Sushi" },
  { id: id(), name: "Uramaki Teriyaki Wild Mushroom", description: "", price: 515, category: "Sushi" },

  // ── Specials ──
  { id: id(), name: "Black Rice Mushroom Arancini", description: "", price: 405, category: "Specials" },
  { id: id(), name: "Burmese Khow Suey (Veg)", description: "", price: 455, category: "Specials" },
  { id: id(), name: "Burmese Khow Suey (Non-Veg)", description: "", price: 495, category: "Specials" },
  { id: id(), name: "Classic Ramen Bowl Veg", description: "", price: 395, category: "Specials" },
  { id: id(), name: "Harissa Cottage Cheese Steak Sizzler", description: "", price: 435, category: "Specials" },
  { id: id(), name: "Korean Gochujang Mushroom", description: "", price: 395, category: "Specials" },
  { id: id(), name: "Avocado Cream Cheese Toast", description: "Sourdough toast with avocado & cream cheese", price: 295, category: "Specials" },
  { id: id(), name: "Chicken Stroganoff Toast", description: "Sourdough toast with chicken stroganoff", price: 325, category: "Specials" },
  { id: id(), name: "Roasted Tomato Pesto Cream Cheese Toast", description: "Sourdough toast with roasted tomato pesto & cream cheese", price: 295, category: "Specials" },

  // ── Waffles ──
  { id: id(), name: "Blueberry Waffle", description: "", price: 200, category: "Waffles" },
  { id: id(), name: "Nutella Waffle", description: "Crispy Classic Waffle dipped in Nutella, garnished with goodies", price: 215, category: "Waffles" },
  { id: id(), name: "Hazel Nut N Brownie Waffle", description: "Waffle with Hazelnut Paste & Walnut Brownie", price: 215, category: "Waffles" },
  { id: id(), name: "Triple Chocolate Waffle", description: "Dipped in Dark, White & Hazelnut Chocolate", price: 215, category: "Waffles" },
  { id: id(), name: "White Chocolate Waffle", description: "Dipped in White Chocolate, garnished with goodies", price: 215, category: "Waffles" },

  // ── Cakes ──
  { id: id(), name: "Belgium Cake", description: "", price: 945, image: chocolateCake, category: "Cakes" },
  { id: id(), name: "Black Forest Cake", description: "", price: 795, category: "Cakes" },
  { id: id(), name: "Blueberry Cake", description: "", price: 825, category: "Cakes" },
  { id: id(), name: "Brownie Fudge Cake", description: "", price: 925, category: "Cakes" },
  { id: id(), name: "Butter Scotch Cake", description: "", price: 795, category: "Cakes" },
  { id: id(), name: "Choco Mousse Cake", description: "", price: 1250, category: "Cakes" },
  { id: id(), name: "Chocochip Cake", description: "", price: 785, category: "Cakes" },
  { id: id(), name: "Chocolate Truffle Cake", description: "", price: 815, category: "Cakes" },
  { id: id(), name: "Creamy Hazelnut Cake", description: "", price: 925, category: "Cakes" },
  { id: id(), name: "Death By Chocolate Cake", description: "", price: 925, category: "Cakes" },
  { id: id(), name: "Mango Cake", description: "", price: 785, category: "Cakes" },
  { id: id(), name: "Mix Fruit Cake", description: "", price: 815, category: "Cakes" },
  { id: id(), name: "Oreo Cake", description: "", price: 835, category: "Cakes" },
  { id: id(), name: "Pineapple Cake", description: "", price: 795, category: "Cakes" },
  { id: id(), name: "Red Velvet Cake", description: "", price: 1260, category: "Cakes" },
  { id: id(), name: "Tiramisu Cake (1kg)", description: "", price: 2900, image: tiramisu, category: "Cakes" },
  { id: id(), name: "Triple Mousse Cake (1kg)", description: "", price: 2150, category: "Cakes" },
  { id: id(), name: "White Forest Cake", description: "", price: 795, category: "Cakes" },
  { id: id(), name: "Boston Cake", description: "", price: 945, category: "Cakes" },
  { id: id(), name: "Rainbow Cake", description: "", price: 1850, category: "Cakes" },
  { id: id(), name: "Strawberry Cake", description: "", price: 795, category: "Cakes" },

  // ── Pastries ──
  { id: id(), name: "Belgium Pastry", description: "", price: 120, category: "Pastries" },
  { id: id(), name: "Black Forest Pastry", description: "", price: 169, category: "Pastries" },
  { id: id(), name: "Blueberry Cheese Pastry", description: "", price: 165, category: "Pastries" },
  { id: id(), name: "Boston Pastry", description: "", price: 165, category: "Pastries" },
  { id: id(), name: "Brownie Fudge Pastry", description: "", price: 105, category: "Pastries" },
  { id: id(), name: "Butter Scotch Pastry", description: "", price: 95, image: creamPuff, category: "Pastries" },
  { id: id(), name: "Choco Mousse Pastry", description: "", price: 135, category: "Pastries" },
  { id: id(), name: "Chocochip Pastry", description: "", price: 105, image: cookie, category: "Pastries" },
  { id: id(), name: "Creamy Hazelnut Pastry", description: "", price: 140, category: "Pastries" },
  { id: id(), name: "Double Truffle Pastry", description: "", price: 120, category: "Pastries" },
  { id: id(), name: "Lotus Biscoff Cheese Pastry", description: "", price: 245, category: "Pastries" },
  { id: id(), name: "New York Cheese Pastry", description: "", price: 155, category: "Pastries" },
  { id: id(), name: "Pineapple Pastry", description: "", price: 95, category: "Pastries" },
  { id: id(), name: "Swiss Roll", description: "", price: 79, category: "Pastries" },
  { id: id(), name: "Tiramisu Pastry", description: "", price: 95, image: tiramisu, category: "Pastries" },
  { id: id(), name: "Triple Mousse Pastry", description: "", price: 195, category: "Pastries" },

  // ── Hot Coffee ──
  { id: id(), name: "Double Shot Coffee", description: "", price: 255, category: "Hot Coffee" },
  { id: id(), name: "Espresso", description: "A shot of pure intense coffee", price: 175, category: "Hot Coffee" },
  { id: id(), name: "Americano", description: "Rich espresso with hot water. Add vanilla/hazelnut/caramel +₹20", price: 185, category: "Hot Coffee" },
  { id: id(), name: "Cappuccino", description: "Rich espresso, steamed milk, creamy foam. Add flavor +₹20", price: 215, image: cappuccino, category: "Hot Coffee" },
  { id: id(), name: "Hot Chocolate", description: "", price: 245, category: "Hot Coffee" },
  { id: id(), name: "Cafe Latte", description: "Espresso, steamed milk, foam top", price: 215, category: "Hot Coffee" },
  { id: id(), name: "Cafe Mocha", description: "Rich coffee, chocolate syrup, whipped cream. Extra chocolate +₹40", price: 235, category: "Hot Coffee" },

  // ── Cold Coffee ──
  { id: id(), name: "Classic Cold Coffee", description: "", price: 215, category: "Cold Coffee" },
  { id: id(), name: "Iced Americano", description: "", price: 175, image: icedAmericano, category: "Cold Coffee" },
  { id: id(), name: "Iced Caramel Macchiato", description: "", price: 195, image: icedLatte, category: "Cold Coffee" },
  { id: id(), name: "Iced Latte", description: "", price: 195, category: "Cold Coffee" },
  { id: id(), name: "Java Choco Chip", description: "", price: 215, category: "Cold Coffee" },
  { id: id(), name: "Tiramisu Cold Coffee", description: "", price: 245, category: "Cold Coffee" },
  { id: id(), name: "Popcorn Caramel Cold Coffee", description: "", price: 245, category: "Cold Coffee" },
  { id: id(), name: "French Vanilla Cold Coffee", description: "", price: 245, category: "Cold Coffee" },

  // ── Iced Tea ──
  { id: id(), name: "Classic Lemon Iced Tea", description: "", price: 195, category: "Iced Tea" },
  { id: id(), name: "Peach Iced Tea", description: "", price: 195, category: "Iced Tea" },
  { id: id(), name: "Watermelon Iced Tea", description: "", price: 195, category: "Iced Tea" },
  { id: id(), name: "Passion Fruit Iced Tea", description: "", price: 195, category: "Iced Tea" },

  // ── Mojitos ──
  { id: id(), name: "Blueberry Mojito", description: "", price: 215, category: "Mojitos" },
  { id: id(), name: "Kiwi Mint Mojito", description: "", price: 215, category: "Mojitos" },
  { id: id(), name: "The Virgin Mojito", description: "Classic mojito without the Bacardi! ;-)", price: 215, category: "Mojitos" },
  { id: id(), name: "Wa Ba (Watermelon Basil)", description: "Watermelon & Basil", price: 215, category: "Mojitos" },
  { id: id(), name: "Cool Cucumber Mojito", description: "Cucumber & Mint", price: 215, category: "Mojitos" },
  { id: id(), name: "Alphonso Mojito", description: "Alphonso Crush, Mango juice, Lemon, Mojito Mint Syrup, Soda", price: 215, category: "Mojitos" },

  // ── Gourmet Shakes ──
  { id: id(), name: "Belgian Chocolate Shake", description: "", price: 255, category: "Gourmet Shakes" },
  { id: id(), name: "Blueberry Cheesecake Shake", description: "", price: 255, category: "Gourmet Shakes" },
  { id: id(), name: "Bounty Chocobar Shake", description: "", price: 255, category: "Gourmet Shakes" },
  { id: id(), name: "Lotus Biscoff Shake", description: "", price: 255, category: "Gourmet Shakes" },
  { id: id(), name: "Mango Kulfi Shake", description: "", price: 235, category: "Gourmet Shakes" },
  { id: id(), name: "Snicker Shake", description: "", price: 255, category: "Gourmet Shakes" },

  // ── Classic Shakes ──
  { id: id(), name: "Pina Colada Shake", description: "Coconut Cream, Pineapple Pulp, Vanilla Ice Cream", price: 215, category: "Classic Shakes" },
  { id: id(), name: "Bro! Mocha", description: "Brownie & Mocha blend", price: 215, category: "Classic Shakes" },
  { id: id(), name: "Cookie And Cream", description: "Oreo & Ice Cream", price: 215, category: "Classic Shakes" },
  { id: id(), name: "Please Berry Me", description: "Mixed Berry Shake", price: 215, category: "Classic Shakes" },
  { id: id(), name: "A Trip On Chocolate", description: "Triple Chocolate Punch", price: 215, category: "Classic Shakes" },
  { id: id(), name: "Choco Royale", description: "Ferrero Rocher Shake", price: 215, category: "Classic Shakes" },

  // ── Smoothies ──
  { id: id(), name: "Cool It Man", description: "Curd, watermelon, cucumber, basil, flex seeds", price: 215, category: "Smoothies" },
  { id: id(), name: "Plan B", description: "Curd, pineapple, tomato, blueberry, orange juice, honey", price: 215, category: "Smoothies" },
  { id: id(), name: "Power House", description: "Curd, Spinach, banana, ginger, apple, chia seeds, honey", price: 215, category: "Smoothies" },

  // ── Breezers ──
  { id: id(), name: "Butter Soda", description: "", price: 215, category: "Breezers" },
  { id: id(), name: "Kaccha Kerry", description: "", price: 215, category: "Breezers" },
  { id: id(), name: "Spiced Jamun", description: "", price: 215, category: "Breezers" },
  { id: id(), name: "Masala Lemonade", description: "Classic lemonade with a twist of spices", price: 215, category: "Breezers" },
  { id: id(), name: "Mango Mystery", description: "Mango Crush, Lime, Cucumber Syrup, Soda, Fresh Mint", price: 215, category: "Breezers" },
  { id: id(), name: "Fresh Lime Soda", description: "", price: 145, category: "Breezers" },
  { id: id(), name: "The Spikey Pineapple", description: "Pineapple Juice, Lemon, Chaat Masala, Black Salt, red chilli rim", price: 215, category: "Breezers" },
];
