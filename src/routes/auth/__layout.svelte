<script>
	// components for this layout
  import AuthNavbar from "$lib/components/navbars/auth-navbar.svelte";
  import FooterSmall from "$lib/components/footers/footer-small.svelte";

	const essalud_bg = "../assets/img/essalud.jpg";

	// // getting the user from the session store
	// $: user = $session.user;
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
      ></div>
      <slot></slot>
      <FooterSmall />
    </section>
  </main>
</div>
