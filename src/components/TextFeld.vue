<template>
    <form class="go-bottom">
        <label for="nme">
            <span>{{eingabe}}</span>
        </label>
        <input type="text" name="name" id="nme" required autocomplete="off" />
    </form>
</template>

<script>
export default {
    props: {
        'eingabe': String
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped>

</style>