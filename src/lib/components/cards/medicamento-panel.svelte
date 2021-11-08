<script lang="ts">
	import axios from '$lib/httpService';
	import { onMount } from 'svelte';
	import Select from 'svelte-select';
	import { apiUrls } from '../../common/constants/apiUrls';
	import type { IPacientes } from '../../common/interfaces/pacientes.interface';
	import userStore from '$lib/stores/user';
	import type { IRecetaMedicaDetail } from '../../common/interfaces/recetas-medicas.interface';

	export let recetaMedica: IRecetaMedicaDetail = undefined;

	let pacientesIds = [];
	let selectedPatient: IPacientes = undefined;
	let medicamentos: { productoNombre: string; indicacion: string }[] = [
		{
			productoNombre: '',
			indicacion: ''
		}
	];

	onMount(() => {
		document.getElementById('pacientes').addEventListener('input', examplePromise);
	});

	async function examplePromise(filterText) {
		const res: any = await axios.get(`${apiUrls.PACIENTES_URL}?nombres=${filterText}`);

		const res2 = (await res.data.result) as IPacientes[];

		let pacientes = res2.map((r) => r.nombres + ' ' + r.apellidos);
		pacientesIds = res2.map((r) => {
			return { nombres: r.nombres + ' ' + r.apellidos, id: r.id };
		});

		return pacientes;
	}

	function handleSelect(event) {
		selectedPatient = event.detail.value;
	}

	function handleClear() {
		selectedPatient = undefined;
	}

	async function register() {
		let paciente = pacientesIds.find((p) => p.nombres === selectedPatient);

		const body = {
			pacienteId: paciente.id,
			doctorId: $userStore.name,
			productos: medicamentos
		};

		const res: any = await axios.post(apiUrls.RECETAS_MEDICAS_URL, body);

		console.log(res);
	}

	function addProduct() {
		medicamentos = [
			...medicamentos,
			{
				productoNombre: '',
				indicacion: ''
			}
		];
	}
</script>

<div
	class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
>
	<div class="rounded-t bg-white mb-0 px-6 py-6">
		<div class="text-center flex justify-between">
			<h6 class="text-blueGray-700 text-xl font-bold">{ !recetaMedica ? 'Registrar receta médica' : 'Visualizar receta médica'}</h6>
			<button
				on:click={register}
				class="bg-red-400 text-white active:bg-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
				type="button"
			>
				Registrar
			</button>
		</div>
	</div>
	<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
		<form>
			{#if recetaMedica}
				<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Paciente</h6>
				<input
					id="grid-city"
					type="email"
					class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
					value={recetaMedica.paciente}
					disabled
				/>
			{:else}
				<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Buscar paciente</h6>
				<div class="flex flex-wrap">
					<div class="w-full">
						<div class="relative w-full mb-3">
							<Select
								id="pacientes"
								loadOptions={examplePromise}
								on:select={handleSelect}
								on:clear={handleClear}
							/>
						</div>
					</div>
				</div>
			{/if}

			<hr class="mt-6 border-b-1 border-blueGray-300" />
			<div class="flex flex-wrap justify-between">
				{#if recetaMedica}
					<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
					 Medicamentos
					</h6>
				{:else}
				<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
					Ingresar medicamentos
				</h6>
					<button
						on:click={addProduct}
						class="bg-red-400 text-white active:bg-red-500 font-bold uppercase text-ms px-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
						style="height: 25px; padding-bottom: 30px;; padding-top: 5px; margin-top: 5px"
						type="button"
					>
						+
					</button>
				{/if}
			</div>
			{#if recetaMedica}
			{#each recetaMedica.productos as producto}
				<div class="flex flex-wrap">
					<div class="w-full lg:w-6/12 mr-2">
						<div class="mb-3">
							<label
								class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
								for="grid-city"
							>
								Nombre de medicamento
							</label>
							<input
								id="grid-city"
								type="email"
								class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								value={producto.nombre}
								disabled
							/>
						</div>
					</div>
					<div class="w-full lg:w-4/12 ml-2">
						<div class="relative mb-3">
							<label
								class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
								for="grid-city"
							>
								Indicaciones
							</label>
							<input
								id="grid-city"
								type="email"
								class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								value={producto.indicacion}
								disabled
							/>
						</div>
					</div>
				</div>
			{/each}
			{:else}
			{#each medicamentos as medicamento}
				<div class="flex flex-wrap">
					<div class="w-full lg:w-6/12 mr-2">
						<div class="mb-3">
							<label
								class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
								for="grid-city"
							>
								Nombre de medicamento
							</label>
							<input
								id="grid-city"
								type="email"
								class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								value={medicamento.productoNombre}
								on:input={(e) => (medicamento.productoNombre = e.target.value)}
							/>
						</div>
					</div>
					<div class="w-full lg:w-4/12 ml-2">
						<div class="relative mb-3">
							<label
								class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
								for="grid-city"
							>
								Indicaciones
							</label>
							<input
								id="grid-city"
								type="email"
								class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								value={medicamento.indicacion}
								on:input={(e) => (medicamento.indicacion = e.target.value)}
							/>
						</div>
					</div>
				</div>
			{/each}
			{/if}
			

			<hr class="mt-6 border-b-1 border-blueGray-300" />
		</form>
	</div>
</div>

<style>
	form {
		padding: 20px;
		border-radius: 4px;
	}

	label {
		margin: 0 0 10px;
	}
</style>
