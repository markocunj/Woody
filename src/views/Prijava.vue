<template>
  <div :style="image">
    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">Prijava</h4>
        <p class="text-center">Prijavite se</p>
        <form>
          <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <input
              name=""
              class="form-control"
              placeholder="Email adresa"
              type="email"
              v-model="email"
            />
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
            </div>
            <input
              class="form-control"
              placeholder="Lozinka"
              type="password"
              v-model="password"
            />
          </div>
          <!-- form-group// -->
          <div class="form-group">
            <button
              type="button"
              class="btn btn-primary btn-block"
              @click="prijava"
            >
              Prijava
            </button>
          </div>
          <p class="divider-text">
            <span class="bg-light">ILI</span>
          </p>
          <p>
            <a href="" class="btn btn-block btn-google">
              <i class="fab fa-google"></i> Login via Google</a
            >
            <a href="" class="btn btn-block btn-facebook">
              <i class="fab fa-facebook-f"></i> Login via facebook</a
            >
          </p>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import Home from "@/views/Home.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    prijava() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(function() {
          console.log("Uspješna prijava");
          alert("Uspješna prijava");
        })
        .catch(function(error) {
          console.error("Došlo je do greške", error);
          alert(error.message);
        });
      console.log("Nastavak");
    },
  },
};
</script>

<style scoped>
.divider-text {
  position: relative;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.divider-text span {
  padding: 7px;
  font-size: 12px;
  position: relative;
  z-index: 2;
}
.divider-text:after {
  content: "";
  position: absolute;
  width: 100%;
  border-bottom: 1px solid #ddd;
  top: 55%;
  left: 0;
  z-index: 1;
}

.btn-facebook {
  background-color: #405d9d;
  color: #fff;
}
.btn-google {
  background-color: #7c98a8;
  color: #fff;
}
</style>
