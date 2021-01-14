<template>
  <div class="prijava">
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 40%" />
    <div class="container">
      <div class="form-row justify-content-center">
        <div class="form-group col-md-4">
          <div class="card sign-in">
            <article class="card-body">
              <h4 class="card-title mb-4 mt-1" style="">
                Prijava
              </h4>
              <hr
                class=""
                style="color: #daa520; border: 1px solid; width: 35%;"
              />
              <p>
                <a href="" class="btn btn-block btn-outline-light">
                  <i class="fab fa-google google"></i>
                  Prijava via Google</a
                >
                <a href="" class="btn btn-block btn-outline-primary">
                  <i class="fab fa-facebook-f"></i> Prijava via Facebook</a
                >
              </p>
              <hr style="border-color: #ccc" />
              <form>
                <div class="form-group">
                  <input
                    name=""
                    class="form-control"
                    placeholder="Email or login"
                    type="email"
                  />
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="******"
                    type="password"
                  />
                </div>
              </form>
              <button type="submit" class="btn btn1 btn-light btn-block">
                Login
              </button>
            </article>
          </div>
        </div>
      </div>
      <!-- card.// -->
    </div>
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 40%" />
  </div>
</template>

<script>
import { firebase } from "@/firebase.js";
import Home from "@/views/Home.vue";

export default {
  name: "Prijava",
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
        .then((result) => {
          console.log("Uspjesna prijava");
        })
        .catch((error) => {
          console.error("Došlo je do greške", error);
        });
      console.log("Nastavak");
    },
  },
};
</script>

<style scoped>
.btn1 {
  background-color: transparent;
  color: #daa520;
}
.btn1:hover {
  background-color: #ccc;
  color: black;
}

.container {
  background-color: transparent;
  margin: auto;
  color: white;
  border: 0;
  margin-top: 44px;
  margin-bottom: 44px;
  padding: 30px;
}
.ikone {
  opacity: 0.5;
}

.sign-in {
  background-color: #212529;
}

.google {
  background: -webkit-linear-gradient(#ea4335, #fbbc05, #34a853, #4285f4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
