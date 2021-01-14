<template>
  <div class="home">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template #header>Woody</template>

      <template #lead>
        <div style="opacity: 1.2;">
          Dobrodošli na naš web-shop! Uživajte u kupnji. Za sva pitanja i pomoć
          stojimo vam na raspolaganju.
        </div>
      </template>

      <hr class="my-4" style="color: #daa520; border: 1px solid; width: 40%" />

      <p>
        Ponudu možete pogledati pritiskom na Ponuda, ili klikom na gumb koji se
        nalazi niže.
      </p>
    </b-jumbotron>
    <div class="container" style="width: 50%;">
      <div class="form-row">
        <div class="form-group col-md-3 ikone">
          <h3><i class="fas fa-tree"></i></h3>
          <h4>Najbolja <br />drva</h4>
        </div>
        <div class="form-group col-md-3 ikone">
          <h3><i class="fas fa-truck"></i></h3>
          <h4>Brza <br />dostava</h4>
        </div>
        <div class="form-group col-md-3 ikone">
          <h3><i class="fas fa-info"></i></h3>
          <h4>Tehnička <br />podrška</h4>
        </div>
        <div class="form-group col-md-3 ikone">
          <h3><i class="fas fa-tags"></i></h3>
          <h4>Dobra <br />ponuda</h4>
        </div>
      </div>
    </div>
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 40%" />
    <div class="container">
      <div class="form-row justify-content-center">
        <div class="form-group col-md-4">
          <div class="card sign-in">
            <article class="card-body">
              <h4 class="card-title mb-4 mt-1" style="">
                Ponuda
              </h4>
              <p>
                Proučite našu ponudu
              </p>
              <hr style="border-color: #ccc" />
              <p>
                Pogledajte našu ponudu drva, u kojoj sami birate dužinu i
                količinu drva koja vam najviše odgovara, klikom na gumb.
              </p>
              <hr
                class="my-4"
                style="color: #616D6D; border: 1px solid; width: 35%"
              />
              <p>
                Trenutno traju zimski popusti u kojima cijena ide čak do -20%!
              </p>
              <router-link to="/ponuda">
                <button type="button" class="btn btn1 btn-light btn-block">
                  Ponuda
                </button></router-link
              >
            </article>
          </div>
          <!-- card.// -->
        </div>

        <div v-if="!store.currentUser" class="form-group col-md-4">
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
                    v-model="email"
                  />
                </div>
                <!-- form-group// -->
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Lozinka"
                    type="password"
                    v-model="password"
                  />
                </div>
              </form>
              <button
                type="button"
                class="btn btn1 btn-light btn-block"
                @click="prijava()"
              >
                Prijava
              </button>
            </article>
          </div>
          <!-- card.// -->
        </div>
      </div>
    </div>
    <hr class="my-4" style="color: #616D6D; border: 1px solid; width: 35%" />
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import store from "@/store";
export default {
  data() {
    return {
      store,
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
.jumbotron {
  background-image: url("../assets/suma.jpg");
  background-size: cover;
}
.container {
  background-color: transparent;
  margin: auto;
  color: white;
  border: 0;
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
