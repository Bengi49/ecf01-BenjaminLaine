<script setup>
import { useInventoryStore } from "@/stores/inventory";
import { useRoute } from "vue-router";
import { storeToRefs } from 'pinia';

const route = useRoute();
const orderId = Number(route.params.id);

const store = useInventoryStore();
const { getOneById } = storeToRefs(store);

const findOrder = getOneById.value(orderId);
</script>

<template>
    <div>
        <section class="menu-up">
            <h3>{{ findOrder.montant }}</h3>
            <p>{{ findOrder.description }}</p>
        </section>
        <section class="menu-down">
            <RouterLink to='/src/components/ListeDepenses.vue'>
                Retour
            </RouterLink>
        </section>
    </div>
</template>

<style scoped>

</style>