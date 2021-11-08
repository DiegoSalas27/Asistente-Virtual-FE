<script lang="ts">
	import axios from '$lib/httpService';
	import { page } from '$app/stores';
	import type { IRecetaMedicaDetail } from '$lib/common/interfaces/recetas-medicas.interface';
	import { onMount } from 'svelte';
	import { apiUrls } from '$lib/common/constants/apiUrls';
	import MedicamentoPanel from '$lib/components/cards/medicamento-panel.svelte';

	let recetaMedica: IRecetaMedicaDetail;
	let loading = true;

	onMount(async () => {
		if ($page.params.slug !== 'new') {
			const res: any = await axios.get(
				`${apiUrls.RECETAS_MEDICAS_URL}/detalle/${$page.params.slug}`
			);

			recetaMedica = (await res.data.result) as IRecetaMedicaDetail;

			loading = false;
		}
	});
</script>

<div class="flex flex-wrap mt-4">
	<div class="w-full mb-12 px-4">
		<MedicamentoPanel {recetaMedica}/>
	</div>
</div>
