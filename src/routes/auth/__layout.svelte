<script lang="ts">
	import { goto } from '$app/navigation';
	import FooterSmall from '$lib/components/footers/footer-small.svelte';
	import AuthNavbar from '$lib/components/navbars/auth-navbar.svelte';
	import userStore from '$lib/stores/user';

	const essalud_bg = '../assets/img/essalud.jpg';

	console.log('RUNNING ON AUTH');

	if ($userStore) goto('/admin/dashboard', { replaceState: true });
</script>

<svelte:head>
	<title>Asistente Virtual - Autenticación</title>
</svelte:head>

<div>
	<AuthNavbar />
	<main>
		<section class="relative w-full h-full py-40 min-h-screen">
			<div
				class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full bg-overlay"
				style="background-image: url({essalud_bg});"
			/>
			<slot />
			<FooterSmall />
		</section>
	</main>
</div>
