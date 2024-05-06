<script setup lang="ts">
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import type { BoardListProps } from '@/types/board.type'

defineProps<BoardListProps>()
</script>

<template>
  <div
    class="w-full bg-white dark:bg-gray-950 rounded-lg p-4 md:p-6 border-[1px] border-gray-400 border-solid"
  >
    <div class="flex flex-row justify-between items-center mb-4">
      <h3 class="text-xl h-full font-bold flex items-center text-center">{{ title }}</h3>
      <span class="text-sm text-gray-400 dark:text-gray-500 cursor-pointer">더보기</span>
    </div>
    <!-- 정렬 조건, 필터링 조건, 검색 조건 등등... -->
    <!-- <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-4">
        <button
          class="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center space-x-2"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <IconSort />
          <span>Sort by</span>
        </button>
        <button
          class="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center space-x-2"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <IconFilter />
          <span>Filter</span>
        </button>
      </div>
      <div class="flex items-center space-x-4">
        <input
          class="flex h-10 w-full border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 max-w-xs bg-gray-100 dark:bg-gray-800 dark:text-gray-50 px-3 py-2 rounded-md text-sm focus:outline-none"
          placeholder="Search posts..."
          type="search"
        />
        <button
          class="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center space-x-2"
        >
          <IconRefresh />
          <span>Refresh</span>
        </button>
      </div>
    </div> -->
    <Table>
      <!-- <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]"> Invoice </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead class="text-right"> Amount </TableHead>
        </TableRow>
      </TableHeader> -->
      <TableBody class="cursor-pointer h-12">
        <TableRow>
          <TableCell class="font-medium"> INV001 </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell class="text-right"> $250.00 </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="font-medium"> INV001 </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell class="text-right"> $250.00 </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="font-medium"> INV001 </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell class="text-right"> $250.00 </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="font-medium"> INV001 </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell class="text-right"> $250.00 </TableCell>
        </TableRow>
        <TableRow>
          <TableCell class="font-medium"> INV001 </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell class="text-right"> $250.00 </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
