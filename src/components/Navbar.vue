<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import GenericSvg from './GenericSvg.vue';

const route = useRoute();

const isActiveLink = (routePath: string) => {
    const route = useRoute();
    return route.path === routePath
}

</script>

<template>
    <section
    class="bg-blue-200 p-3">
        <nav v-if="route.path !== '/login' && route.path !== '/register'"
        class="columns is-vcentered is-mobile">
            <div class="column">
                <h1 class="is-size-4-mobile
                is-size-2-tablet
                has-text-black
                has-text-weight-bold
                ">IN LIFE PROJECTS</h1>
                <p class="subtitle is-size-5-mobile is-size-2-tablet has-text-black">IT Solutions</p>
            </div>

            <div class="dropdown is-hoverable mr-10">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>
                            <GenericSvg icon="line-compact-g" src="/bds-icons.min.svg" />
                        </span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div class="dropdown-menu open-left" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        <RouterLink to="/home" :class="[
                            isActiveLink('/') ?
                            'has-text-weight-bold has-text-black'
                            :
                            'has-text-black']"
                                class="dropdown-item ml-5">
                            <span class="
                            is-size-6-mobile
                            is-size-3-tablet
                            ">
                            Home</span>
                        </RouterLink>
                        <RouterLink to="/finder" :class="[
                            isActiveLink('/finder') ?
                            'has-text-weight-bold has-text-black'
                            :
                            'has-text-black']"
                        class="dropdown-item ml-5">
                            <span class="
                            is-size-6-mobile
                            is-size-3-tablet
                            ">
                            Finder</span>
                        </RouterLink>
                        <RouterLink to="/staff-manager" :class="[
                            isActiveLink('/staff-manager') ?
                            'has-text-weight-bold has-text-black'
                            :
                            'has-text-black']"
                            class="dropdown-item ml-5">
                            <span class="
                            is-size-6-mobile
                            is-size-3-tablet
                            ">
                            Staff-manager</span>
                        </RouterLink>

                    </div>
                </div>
            </div>
        </nav>
    </section>
</template>

<style lang="css" scoped>
.dropdown-menu.open-left {
    left: auto;
    right: 0;
    transform-origin: top right;
}
</style>