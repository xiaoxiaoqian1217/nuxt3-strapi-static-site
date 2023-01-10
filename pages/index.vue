<template>
  <div>
     <div
              v-for="navigation in siteHeader.navigations.data"
              :key="navigation.href"
            >
              <NuxtLink :to="navigation.href" :target="navigation.target"
                >{{ navigation.label }}
              </NuxtLink>
            </div>
  </div>
</template>

<script setup>
import { twGlobalQurey } from "../graphql/twGlobal";
const {
  public: { strapiURL },
  
} = useRuntimeConfig();
console.log('%c [ strapiURL ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', strapiURL)
const { data :globalData } = await useAsyncQuery(twGlobalQurey);

const data = removeAttrsAndId(removeTime(unref(globalData)));
const {
  twGlobal: {
    data: { siteHeader, footer },
  },
} = data;

</script>

<style lang="scss" scoped>

</style>