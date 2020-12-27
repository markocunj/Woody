<template>
<div class="col-md-12">
  <div class="row nema">
    <div class="col-md-2">
      <img src="../assets/logo.png"  width="20%">
    </div>
    <div class="col-md-4">
      <div class="container-fluid text-left">
        <h1>Pogledajte našu zimsku ponudu</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis amet laudantium, excepturi dolorum quibusdam, error tenetur incidunt corporis est repellendus non id reiciendis voluptatem at! Veritatis soluta assumenda iste beatae.</p>
       <a href="" class="btn  btn-dark mb-4 p-2">
            <i class="fab"></i>PONUDA</a>
    </div> 
    </div>
    <div class="col-md-6">
 <div class="card ">
    <article class="card-body mx-auto" style="max-width: 400px;">
      <h4 class="card-title mt-3 ">Prijava</h4>
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
          />
        </div>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-lock"></i> </span>
          </div>
          <input class="form-control" placeholder="Lozinka" type="password" />
        </div>
        <!-- form-group// -->
        <div class="form-group text-center ">
          <button type="submit" class="btn btn-primary w-25 "> Prijava</button>
        </div>
        <p class="divider-text">
          <span>ILI</span>
        </p>
        <p>
          <a href="" class="btn btn-block btn-google">
            <i class="fab fa-google"></i> Login via Google</a
          >
          <a href="" class="btn btn-block btn-facebook ">
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
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
