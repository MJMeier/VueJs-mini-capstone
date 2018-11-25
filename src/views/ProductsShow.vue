<template>
   <div class="home">
     <div class="container">
       <h1>Product info</h1>
       {{ product }}
       <a href="/#/">Back to all products</a>
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
       product: {}
     };
   },
   created: function() {
     axios.get("http://localhost:3000/api/products/" + this.$route.params.id).then(response => {
       this.product = response.data;
     });
   },
   methods: {},
   computed: {}
 };
 </script>