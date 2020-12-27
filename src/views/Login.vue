<template> 
<div class="col-md-12">
  <div class="row">
    <div class="col-md-6 register-left">
      <img class="biglogo" alt="Vue logo" src="../assets/logo.png" />
    </div> 
     <div class="col-md-6 ">
    <div class="card ">
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
</div>
</div>  




  <!-- card.// -->
</template>