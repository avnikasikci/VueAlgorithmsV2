<template>
  <div>

    <div class="overview">
      <br />
      <div>
        <input
          v-model="inputArrayStr"
          placeholder="input array sort"
          @change="validArray(inputArrayStr)"
        />
        <br />
        <br />

        <p>Array is: {{ arrayToBeSorted }}</p>
        <br />
        <p v-if="isValidArray">Error is: {{ isValidErrorMsg }}</p>

        <transition name="fade" v-if="!isManipulatingArray">
          <div class="buttons-container">
            <button class="button" v-on:click="shuffle()">
              <span>{{ shuffleButtonText }}</span>
            </button>
            <button
              class="button"
              v-for="b in sortAlgorithms"
              :key="b.code"
              v-on:click="sort(b)"
            >
              {{ b.name }}
            </button>
            <button class="button" v-on:click="demoTest()">
              <span>demo test</span>
            </button>
          </div>
        </transition>
      </div>
    </div>

    <transition-group
      tag="div"
      name="list-animation"
      class="array-to-be-sorted"
    >
      <div
        v-for="num in arrayToBeSorted"
        v-bind:key="num"
        v-bind:class="[
          num % 2 == 0 ? 'even' : 'odd',
          'list-animation-item',
          'list-item'
        ]"
      >
        <span>{{ num }}</span>
      </div>
    </transition-group>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <!-- <th scope="col">id</th> -->
          <th scope="col">Algortihm Name</th>
          <th scope="col">Step</th>
          <th scope="col">stepArray</th>
        </tr>
      </thead>
      <tbody v-for="stepEntity in StepList" v-bind:key="stepEntity.id">
        <tr>
          <th scope="row">{{ stepEntity.id }}</th>
          <!-- <td>{{ stepEntity.id }}</td> -->
          <td>{{ stepEntity.sortName }}</td>
          <!-- <td>{{ stepEntity.stepName }} {{stepEntity.id}}  </td> -->
          <td>{{ stepEntity.stepName }}</td>
          <td>{{ stepEntity.stepArray }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import demoService from "@/service/demoService";
import sortService from "@/service/sortService.js";
// import Sidebar from "../components/Sidebar";

// var mylib = require('./sorting');

export default {
  //name: "AlgSelection",
  data() {
    return {
      inputArrayStr: "",
      arrayToBeSorted: [1, 2, 3, 4, 5, 6, 7, 8],
      beforeStepArray: [],
      isManipulatingArray: false,
      isValidArray: false,
      isValidErrorMsg: "",
      StepList: [
        // {
        //   id: 1,
        //   sortName: "",
        //   stepName: "",
        //   stepArray: []
        // }
      ],

      shuffleButtonText: "Shuffle!",

      sortAlgorithms: [
        { name: "Bubble sort", fn: this.bubbleSort },
        { name: "Selection sort", fn: this.selectionSort },
        { name: "Insertion sort", fn: this.insertionSort }
      ]
    };
  },
  components: {
    // Sidebar,
    // Navbar
  },
  computed: {},
  methods: {
    validArray: function(arrayStr) {
      this.isValidArray = false;
      this.arrayToBeSorted = [];
      var _InputArray = arrayStr.split(",");
      _InputArray.forEach(element => {
        console.log(element);
        if (!isNaN(element)) {
          this.arrayToBeSorted.push(parseInt(element));
        } else {
          this.isValidArray = true;
          this.isValidErrorMsg = "please only number";
        }
      });
    },

    shuffle: async function() {
      this.StepList = [];

      this.isManipulatingArray = true;
      var j, i;
      for (i = this.arrayToBeSorted.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        this.arraySwap(this.arrayToBeSorted, i, j);
        await this.sleep();
      }
      this.StepList = [];
      this.isManipulatingArray = false;
    },
    sleep: function() {
      return new Promise(resolve => setTimeout(resolve, 550));
    },

    arraySwap: function(array, indexA, indexB) {
      var x = array[indexA];
      this.arraySetWithoutIndexes(array, indexA, array[indexB]);
      this.arraySetWithoutIndexes(array, indexB, x);
    },
    arraySetWithoutIndexes: function(array, index, value) {
      array.splice(index, 1, value);
    },

    sort: function(sortAlgorithm) {
      this.isManipulatingArray = true;
      sortAlgorithm
        .fn(this.arrayToBeSorted)
        .then(() => (this.isManipulatingArray = false));
    },

    setStepArray: function(array, sortName) {
      let maxId = 1;
      this.StepList.forEach(stepEntity => {
        if (stepEntity.id > maxId) {
          maxId = stepEntity.id;
        }
      });
      console.log("Array Swap array");
      let newArray = [];
      array.forEach(num => {
        newArray.push(num);
      });
      this.StepList.push({
        id: maxId + 1,
        sortName: sortName,
        stepName: "Step " + (maxId + 1),
        stepArray: newArray
      });
    },

    bubbleSort: async function(a) {
      this.StepList = [];

      var len = a.length;
      for (var i = len - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
          if (a[j - 1] > a[j]) {
            this.arraySwap(a, j - 1, j);
            this.setStepArray(a, "Bubble Sort");
            await this.sleep();
          }
        }
      }
    },

    selectionSort: async function(a) {
      this.StepList = [];
      var minIdx,
        temp,
        len = a.length;

      for (var i = 0; i < len; i++) {
        minIdx = i;
        for (var j = i + 1; j < len; j++) {
          if (a[j] < a[minIdx]) {
            minIdx = j;
          }
        }

        this.arraySwap(a, i, minIdx);
        this.setStepArray(a, "Selection Sort");
        await this.sleep();
      }
    },

    insertionSort: async function(a) {
      this.StepList = [];

      var i,
        len = a.length,
        el,
        j;

      for (i = 1; i < len; i++) {
        el = a[i];
        j = i;

        while (j > 0 && a[j - 1] > el) {
          a[j] = a[j - 1];
          j--;
        }

        this.arraySetWithoutIndexes(a, j, el);

        this.setStepArray(a, "Insert Sort");

        await this.sleep();
      }
    }
  },
  watch: {
    inputSortArray(value) {
      this.inputSortArray = value;
      this.validateNumber(value);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

html {
  overflow-y: scroll;
}

body {
  display: grid;
  grid-template-rows: 80px 1fr;
  background-color: #fdef78;
  font-family: "Roboto Slab", serif;
  margin-bottom: 10px;
}

header {
  display: grid;
  color: white;
  background: #2f2e2a;
}

header h1 {
  place-self: center;
  font-size: 42px;
}

#app-sorting {
  place-self: center;
  margin-top: 30px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 60px 1fr;
  justify-items: center;
}

.buttons-container {
  height: 60px;
}

.array-to-be-sorted {
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(8, auto);
  justify-items: center;
  align-items: center;
}

.even {
  background-color: #f96167;
}

.odd {
  background-color: #2f2e2a;
}

.list-item {
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 15px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  color: white;
  margin: 10px;
  font-size: 30px;
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  text-align: center;
}

.list-animation-item {
  transition: all ease 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: all ease 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px) scale(0.9);
}

.button {
  box-shadow: 0px 1px 0px 0px #f0f7fa;
  background-color: #33bdef;
  border-radius: 6px;
  border: 1px solid #057fd0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #5b6178;
  margin: 10px;
}

.button:hover {
  background-color: #019ad2;
}

.button:active {
  position: relative;
  top: 1px;
}
</style>