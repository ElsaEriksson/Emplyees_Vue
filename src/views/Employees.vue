<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EmployeeCard from '../components/EmployeeCard.vue';
import Pagination from '../components/Pagination.vue';
import { getEmployees as getEmployeesData } from "../services/getEmployees";

const employees = ref([]);
const page = ref(1);
const totalPages = ref(1);

const getEmployees = async (pageNumber: number) => {
  try {
    const data = await getEmployeesData(pageNumber);
    employees.value = data.data;
    page.value = data.page;
    totalPages.value = data.total_pages;
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

onMounted(() => {
  getEmployees(page.value);
});
</script>


<template>
    <div class="employees">
      <EmployeeCard v-for="employee in employees" :key="employee.id" :employee="employee" />
    </div>
    <Pagination :page="page" :totalPages="totalPages" @page-changed="getEmployees" />
</template>


<style scoped>
  .employees {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    .employees {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10%
    } 
  }
</style>