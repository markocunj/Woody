<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-6 register-left">
        <img class="biglogo" alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="col-md-6 well">
        <div class="container jumbotrontop ">
          <h1 class="headline">Registracija</h1>
          <div class="row">
            <form>
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-6">
                    <label id="email">Email Address</label>
                    <input
                      type="text"
                      placeholder="Enter Email Address Here.."
                      class="form-control"
                      v-model="email"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label id="pass">Password</label>
                    <input
                      type="text"
                      placeholder="Password"
                      class="form-control"
                      v-model="password"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label id="repeat">Repeat Password</label>
                    <input
                      type="text"
                      placeholder="Password"
                      class="form-control"
                      v-model="repeatPassword"
                    />
                  </div>
                </div>
                <div class="regi">
                  <button
                    type="button"
                    @click="registracija()"
                    class="btn btn-lg btn-info"
                  >
                    Registracija
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  top: 20%;
  width: 60%;
  background-color: rgba(150, 228, 106, 0.712);
  border-radius: 30px;
  font-size: 1em;
  font-weight: bold;
  background-size: contain;
  position: relative;
  float: left;
  color: black;
}
.container:after {
  display: block;
  position: fixed;
  content: "";
}

.container:before {
  margin-top: 10%;
  position: relative;
  content: "";
  display: block;
}
</style>

<script>
import { firebase } from "@/firebase.js";

export default {
  name: "Registracija",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
    registracija() {
      if (this.password == this.repeatPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            console.log("Uspješna registracija");
            alert("Uspješna registracija");

            this.$router.replace({ name: "Prijava" });
          })
          .catch(function(error) {
            console.error("Došlo je do greške", error);
            alert(error.message);
          });
        console.log("Nastavak");
      } else {
        alert("Password nije jednak repeat passwordu.");
      }
    },
  },
};
</script>
