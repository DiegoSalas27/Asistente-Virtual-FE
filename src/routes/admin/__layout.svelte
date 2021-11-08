<script lang="ts">
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import type { Usuario } from '$common/interfaces/usuario.interface';
	import FooterAdmin from '$lib/components/footers/footer-admin.svelte';
	import HeaderStats from '$lib/components/headers/header-stats.svelte';
	import AdminNavbar from '$lib/components/navbars/admin-navbar.svelte';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import userStore from '$lib/stores/user';
	import { onDestroy } from 'svelte';

	let usuario: Partial<Usuario> = {};

	if ($userStore == null) {
		goto(`/auth/login`);
	} else {
		if ($userStore['custom:codigo_essalud'] === 'admin') {
			usuario.nombres = $userStore.family_name;
			usuario.apellidos = '';
			usuario.cmp = null;
			usuario.rol = 'admin';
		} else {
			usuario.nombres = $userStore.family_name;
			usuario.apellidos = $userStore.family_name;
			usuario.cmp = $userStore['custom:codigo_essalud'];
			usuario.rol = 'doctor';
		}
	}

	let location;
	let unsubscribe = page.subscribe((val) => {
		location = val.path;
	});

	onDestroy(() => {
		unsubscribe && unsubscribe();
	});
</script>

<svelte:head>
	<title>Asistente Virtual - Dashboard</title>
</svelte:head>

<div>
	<Sidebar {usuario} />
	<div class="relative md:ml-64 bg-blueGray-100">
		<AdminNavbar {usuario} />
		<HeaderStats pathname={location} />
		<div class="px-4 md:px-10 mx-auto w-full -m-24">
			<slot />
			<FooterAdmin />
		</div>
	</div>
</div>
