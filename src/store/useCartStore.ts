import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string
}

type CartStore = {
  items: CartItem[];
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [] as CartItem[],

    // Добавление товара
    addItem: (product: Omit<CartItem, 'quantity'>) => {
      const items = get().items;  // 📖 Читаем текущую корзину через get()
      const existingItem = items.find((item) => item.id === product.id);
      
      if (existingItem) {
        // ✅ Товар уже есть → увеличиваем quantity на 1
        set({
          items: items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      } else {
        // ✅ Новый товар → добавляем с quantity: 1
        set({
          items: [...items, { ...product, quantity: 1 }],
        });
      }
    },

    // Удаление товара полностью
    removeItem: (id: number) => {
      set({
        items: get().items.filter((item) => item.id !== id),
      })
    },

    // Изменение количества  товара
    updateQuantity: (id: number, quantity: number) => {
      if(quantity < 1) return;
      set({
        items: get().items.map((item) =>
          item.id === id ? {...item, quantity} : item          
        ),
      })
    },

    // Очистка всей корзины 
    clearCart: () => set({ items: [] }),

    // Общее количество товаров (сумма quantity)
    get totalItems() {
      return get().items.reduce((sum, items) => sum + items.quantity, 0);
    },

    // Общая стоимость (сумма price * quantity)
    get totalPrice() {
      return get().items.reduce(
        (sum, items) => sum + items.price * item.quantity, 0
      )
    }
}))



