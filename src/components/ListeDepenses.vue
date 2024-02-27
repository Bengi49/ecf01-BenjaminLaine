<script setup>
import AjoutDepenses from './AjoutDepenses.vue';
import { ref } from 'vue'
import { storeToRefs } from "pinia";
import { useInventoryStore } from "@/stores/inventory";

const store = useInventoryStore();
const { inventory } = storeToRefs(store);
const { deleteOrder, editOrder } = store;

const addOrder = ref(true);
const majOrder = () => {
    return addOrder.value = !addOrder.value;
}
</script>

<template>
    <div v-for="order in inventory">
        <section>
            <h3>{{ order.montant }}</h3>
            <button :to="{
                name: 'order-details',
                params: {id: order.id},
                }">
                Details
            </button>
        </section>
        <section>
            <h3>{{ order.description }}</h3>
            <button @click="editOrder(order.id)">Modifier</button>
            <button @click="deleteOrder">Supprimer</button>
        </section>
    </div>
    <div>
        <button v-if="addOrder" @click="majOrder">
            Nouveau
        </button>
        <div v-else>
            <AjoutDepenses />
        </div>
    </div>
</template>

<style scoped>

</style>