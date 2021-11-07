<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/api/doctores');
		const data = await res.json();

		return { props: { doctores: data.result } };
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import axios from '$lib/httpService';
	import { page } from '$app/stores';
	import { signUp as register } from '$lib/auth';
	import { actions } from '$lib/common/constants/actions.contants';
	import type { IDataSource, IGridProps } from '$lib/common/interfaces/grid.interface';
	import { columnsPrecipcionList } from '$lib/common/mock/doctors';
	import CardTable from '$lib/components/cards/card-table.svelte';
	import type { IDoctor } from '$lib/common/interfaces/doctor.interface';
	import doctorStore from '$lib/stores/doctors';
	import { v4 as uuid } from 'uuid';
	import { apiUrls } from '../../lib/common/constants/apiUrls';

	let pathname = $page.path;

	export let doctores: IDataSource<IDoctor>;

	const gridConfig: IGridProps<any> = {
		columns: columnsPrecipcionList,
		actions: [
			// { icon: "fas fa-trash-alt", type: actions.DELETE, method: remove },
			// { icon: "fas fa-eye", type: actions.EDIT, method: edit },
			{ icon: 'fas fa-eye', type: actions.REGISTER, method: signUp }
		],
		// create: createPrescription,
		dataSource: doctores,
		rows: 5
	};

	onMount(() => {
		doctorStore.setDoctors(doctores);
	});

	async function signUp(entity: IDoctor) {
		debugger
		const password = (uuid() as string).split('-')[0];

		try {
			const res: any = await axios.put(`${apiUrls.DOCTORS_URL}/actualizar-registro/${entity.id}`);
			console.log(res);
		} catch (err) {
			console.log('Error', err);
		}

		console.log(password);
		register(entity.nombres.split(' ')[0], password, entity.nombres, entity.id.toString(), entity.cmp);
	}
</script>

<div class="flex flex-wrap mt-4">
	<div class="w-full mb-12 px-4">
		<CardTable {pathname} {gridConfig} />
	</div>
</div>
