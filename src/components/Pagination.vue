<script >
  export default {
    props: {
      page: Number,
      totalPages: Number
    },
    methods: {
      changePage(newPage) {
        this.$emit('page-changed', newPage)
      }
    }
  }
</script>


<template>
  <div class="pagination">
    <button class="buttonPrevious" @click="changePage(page - 1)" :disabled="page === 1">Previous</button>
    <span class="paginationText">Page {{ page }} of {{ totalPages }}</span>
    <button class="buttonNext" @click="changePage(page + 1)" :disabled="page === totalPages">Next</button>
  </div>
</template>
  

<style scoped>
  .pagination {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    margin-top: 3rem;
  }
  .pagination .buttonPrevious {
    min-width: 30%;
    justify-self: end;
  }
  .pagination .buttonNext {
    min-width: 30%;
    justify-self: start;
  }
  button {
    margin: 0 0.5rem;
  }
</style>