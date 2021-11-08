<script lang="ts">
	// core components
	import CardStats from '../cards/card-stats.svelte';
	import doctorStore from '$lib/stores/doctors';
	import recetaMedicaStore from '$lib/stores/medicalAppointments';
	import { onDestroy, onMount } from 'svelte';

	let totalPrescriptions = '';
	let totalPatients = '';

	let totalDoctors = null;
	let totalRegistered = null;
	let unsubscribe = [];

	onMount(() => {
		unsubscribe.push(doctorStore.subscribe((items) => {
			if (items) {
				totalDoctors = items.totalDb;
				totalRegistered = items.totalDb - items.totalRecords;
			}
		}));

    unsubscribe.push(recetaMedicaStore.subscribe((items) => {
			if (items) {
        let pacientesNames = items.listaRecords.map(lr => lr.paciente);
        pacientesNames = [...new Set(pacientesNames)];
				totalPrescriptions = items.totalRecords.toString();
				totalPatients = pacientesNames.length.toString();
			}
		}))
	});

	onDestroy(() => {
		unsubscribe.length > 0 && unsubscribe.forEach(usb => usb());
	});

	export let pathname: string;
  console.log("PATHI", pathname)
</script>

<!-- Header -->
<div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
	<div class="px-4 md:px-10 mx-auto w-full">
		<div>
			<!-- Card stats -->
			<div class="flex flex-wrap">
				{#if pathname.includes('/admin/recetas-medicas')}
					<div class="w-full lg:w-6/12 xl:w-6/12 px-4">
						<CardStats
							statSubtitle="Total recetas"
							statTitle={totalPrescriptions}
							statIconName="fas fa-notes-medical"
							statIconColor="bg-red-500"
						/>
					</div>
					<div class="w-full lg:w-6/12 xl:w-6/12 px-4">
						<CardStats
							statSubtitle="Pacientes atendidos"
							statTitle={totalPatients}
							statIconName="fas fa-user-injured"
							statIconColor="bg-orange-500"
						/>
					</div>
				{:else if pathname.includes('/admin/doctores')}
					<div class="w-full lg:w-6/12 xl:w-6/12 px-4">
						<CardStats
							statSubtitle="Total Doctores"
							statTitle={totalDoctors}
							statIconName="fas fa-notes-medical"
							statIconColor="bg-red-500"
						/>
					</div>
					<div class="w-full lg:w-6/12 xl:w-6/12 px-4">
						<CardStats
							statSubtitle="Doctores registrados"
							statTitle={totalRegistered}
							statIconName="fas fa-user-injured"
							statIconColor="bg-orange-500"
						/>
					</div>
				{:else}
					<div class="w-full lg:w-6/12 xl:w-6/12 px-4">
						<CardStats
							statSubtitle="SALES"
							statTitle="924"
							statArrow="down"
							statPercent="1.10"
							statPercentColor="text-orange-500"
							statDescripiron="Since yesterday"
							statIconName="fas fa-users"
							statIconColor="bg-pink-500"
						/>
					</div>
					<div class="w-full lg:w-6/12 xl:w-6/12 px-4">
						<CardStats
							statSubtitle="PERFORMANCE"
							statTitle="49,65%"
							statArrow="up"
							statPercent="12"
							statPercentColor="text-emerald-500"
							statDescripiron="Since last month"
							statIconName="fas fa-percent"
							statIconColor="bg-emerald-500"
						/>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
