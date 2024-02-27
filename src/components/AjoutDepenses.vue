<script setup>
import { reactive } from "vue";
import { useInventoryStore } from "@/stores/inventory";

// Acceder au store (inventaire)
const store = useInventoryStore();
const { addOrder } = store;

// Crée un objet réactif (reutilisable)
const newOrder = reactive({
    montant: "",
    description: "",
});

// Fonction qui ajoute un objet au store
const majOrder = () => {
    addOrder(newOrder);
    newOrder.montant = "";
    newOrder.description = "";
};
</script>

<template>
    <form action="#" @submit.prevent="majOrder"> <!-- Action déclancher à l'nvoi du formulaire -->
        <legend>Ajoutez une dépense</legend>
        <fieldset>
            <label for="depense">Montant : </label>
            <input name="depense" id="depense" type="text" v-model="newOrder.montant">
            <hr>
            <label for="description">Description :</label>
            <textarea name="description" id="description" cols="30" rows="10" v-model="newOrder.description"></textarea>

            <button>Ajouter</button>
        </fieldset>
    </form>
</template>

<style scoped>

</style>