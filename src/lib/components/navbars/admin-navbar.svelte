<script lang="ts">
  // core components
  import type { Usuario } from "../../common/interfaces/usuario.interface";
  export let usuario: Usuario;
</script>

<!-- Navbar -->
<nav
  class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
>
  <div
    class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
  >
    <!-- Brand -->
    <a
      class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
      href="#pablo"
      on:click={(e) => e.preventDefault()}
    >
      Dashboard
    </a>
    <!-- Form -->
    <form
      class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
    >
      <div class="relative flex-col w-full flex-wrap items-stretch">
        <p class="text-white">{usuario.nombres + " " + usuario.apellidos}</p>
        <p class="text-gray-700">CMP: {usuario.cmp}</p>
      </div>
    </form>
    <!-- User -->
    <!-- <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
      <UserDropdown />
    </ul> -->
  </div>
</nav>
<!-- End Navbar -->
