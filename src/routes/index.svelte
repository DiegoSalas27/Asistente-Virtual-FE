<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import userStore from '$lib/stores/user';

  console.log("RENDERING INDEX");

	if ($userStore) {
		if ($page.path !== '/admin/dashboard') {
			goto('/admin/dashboard');
		} else {
			goto('/auth/login');
		}
	} else {
		goto('/auth/login');
	}
</script>

<h1>...Cargando index</h1>
