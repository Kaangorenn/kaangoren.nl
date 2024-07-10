<template>
  <div class="h-screen w-screen grid place-items-center">
    <div class="bg-zinc-800 p-8 rounded-2xl">
      <h1 class="text-4xl text-white text-center pb-5">Rekenmachine</h1>
      <div class="grid gap-4">
        <input v-model="input_1" type="number" placeholder="Vul een nummer in" class="rounded-md p-5">
        <div class="bg-zinc-600 p-5 rounded-md">
          <h1 class="text-center text-white text-2xl">Kies een methode</h1>
          <div class="grid grid-cols-4 gap-4 text-white text-2xl mt-3">
            <a @click="selectMethod('+')" :class="{ 'bg-yellow-400 text-zinc-800': selected_method === '+' }" class="bg-zinc-700 rounded-md text-center cursor-pointer">+</a>
            <a @click="selectMethod('-')" :class="{ 'bg-yellow-400 text-zinc-800': selected_method === '-' }" class="bg-zinc-700 rounded-md text-center cursor-pointer">-</a>
            <a @click="selectMethod('*')" :class="{ 'bg-yellow-400 text-zinc-800': selected_method === '*' }" class="bg-zinc-700 rounded-md text-center cursor-pointer">X</a>
            <a @click="selectMethod('/')" :class="{ 'bg-yellow-400 text-zinc-800': selected_method === '/' }" class="bg-zinc-700 rounded-md text-center cursor-pointer">÷</a>


            <!-- <a @click="selectMethod('-')" class="bg-zinc-700 rounded-md text-center cursor-pointer" v-bind:class="{ 'bg-purple-400': selected_method === '-' }">-</a>
            <a @click="selectMethod('*')" class="bg-zinc-700 rounded-md text-center cursor-pointer" v-bind:class="{ 'bg-purple-400': selected_method === '*' }">X</a>
            <a @click="selectMethod('/')" class="bg-zinc-700 rounded-md text-center cursor-pointer" v-bind:class="{ 'bg-purple-400': selected_method === '/' }">÷</a> -->
          </div>
        </div>
        <input v-model="input_2" type="number" placeholder="Vul een nummer in" class="rounded-md p-5">
        <a @click="calculate()" class="bg-yellow-500 hover:bg-yellow-600 text-center p-3 text-white cursor-pointer rounded-md">Reken uit</a>
      </div>

      <div v-if="outcome" class="bg-zinc-700 p-5 text-center text-white rounded-md mt-4">
        <h1>Uitslag</h1>
        <h1>{{ outcome }}</h1>
      </div>
      <!-- <div class="text-white">
        input1: {{ input_1 }}
        <br>
        input2: {{ input_2 }}
        <br>
        method: {{ selected_method }}
        <br>
        outcome: {{ outcome }}
      </div> -->
    </div>
  </div>
</template>
<style>
body {
  font-family: 'Noto Sans', sans-serif;
  background-color: black;
}
</style>
<script>
export default {
  data() {
    return {
      input_1: null,
      input_2: null,
      selected_method: '+',
      outcome: null,
    }
  },
  methods: {
    selectMethod(method) {
      this.selected_method = method;
    },
    calculate() {
      if (this.selected_method === '+') {
        this.outcome = this.input_1 + this.input_2
      } else if (this.selected_method === '-') {
        this.outcome = this.input_1 - this.input_2
      } else if (this.selected_method === '*') {
        this.outcome = this.input_1 * this.input_2
      } else if (this.selected_method === '/') {
        this.outcome = this.input_1 / this.input_2
      }
    }
  }
}
</script>