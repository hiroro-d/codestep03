<template>
  <section id="contact">
    <p id="section__ttl" class="text-center text-3xl font-bold mb-10">Contact</p>
    <ul>
      <li class="sm:flex sm:justify-between">
        <p class="sm:w-[15%]"><label for="name">NAME</label></p>
        <p class="sm:w-[85%] sm:max-w-full">
          <input id="name" type="text" class="border border-gray-300 w-full h-10 mb-2" required></p>
      </li>
      <li class="sm:flex sm:justify-between">
        <p class="sm:w-[15%]"><label for="mail">E-mail</label></p>
        <p class="sm:w-[85%] sm:max-w-full">
          <input id="mail" type="text" class="border border-gray-300 w-full h-10 mb-2" required></p>
      </li>
      <li class="sm:flex sm:justify-between">
        <p class="sm:w-[15%]"><label for="message">MESSAGE</label></p>
        <p class="sm:w-[85%] sm:max-w-full">
          <textarea id="message" rous="5" cols="40" class="border border-gray-300 w-full h-40 mb-2" required>
          </textarea>
        </p>
      </li>
    </ul>
    <div class="flex justify-center">
      <button class="border border-black bg-gray-800 text-white py-3 px-20 mb-16 hover:bg-white hover:text-black">送信</button>
    </div>
  </section>
</template>