import { defineStore } from "pinia";

export const useInventoryStore = defineStore("inventory", {

  state: () => ({
    inventory: [],
    rename: "",
    modalDisplay: "",
    id: 1,
    orderToEdit: null,
  }),

  getters: {
    getOneById: (state) => {
      return (id) => state.inventory.find((product) => product.id === id);
    },
  },

  actions: {
    addOrder(order) {
      this.inventory.push({ ...order, id: this.id++ });
    },
    deleteOrder(orderId) {
      this.inventory = this.inventory.filter((order) => {
        return order.id !== orderId;
      });
    },
    editOrder(orderId) {
      this.modalDisplay = "edit";
      this.orderToEdit = this.inventory.find((i) => i.id === orderId);
      this.rename = this.orderToEdit.name;
    },
    validEdit() {
      this.orderToEdit.name = this.rename;
      this.modalDisplay = "";
    },
  },
});