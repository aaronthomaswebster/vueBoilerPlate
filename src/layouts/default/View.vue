<template>
  <v-main>
    <router-view v-slot="{ Component }">
      <Transition name="fade">
        <div :key="$route.path">  
          <component  :is="Component"/>
        </div>
      </Transition>
    </router-view>
  </v-main>
</template>

<script setup>
//
</script>

<style>

  .fade-enter-active
    {
      position:fixed;
      top: 64px;
      left: 0;
      right: 0;
      animation: coming 1s;
      animation-delay: 0.5s;
      opacity: 0;
    }
  .fade-leave-active
    {
      animation: going 1s;
      opacity: 0;
    }

    @keyframes coming
    {
      from
      {
        max-height: 0px;
        overflow: visible;
        transform: translateX(-50px);
        opacity: 0;
      }
      to
      {
        max-height: unset;
        overflow: unset;
        transform: translateX(0);
        opacity: 1;
      }
    }



    @keyframes going
    {
      from
      {
        max-height: 0px;
        overflow: visible;
        transform: translateX(0);
        opacity: 1;
      }
      to
      {
        
        max-height: unset;
        transform: translateX(-50px);
        opacity: 0;
      }
    }
</style>