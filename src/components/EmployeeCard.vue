<script >
  export default {
    props: {
      employee: Object
    }
  }
</script>


<template>
  <div class="employee-card">
    <img :src="employee.avatar" alt="Profile picture" class="avatar">
    <div class="employee-info">
      <h3>{{ employee.first_name }} {{ employee.last_name }}</h3>
      <a :href="'mailto:' + employee.email">{{ employee.email }}</a>
    </div>
  </div>
</template>
  

<style scoped>
  .employee-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  }
  .avatar {
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }
  .employee-info {
    display: flex;
    flex-direction: column;
  }
</style>