import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CartBarProps {
  onOpen: () => void;
}

const CartBar = ({ onOpen }: CartBarProps) => {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-4 bg-background/80 backdrop-blur-md border-t border-border">
      <button
        onClick={onOpen}
        className="w-full bg-primary text-primary-foreground rounded-xl py-3.5 px-5 flex items-center justify-between font-body font-semibold text-base shadow-lg active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          <span>View Order</span>
          <span className="bg-primary-foreground/20 text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {totalItems}
          </span>
        </div>
        <span>₹{totalPrice}</span>
      </button>
    </div>
  );
};

export default CartBar;
