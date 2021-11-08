<script lang="ts">
	import axios from '$lib/httpService';
	import { page } from '$app/stores';
	// core components
	import CardTable from '$lib/components/cards/card-table.svelte';
	import { actions } from '$lib/common/constants/actions.contants';
	import type { IDataSource, IGridProps } from '$lib/common/interfaces/grid.interface';
	import { columnsPrecipcionList } from '$lib/common/mock/prescriptions';
	import type { IReceraMedica } from '$lib/common/interfaces/recetas-medicas.interface';
	import { onMount } from 'svelte';
	import recetaMedicaStore from '$lib/stores/medicalAppointments';
	import { apiUrls } from '$lib/common/constants/apiUrls';
	import userStore from '$lib/stores/user';
	import { goto } from '$app/navigation';

	let pathname = $page.path;

	const gridConfig: IGridProps<any> = {
		columns: columnsPrecipcionList,
		actions: [
			// { icon: "fas fa-trash-alt", type: actions.DELETE, method: remove },
			// { icon: "fas fa-eye", type: actions.EDIT, method: edit },
			{ icon: 'fas fa-eye', type: actions.VIEW, method: view }
		],
		create: createPrescription,
		dataSource: null,
		rows: 5
	};

	let loading = true;

	onMount(async () => {
		let afterUrl =
			$userStore.name === 'admin'
				? '/front/list?page=1&pageSize=5'
				: `/front/list?page=1&pageSize=5&doctorId=${$userStore.name}`;
		const res: any = await axios.get(`${apiUrls.RECETAS_MEDICAS_URL}${afterUrl}`);

		const recetasMedicas = (await res.data.result) as IDataSource<IReceraMedica>;

		recetaMedicaStore.setRecetasMedicas(recetasMedicas);

		gridConfig.dataSource = recetasMedicas;

		loading = false;
	});

	function view(entity: any) {
		goto(`/admin/recetas-medicas/${entity.id}`)
	}

	function createPrescription() {
		goto(`/admin/recetas-medicas/new`)
	}
</script>

<div class="flex flex-wrap mt-4">
	<div class="w-full mb-12 px-4">
		{#if loading === true}
			<h1>Cargando...</h1>
		{:else}
			<CardTable {pathname} {gridConfig} />
		{/if}
	</div>
</div>
