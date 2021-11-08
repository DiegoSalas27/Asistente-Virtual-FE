<script lang="ts">
	import { page } from '$app/stores';
	// core components
	import type { Usuario } from '$common/interfaces/usuario.interface';

	let collapseShow = 'hidden';
	const bot = '/assets/img/virtual-assistant.png';

	function toggleCollapseShow(classes) {
		collapseShow = classes;
	}

	export let usuario: Usuario;
	let location = '';
	page.subscribe((res) => {
		location = res.path;
	});
</script>

<nav
	class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
>
	<div
		class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
	>
		<!-- Toggler -->
		<button
			class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
			type="button"
			on:click={() => toggleCollapseShow('bg-white m-2 py-3 px-6')}
		>
			<i class="fas fa-bars" />
		</button>
		<!-- Brand -->
		<div
			class="md:block text-left ml-64 md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
		>
			<img
				alt="..."
				src={bot}
				class="rounded-full h-auto align-middle border-none lg:-ml-8 md:ml-8 max-w-80-px inline-block"
			/> <span>Asistente Virtual</span>
		</div>
		<!-- Collapse -->
		<div
			class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded {collapseShow}"
		>
			<!-- Collapse header -->
			<div
				class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
			>
				<div class="flex flex-wrap">
					<div class="w-6/12">
						<a
							class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
							href="/"
						>
							Asistente Virtual
						</a>
					</div>
					<div class="w-6/12 flex justify-end">
						<button
							type="button"
							class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
							on:click={() => toggleCollapseShow('hidden')}
						>
							<i class="fas fa-times" />
						</button>
					</div>
				</div>
			</div>
			<!-- Form -->
			<form class="mt-6 mb-4 md:hidden">
				<div class="mb-3 pt-0">
					<input
						type="text"
						placeholder="Search"
						class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
					/>
				</div>
			</form>

			<!-- Divider -->
			<hr class="my-4 md:min-w-full" />
			<!-- Heading -->
			<h6
				class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
			>
				Menú
			</h6>
			<!-- Navigation -->

			<ul class="md:flex-col md:min-w-full flex flex-col list-none">
				<li class="items-center">
					<a
						href="/admin/recetas-medicas"
						class="text-xs uppercase py-3 font-bold block {location.includes('/admin/recetas-medicas')
							? 'text-red-500 hover:text-red-600'
							: 'text-blueGray-700 hover:text-blueGray-500'}"
					>
						<i
							class="fas fa-notes-medical mr-2 text-sm {location.includes('/admin/recetas-medicas')
								? 'opacity-75'
								: 'text-blueGray-300'}"
						/>
						Recetas médicas
					</a>
				</li>
				{#if usuario.rol === 'admin'}
					<li class="items-center">
						<a
							href="/admin/doctores"
							class="text-xs uppercase py-3 font-bold block {location == '/admin/doctores'
								? 'text-red-500 hover:text-red-600'
								: 'text-blueGray-700 hover:text-blueGray-500'}"
						>
							<i
								class="fas fa-user-md mr-2 text-sm {location == '/admin/doctores'
									? 'opacity-75'
									: 'text-blueGray-300'}"
							/>
							Doctores
						</a>
					</li>
				{/if}
				<li class="items-center">
					<a
						href="/admin/dashboard"
						class="text-xs uppercase py-3 font-bold block {location == '/admin/dashboard'
							? 'text-red-500 hover:text-red-600'
							: 'text-blueGray-700 hover:text-blueGray-500'}"
					>
						<i
							class="fas fa-tv mr-2 text-sm {location == '/admin/dashboard'
								? 'opacity-75'
								: 'text-blueGray-300'}"
						/>
						Dashboard
					</a>
				</li>

				<li class="items-center">
          <a
            href="/admin/settings"
            class="text-xs uppercase py-3 font-bold block {location == '/admin/settings' ? 'text-red-500 hover:text-red-600':'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="fas fa-tools mr-2 text-sm {location == '/admin/settings' ? 'opacity-75' : 'text-blueGray-300'}"
            ></i>
            Settings
          </a>
        </li>

				<li class="items-center">
          <a
            href="/admin/tables"
            class="text-xs uppercase py-3 font-bold block {location.includes('/admin/tables') ? 'text-red-500 hover:text-red-600':'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="fas fa-table mr-2 text-sm {location.includes('/admin/tables') ? 'opacity-75' : 'text-blueGray-300'}"
            ></i>
            Tables
          </a>
        </li> 
        <li class="items-center">
          <a
            href="/admin/maps"
            class="text-xs uppercase py-3 font-bold block {location == '/admin/maps' ? 'text-red-500 hover:text-red-600':'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="fas fa-map-marked mr-2 text-sm {location == '/admin/maps' ? 'opacity-75' : 'text-blueGray-300'}"
            ></i>
            Maps
          </a>
        </li>
			</ul>

			<!-- Divider -->
			<!-- <hr class="my-4 md:min-w-full" /> -->
			<!-- Heading -->
			<!-- <h6
        class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"> -->
			<!-- No Layout Pages
      </h6> -->
			<!-- Navigation -->
			<!-- 
      <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
        <li class="items-center">
          <a
            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
            href="/landing"
          >
            <i class="fas fa-newspaper text-blueGray-300 mr-2 text-sm"></i>
            Landing Page
          </a>
        </li>

        <li class="items-center">
          <a
            class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
            href="/profile"
          >
            <i class="fas fa-user-circle text-blueGray-300 mr-2 text-sm"></i>
            Profile Page
          </a>
        </li>
      </ul> -->
		</div>
	</div>
</nav>
