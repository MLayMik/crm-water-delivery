<template>
  <footer class="bg-gray-800 py-6 text-white">
    <div
      class="
        container mx-auto flex flex-col items-center justify-between gap-4
        md:flex-row
      "
    >
      <!-- Логотип / название -->
      <div class="text-lg font-bold">
        MyWebsite
      </div>

      <!-- Навигация -->
      <nav class="flex gap-4">
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Contact</a>
      </nav>

      <!-- Соцсети -->
      <div class="flex gap-3">
        <a href="#" aria-label="Twitter" class="hover:text-gray-400">🐦</a>
        <a href="#" aria-label="Facebook" class="hover:text-gray-400">📘</a>
        <a href="#" aria-label="Instagram" class="hover:text-gray-400">📸</a>
      </div>
    </div>

    <!-- Копирайт -->
    <div class="mt-4 text-center text-sm text-gray-400">
      &copy; 2025 MyWebsite. All rights reserved.
    </div>
  </footer>
</template>
