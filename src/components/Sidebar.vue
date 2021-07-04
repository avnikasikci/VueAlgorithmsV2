<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-5 text-white bg-dark"
    style="width: 280px;height:650px"
  >
    <a
      href="/sortalgorithm"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap" />
      </svg>
      <span class="fs-4">Sort Algortihm</span>
    </a>
    <hr />

    <ul class="nav nav-pills flex-column mb-auto">

      <li class="nav-item">
            <router-link class="nav-link text-white" to="/sortalgorithm/selectionsort">       
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#selectionsort" />
          </svg>
          Selection Sort
        </router-link>
        <!-- <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Home
        </a> -->
      </li>
      <li>
        <router-link class="nav-link text-white" to="/sortalgorithm/insertsort">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#insertsort" />
          </svg>
          Insert Sort
        </router-link>

        <router-link class="nav-link text-white" to="/sortalgorithm/quicksort">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#quicksort" />
          </svg>
          Quick Sort
        </router-link>
      </li>
      <!-- <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#table" />
          </svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#grid" />
          </svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#people-circle" />
          </svg>
          Customers
        </a>
      </li> -->
    </ul>
    <hr />
    <!-- <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div> -->
  </div>
</template>

<style scoped>
/* nav a.router-link-active {
    font-weight: 700;
} */
.router-link-active {

  background-color: rgb(54, 0, 248);
  /* padding: 2rem; */

}
</style>

<script>
export default {
  data() {
    return { 
      activeItem: 'about' 
      }
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem // no need for Vue.set()
    }
  }
}
</script>