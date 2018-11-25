<template>
  <div class="home container">
    <div class="jumbotron">
      <h1 class="display-4">Trudy's!!</h1>
      <p class="lead">Best pepper relish ever!</p>
      <hr class="my-4">
    </div>
    <h1>Add new Product</h1>
    Name: <input v-model="newProductName" type="text">
    Price: <input v-model="newProductPrice" type="text">
    Description: <input v-model="newProductDescription" type="text">
    Supplier ID: <input v-model="newProductSupplierId" type="text">
     <button v-on:click="createProduct()" class="btn btn-primary">Create</button>

    <h1>Search Filter</h1>
    <input type="text" v-model="searchFilter">

    <div class="row">
      <div v-for="product in filterBy(products, searchFilter, 'name')" class="col-md-4 mb-2">
        <div class="card">
          <img class="card-img-top" v-bind:src="product.images[0]">
          <div class="card-body">
            <h5 class="card-title">{{ product.name}}</h5>
            <p class="card-text">{{product.description}}</p>
            <a v-bind:href="'/#/products/${product.id}'" class="btn btn-primary">View Product</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
  var axios = require("axios");

export default {
    data: function() {
      return {
        message: "Welcome to Vue.js!",
        products: [],
        newProductName: "",
        newProductPrice: "",
        newProductDescription: "",
        newProductSupplierId: "",
        searchFilter: "",
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/products").then(
        function(response) {
          console.log(response.data);
          this.products = response.data;
        }.bind(this)
      );
    },
    methods: {
      createProduct: function() {
        console.log("createProduct");
        var params = {
          name: this.newProductName,
          price: this.newProductPrice,
          description: this.newProductDescription,
          supplier_id: this.newProductSupplierId
        };
        axios.post("http://localhost:3000/api/products", params).then(function(response) {
          console.log(response);
          this.products.push(response.data);
          this.newProductName = "";
          this.newProductPrice = "";
          this.newProductDescription = "";
          this.newProductSupplierId = "";
        }.bind(this)
        )
          .catch(
            function(error) {
              console.log(error.response);
            }.bind(this)
          );
      },
    },
    computed: {}
  };
</script>
