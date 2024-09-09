<script>
	import Instagram from '../icons/instagram.svelte';
	import Linkedin from '../icons/linkedin.svelte';
</script>

<svelte:head>
	<title>dpaulos6' Links</title>
	<meta name="description" content="All my public social medias" />
</svelte:head>

<main class="flex-1 flex justify-center items-center backdrop-blur">
	<div class="flex flex-col gap-8 min-w-[420px] min-h-[650px] bg-white rounded-xl p-4 sm:p-6">
		<div class="flex gap-4 justify-center items-center">
			<img src="https://github.com/dpaulos6.png" alt="dpaulos6" class="w-16 h-16 rounded-full" />
			<div class="flex flex-col justify-center">
				<h1 class="text-2xl font-medium">dpaulos<span class="text-primary">6</span></h1>
				<span class="text-base text-gray-500">Full-stack Developer</span>
				<a href="mailto:dpaulos6@outlook.com" class="text-sm text-primary">dpaulos6@outlook.com</a>
			</div>
		</div>

		<div class="flex flex-col gap-4 px-12">
			<a
				href="https://instagram.com/dpaulos6"
				class="flex items-center px-4 gap-4 w-full h-16 hover:bg-black/5 hover:-translate-y-1 hover:shadow transition rounded-lg"
			>
				<Instagram class="w-8 h-8" />
				<span>Instagram</span>
			</a>
			<a
				href="https://instagram.com/dpaulos6"
				class="flex items-center px-4 gap-4 w-full h-16 hover:bg-black/5 hover:-translate-y-1 hover:shadow transition rounded-lg"
			>
				<Linkedin class="w-8 h-8" />
				<span>LinkedIn</span>
			</a>
		</div>
	</div>
</main>
