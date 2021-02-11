<template>
    <form class="go-bottom">
        <label for="nme">
            <span>{{eingabe}}</span>
        </label>
        <input @input="changed" type="text" name="title" />
    </form>
</template>

<script>
export default {
    props: {
        'eingabe': String
    },
    methods: {
        changed: function(event) {
            this.$store.commit("changeTitle", event.target.value)
        }
    }
}
</script>

<style scoped>

</style>