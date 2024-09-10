<script>
	import { onMount } from 'svelte';
	import Github from '../icons/github.svelte';
	import Instagram from '../icons/instagram.svelte';
	import Linkedin from '../icons/linkedin.svelte';
	import Threads from '../icons/threads.svelte';
	import Tiktok from '../icons/tiktok.svelte';
	import Twitch from '../icons/twitch.svelte';
	import X from '../icons/x.svelte';
	import Link from './Link.svelte';

	const links = [
		{ label: 'Instagram', href: 'https://instagram.com/dpaulos6', icon: Instagram },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/dpaulos6', icon: Linkedin },
		{ label: 'GitHub', href: 'https://github.com/dpaulos6', icon: Github },
		{ label: 'X', href: 'https://x.com/dpaulos6', icon: X },
		{ label: 'Threads', href: 'https://threads.net/@dpaulos6', icon: Threads },
		{ label: 'Twitch', href: 'https://twitch.tv/dpaulos6', icon: Twitch },
		{ label: 'Tiktok', href: 'https://tiktok.com/@dpaulos6', icon: Tiktok }
	];

	let mounted = false;

	onMount(() => {
		if (mounted) return;
		mounted = true;
	});
</script>

<svelte:head>
	<title>dpaulos6 links</title>
	<meta name="description" content="All my public social medias" />
</svelte:head>

{#if mounted}
	<main
		class="flex flex-1 items-center justify-center overflow-x-hidden bg-black/50 px-6 py-16 backdrop-blur-md"
	>
		<div class="flex h-fit w-fit flex-col gap-8 rounded-xl bg-black/10 p-6 transition">
			<div class="flex items-center justify-center gap-4">
				<img src="https://github.com/dpaulos6.png" alt="dpaulos6" class="h-20 w-20 rounded-full" />
				<div class="flex flex-col justify-center">
					<span class="text-2xl font-medium">
						dpaulos<span class="text-primary">6</span>
					</span>
					<span class="text-base font-medium text-white/60">Full-stack Developer</span>
					<a href="mailto:dpaulos6@outlook.com" class="text-sm text-primary">dpaulos6@outlook.com</a
					>
				</div>
			</div>

			<div class="flex flex-col gap-4">
				{#each links as link}
					<Link {link} />
				{/each}
			</div>
		</div>
	</main>
{/if}
