<template lang="html">
    <div class="home">
        <h1 class="home__title">Pomoro</h1>
        <div class="pomoro">
            <div class="pomoro__container">
                <Timer></Timer>
            </div>
        </div>
    </div>
</template>
<style>
body {
    background-color: #1e1e2e;
    color: #cdd6f4;
}

.home {
    text-align: center;
}

.home__title {
    font-size: 4em;
}

.pomoro {
    display: flex;
    justify-content: center;
}
</style>
<script>
import Timer from './Timer.vue';

export default {
    components: { Timer }
}
</script>
<style lang="ts">

</style>