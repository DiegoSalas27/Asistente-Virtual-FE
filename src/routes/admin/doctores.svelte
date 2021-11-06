<script lang="ts">
  import { page } from '$app/stores';
	// core components
	import CardTable from '$lib/components/cards/card-table.svelte';
	import { actions } from '$lib/common/constants/actions.contants';
	import type { IGridProps } from '$lib/common/interfaces/grid.interface';
	import { columnsPrecipcionList, dataSource } from '$lib/common/mock/doctors';

	let pathname = '';
  page.subscribe(res => { pathname = res.path });

	const gridConfig: IGridProps<any> = {
		columns: columnsPrecipcionList,
		actions: [
			// { icon: "fas fa-trash-alt", type: actions.DELETE, method: remove },
			// { icon: "fas fa-eye", type: actions.EDIT, method: edit },
			{ icon: 'fas fa-eye', type: actions.REGISTER, method: register }
		],
		// create: createPrescription,
		dataSource: dataSource,
		rows: 5
	};

	function register() {
		console.log('register');
	}
	console.log('pathsito 1', pathname);
</script>

<div class="flex flex-wrap mt-4">
	<div class="w-full mb-12 px-4">
		<CardTable {pathname} {gridConfig} />
	</div>
</div>
