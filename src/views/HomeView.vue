<script setup lang="ts">
import MetricsCard from '@/components/card/MetricsCard.vue'
import { ref } from 'vue'
const metrics = ref<{ name: string; count: number }[]>([
  {
    name: 'Accommodations',
    count: 5678
  },
  {
    name: 'Travelers',
    count: 12312
  },
  {
    name: 'Travelers',
    count: 12312
  },
  {
    name: 'Travelers',
    count: 12312
  },
  {
    name: 'Travelers',
    count: 12312
  },
  {
    name: 'Travelers',
    count: 12312
  },
  {
    name: 'Travelers',
    count: 12312
  },
  {
    name: 'Travelers',
    count: 12312
  },
  {
    name: 'Travelers',
    count: 12312
  },
  {
    name: 'Travelers',
    count: 12312
  }
])
</script>

<template>
  <main class="w-full flex flex-col items-center">
    <!-- 메인 화면 - 사이트 소개 -->
    <section class="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div class="container px-4 md:px-6">
        <div
          class="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]"
        >
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Travel Recommendations
              </div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Discover Your Next Adventure
              </h2>
              <p
                class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              >
                Our team of travel experts curates the best destinations, hotels, and experiences
                just for you.
              </p>
            </div>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                class="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Recommendations
              </a>
              <a
                class="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Explore Destinations
              </a>
            </div>
          </div>
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width="550"
            height="550"
            alt="Travel Recommendations"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
    <!-- 메인 화면 - 자료 분석 -->
    <section
      class="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-gray-100 dark:bg-gray-800"
    >
      <div class="container px-4 md:px-6">
        <div class="grid gap-6">
          <div class="space-y-2 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Metrics</h2>
            <p
              class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 pb-4"
            >
              Check out our latest travel statistics.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <MetricsCard
              v-for="(metric, index) in metrics"
              :key="index"
              v-bind:name="metric.name"
              v-bind:count="metric.count"
            ></MetricsCard>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div class="container px-4 md:px-6">
        <div class="grid gap-6">
          <div class="space-y-2 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Popular Destinations
            </h2>
            <p
              class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Explore the most sought-after travel destinations around the world.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="p-0">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Destination"
                  class="aspect-[4/3] object-cover rounded-t-lg"
                />
              </div>
              <div class="flex items-center p-4">
                <div class="font-medium">Paris, France</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  The City of Light, known for its iconic landmarks, romantic atmosphere, and
                  world-class cuisine.
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Europe</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-yellow-500"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  <span class="text-sm font-medium">4.8</span>
                </div>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="p-0">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Destination"
                  class="aspect-[4/3] object-cover rounded-t-lg"
                />
              </div>
              <div class="flex items-center p-4">
                <div class="font-medium">Tokyo, Japan</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  The Neon Metropolis, a vibrant city that blends ancient traditions with
                  cutting-edge technology.
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Asia</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-yellow-500"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  <span class="text-sm font-medium">4.6</span>
                </div>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="p-0">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Destination"
                  class="aspect-[4/3] object-cover rounded-t-lg"
                />
              </div>
              <div class="flex items-center p-4">
                <div class="font-medium">Bali, Indonesia</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  The Island of the Gods, renowned for its stunning beaches, lush landscapes, and
                  rich cultural heritage.
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400">Asia</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-yellow-500"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    ></polygon>
                  </svg>
                  <span class="text-sm font-medium">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-gray-100 dark:bg-gray-800"
    >
      <div class="container px-4 md:px-6">
        <div class="grid gap-6">
          <div class="space-y-2 text-center">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Blog Posts
            </h2>
            <p
              class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Read our latest travel insights and tips.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="p-0">
                <img
                  src=".https://generated.vusercontent.net/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Blog Post"
                  class="aspect-[4/3] object-cover rounded-t-lg"
                />
              </div>
              <div class="flex items-center p-4">
                <div class="font-medium">10 Must-Visit Destinations for Adventure Seekers</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  Explore the most thrilling and adrenaline-filled travel experiences, from hiking
                  in the Andes to scuba diving in the Great Barrier Reef.
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400">May 1, 2024</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400">2,345 views</span>
                </div>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="p-0">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Blog Post"
                  class="aspect-[4/3] object-cover rounded-t-lg"
                />
              </div>
              <div class="flex items-center p-4">
                <div class="font-medium">The Ultimate Guide to Sustainable Travel</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  Learn how to minimize your environmental impact while exploring the world, from
                  choosing eco-friendly accommodations to reducing your carbon footprint.
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400">April 15, 2024</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400">1,789 views</span>
                </div>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="p-0">
                <img
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Blog Post"
                  class="aspect-[4/3] object-cover rounded-t-lg"
                />
              </div>
              <div class="flex items-center p-4">
                <div class="font-medium">The Best Luxury Hotels for a Relaxing Getaway</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  Indulge in the ultimate in comfort and pampering at these top-rated hotels, from
                  private beach villas to mountain retreats with breathtaking views.
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400">March 30, 2024</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span class="text-sm text-gray-500 dark:text-gray-400">3,456 views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container px-4 md:px-6"></div>
    </section>
  </main>
</template>
