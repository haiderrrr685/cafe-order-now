import { useState } from "react";
import { menuItems, categories } from "@/data/menuData";
import { CartProvider } from "@/context/CartContext";
import CategoryTabs from "@/components/CategoryTabs";
import MenuItemCard from "@/components/MenuItemCard";
import CartBar from "@/components/CartBar";
import CartDrawer from "@/components/CartDrawer";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredItems = menuItems.filter((i) => i.category === activeCategory);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {/* Header */}
      <div className="px-4 pt-6 pb-3 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">
          Boston Café & Bakery
        </h1>
        <p className="text-sm text-muted-foreground mt-1 font-body">
          Scan · Order · Enjoy 🤎
        </p>
      </div>

      <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />

      <div className="px-4 py-4 space-y-3 pb-28">
        <h2 className="font-display text-lg font-semibold text-foreground">{activeCategory}</h2>
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>

      <CartBar onOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

const Index = () => (
  <CartProvider>
    <MenuPage />
  </CartProvider>
);

export default Index;
