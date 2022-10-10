<template>
  <div class="sm:flex sm:justify-between sm:items-center sm:h-72 sm:mx-6">
    <div>
      <a href="#">
        <img src="@/assets/logo.svg" alt="" class="m-auto pt-5 mb-2 sm:m-0 sm:pt-0">
      </a>
    </div>
    <nav class="flex justify-center items-center gap-7 text-sm mb-4 sm:mb-0">
      <a href="#" v-scroll-to="{ element: '#about', duration: 1000 }" class="hover:opacity-70">About</a>
      <a href="#" v-scroll-to="{ element: '#works', duration: 1000, easing: 'ease-in-out'}" class="hover:opacity-70">Works</a>
      <a href="#" v-scroll-to="{ element: '#news', duration: 1000, easing: 'ease-in' }" class="hover:opacity-70">News</a>
      <a href="#" v-scroll-to="{ element: '#contact', duration: 1000, easing: 'ease-out' }" class="hover:opacity-70">Contact</a>
      <a href="https://www.instagram.com/"><img src="@/assets/icon-instagram.png" alt="" class="w-5 h-5 hover:opacity-70"></a>
    </nav>
  </div>
</template>
