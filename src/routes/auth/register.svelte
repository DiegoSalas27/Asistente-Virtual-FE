<script lang="ts">
  import { signUp as register } from '$lib/auth'
  
  let username = "";
  let password = "";

  function signUp() {
    register(username, password)
  }

</script>

<div class="container mx-auto px-4 h-full">
	<div class="flex content-center items-center justify-center h-full">
		<div class="w-full lg:w-6/12 px-4">
			<div
				class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
			>
				<div class="rounded-t mb-0 px-6 py-6">
					<div class="text-center mb-3">
						<h6 class="text-blueGray-500 text-sm font-bold">Registrarse</h6>
					</div>
					<hr class="mt-6 border-b-1 border-blueGray-300" />
				</div>
				<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
					<div class="text-blueGray-400 text-center mb-3 font-bold">
						<small>Regístrese con sus credenciales</small>
					</div>
					<form on:submit|preventDefault={signUp}>
						<div class="relative w-full mb-3">
							<label
								class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
								for="grid-name"
							>
								Código Essalud
							</label>
							<input
								id="grid-name"
								type="email"
								class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Código essalud, ejem: 12345"
								value={username}
								on:input={(e) => (username = e.target.value)}
							/>
						</div>

						<div class="relative w-full mb-3">
							<label
								class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
								for="grid-password"
							>
								Contraseña
							</label>
							<input
								id="grid-password"
								type="password"
								class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								placeholder="Ingrese contraseña"
								value={password}
								on:input={(e) => (password = e.target.value)}
							/>
						</div>

						<div class="text-center mt-6">
							<button
								on:click={signUp}
								class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
								type="button"
							>
								Crear cuenta
							</button>
						</div>
					</form>
				</div>
			</div>
			<div class="flex flex-wrap mt-6 relative">
				<!-- <div class="w-1/2">
          <a href="#pablo" on:click={(e) => e.preventDefault()} class="text-blueGray-200">
            <small>Forgot password?</small>
          </a>
        </div> -->
				<div class="w-full text-center">
					<span class="text-blueGray-200">¿Ya tienes una cuenta?</span>
					<a href="/auth/login" class="text-white hover:text-blueGray-500 px-3"> Iniciar Sesión </a>
				</div>
			</div>
		</div>
	</div>
</div>
