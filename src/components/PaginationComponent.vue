<template>
  <div class="pagination">
        <button v-if="currentPageNumber > 1" class="pagination__link" @click="prevPage">
          <svg xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg)" width="9" height="16" viewBox="0 0 9 16"
               fill="none">
            <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
    <button v-for="number in totalPages"
            :key="number"
            class="pagination__link"
            :class="(number === currentPageNumber) ? ' pagination__link_active' : ''"
            @click="changePage(number)">
      {{ addZero(number) }}
    </button>
        <button v-if="currentPageNumber < totalPages  " class="pagination__link" @click="nextPage">
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
    totalPages: Number,
    pageNumber: Number

  },
  emits: ['changePageNum'],
  data() {
    return {
      currentPageNumber: Number
    }
  },
  methods: {
    addZero(num) {
      return num.toString().padStart(2, '0');
    },

    changePage(num) {
      this.currentPageNumber = num;
      this.$emit('changePageNum', num);

    },
    nextPage(){
      this.changePage(this.currentPageNumber+1);
    },
    prevPage(){
      this.changePage(this.currentPageNumber-1);
    }
  },

  computed: {

  },
  created() {
    this.currentPageNumber = this.pageNumber
  }
}
</script>
