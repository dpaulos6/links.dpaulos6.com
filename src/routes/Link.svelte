<script>
	export let link;
</script>

<a
	href={link.href}
	target="_blank"
	class="flex h-16 w-full items-center gap-4 rounded-lg bg-black/25 px-4 transition hover:-translate-y-1 hover:bg-black/30"
>
	<svelte:component this={link.icon} class="h-8 w-8" />
	<span>{link.label}</span>
</a>
