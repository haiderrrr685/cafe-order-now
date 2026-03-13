import { useState } from "react";
import { X, Minus, Plus, ChefHat } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const [tableNumber, setTableNumber] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSendOrder = () => {
    if (!tableNumber.trim()) {
      toast.error("Please enter your table number!");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success(`Order sent to kitchen! Table #${tableNumber}`);
      setTimeout(() => {
        clearCart();
        setTableNumber("");
        setSent(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl max-h-[90vh] flex flex-col animate-slide-up">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-xl font-bold text-foreground">Your Order</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <X className="w-4 h-4 text-secondary-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-card rounded-lg p-3 border border-border/50">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-14 h-14 object-contain rounded-md bg-muted p-1" />
                ) : (
                  <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center text-lg">🍽️</div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="font-body font-semibold text-sm text-foreground truncate">{item.name}</h4>
                  <p className="text-sm font-bold text-primary">₹{item.price * item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => item.quantity === 1 ? removeItem(item.id) : updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <Minus className="w-3.5 h-3.5 text-secondary-foreground" />
                  </button>
                  <span className="text-sm font-bold w-4 text-center text-foreground">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-full bg-primary flex items-center justify-center active:scale-90 transition-transform"
                  >
                    <Plus className="w-3.5 h-3.5 text-primary-foreground" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4">
            <div>
              <label className="block text-sm font-body font-semibold text-foreground mb-2">
                Table Number
              </label>
              <input
                type="number"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="Enter your table #"
                className="w-full text-center text-3xl font-display font-bold bg-secondary text-foreground rounded-xl py-4 px-4 border-2 border-border focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground placeholder:text-lg"
              />
            </div>
            <div className="flex justify-between items-center text-foreground font-body">
              <span className="text-base font-medium">Total</span>
              <span className="text-xl font-bold">₹{totalPrice}</span>
            </div>
            <button
              onClick={handleSendOrder}
              disabled={sending || sent}
              className="w-full bg-primary text-primary-foreground rounded-xl py-4 font-body font-bold text-lg flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all disabled:opacity-70"
            >
              {sent ? (
                <>✅ Order Sent!</>
              ) : sending ? (
                <>Sending...</>
              ) : (
                <>
                  <ChefHat className="w-5 h-5" />
                  Send Order to Kitchen
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
