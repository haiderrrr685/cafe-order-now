import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { items, addItem, updateQuantity } = useCart();
  const [animating, setAnimating] = useState(false);
  const cartItem = items.find((i) => i.id === item.id);
  const quantity = cartItem?.quantity ?? 0;

  const handleAdd = () => {
    setAnimating(true);
    addItem(item);
    setTimeout(() => setAnimating(false), 200);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(item.id, quantity - 1);
    }
  };

  return (
    <div className="flex gap-3 bg-card rounded-lg p-3 shadow-sm border border-border/50">
      {item.image && (
        <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-muted flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain p-1"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-semibold text-sm text-foreground leading-tight">
            {item.name}
          </h3>
          {item.description && (
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
              {item.description}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="font-body font-bold text-sm text-foreground">
            ₹{item.price}
          </span>
          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className={`w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform duration-200 hover:shadow-md active:scale-90 ${
                animating ? "animate-pop" : ""
              }`}
            >
              <Plus className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecrease}
                className="w-7 h-7 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center active:scale-90 transition-transform"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-sm font-bold text-foreground w-4 text-center">
                {quantity}
              </span>
              <button
                onClick={handleAdd}
                className={`w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center active:scale-90 transition-transform ${
                  animating ? "animate-pop" : ""
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
