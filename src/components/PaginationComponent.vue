<template>
  <div class="pagination">
    <button v-if="currentPageNumber > 1" class="pagination__link" @click="prevPage">
      <svg xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg)" width="9" height="16" viewBox="0 0 9 16"
           fill="none">
        <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button v-for="number in pageNumberArray"
            :key="number"
            class="pagination__link"
            :class="(number === currentPageNumber) ? ' pagination__link_active' : ''"
            @click="changePage(number)">
      {{ addZero(number) }}
    </button>
    <button v-if="currentPageNumber < pageNumber" class="pagination__link" @click="nextPage">
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
        <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    pageNumber: Number,
    showedNumButtons: Number,
  },
  emits: ['changePageNum'],
  data() {
    return {
      currentPageNumber: 1,
      pageNumberArray: []
    }
  },
  methods: {
    addZero(num) {
      return num.toString().padStart(2, '0');
    },
    nextPage() {
      this.changePage(this.currentPageNumber + 1);
    },
    prevPage() {
      this.changePage(this.currentPageNumber - 1);
    },
    changePage(num) {
      if (this.currentPageNumber !== num && num > 0 && num <= this.pageNumber) {
        this.currentPageNumber = num;
        this.$emit('changePageNum', this.currentPageNumber);
      }
      this.visiblePageNumbers();
    },
    visiblePageNumbers() {
      this.pageNumberArray = Array.from(
          {length: (this.currentPageNumber + this.showedNumButtons - this.currentPageNumber)},
          (value, index) => this.currentPageNumber + index
      ).filter((value) => value <= this.pageNumber);
    }
  },
  changePage() {

  },
  created() {
    this.visiblePageNumbers();
  }
}
</script>

<style scoped>

</style>