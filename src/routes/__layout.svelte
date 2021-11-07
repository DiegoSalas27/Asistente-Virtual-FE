<script lang="ts">
	import { onMount } from 'svelte';
	import userStore from '$lib/stores/user';
	import type { User } from '$lib/types';

	import { isAuthenticated } from '$lib/auth';

	let loading = true;

	onMount(async () => {
		console.log('RUNNING GLOBAL');
		const attributes = await isAuthenticated();

		if (attributes) {
			const user: Partial<User> = {};
			attributes.forEach((attr, i) => {
				if (i >= 1) {
					const key = attributes[i].Name;
					const value = attributes[i].Value;
					user[key] = value;
				}
			});
			$userStore = user;
		} 
		loading = false;
	});
</script>

<div>
	{#if !loading}
		<slot />
	{:else}
		<h1>Cargando...</h1>
	{/if}
</div>
