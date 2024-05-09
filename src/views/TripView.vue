<script setup lang="ts"></script>

<template>
  <div
    key="1"
    className="flex flex-col lg:flex-row lg:space-x-8 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
  >
    <div className="flex-1">
      <h1 className="text-4xl font-bold">기존에 경험하지 못한 새로운 여행 플래너</h1>
      <p className="mt-4 text-lg">
        고민마 한번 여행 계획을 바이크를 통해 부담 없이 스케줄을 해보세요.
      </p>
      <div className="mt-8 relative rounded-md">
        <input
          className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          list="suggestions"
          name="search"
          placeholder="어디로 여행을 떠나시나요?"
          type="text"
        />
        <Button className="absolute right-0 top-0 mt-1 mr-2">
          <SearchIcon className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </div>
    <div className="flex-1 mt-8 lg:mt-0">
      <div className="h-full w-full">
        <img
          alt="Map"
          className="rounded-lg shadow-lg object-cover object-center h-full w-full"
          height="600"
          src="https://generated.vusercontent.net/placeholder.svg"
          width="1000"
        />
      </div>
    </div>
  </div>
</template>
