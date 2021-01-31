<template>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label style="border-bottom: 1px solid #daa520">Email</label>
      <div class="form-control">
        {{ profilNarudzba.email }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilNarudzba",
  data() {
    return {};
  },

  props: ["profilNarudzba"],
};
</script>
