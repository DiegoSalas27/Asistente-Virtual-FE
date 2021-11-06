<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { Usuario } from '$common/interfaces/usuario.interface';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import AdminNavbar from '$lib/components/navbars/admin-navbar.svelte';
	import HeaderStats from '$lib/components/headers/header-stats.svelte';
	import FooterAdmin from '$lib/components/footers/footer-admin.svelte';
	import userStore from '$lib/user';
	import type { User } from '$lib/types';

	let loading = true;

	onMount(async () => {
		// Fetch the user from strapi
		const res = await fetch('http://localhost:1337/auth/me', {
			headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
		});
		const user: User = await res.json();
		loading = false;
		if (res.ok) {
			$userStore = user;
		}
	});

	let usuario: Usuario = {
		nombres: 'jaime',
		apellidos: 'chincha',
		cmp: '12345',
		rol: 'admin'
	};
	let location = '';
	page.subscribe((res) => {
		location = res.path;
	});
</script>

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
