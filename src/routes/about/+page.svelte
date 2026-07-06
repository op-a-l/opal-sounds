<main>
	<div>
		<h1>About</h1>
	</div>
	<div class="image">
		<img
			src="/picture.jpg"
			alt="A picture of Mathis in front of some trees on a small bridge in Rennes."
		/>
	</div>
	<div class="text">
		<p>Hi again,</p>
		<p>
			My name is Mathis. I am from Rennes, France and I am 23 yo. I do sound design and music
			professionally. That means I try to make enough money to make a living out of sounds and songs
			I make.
		</p>
		<p>
			I starded making music on my computer when I was 17 and quickly got obsessed with sound design
			and synthesis to the point I couldn't do anything but tweaking knobs and make strange noises.
			Along my way I met nice musicians and sound designers at college, discovered Mr. Bill, KOAN
			SOUND and discord communities. I felt like home on discord.
		</p>
		<p>
			I studied <b>Musicology</b> and <b>Digital arts</b> at university and <b>music writing</b> at the
			conservatory. I fell in love with Steve Reich's approach to music and the Soundscape concept as
			R. Murray Schafer describes it. I think these two influence the way I think about music and sound.
		</p>
		<p>
			I believe music should be free for anyone and I want to contribute to that. I don't want to
			make anything but music, bleeps and wubs.
		</p>
		<p>
			Please <a href="/CV-SD.pdf" target="_blank" download>check my CV</a>.
			<br />
			<br />
			See you later,
			<br />
			_opal
		</p>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
		padding-top: var(--size-10);
		text-align: justify;
		margin: auto;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: var(--size-3);
		align-items: left;
		text-align: inherit;
		line-height: var(--font-lineheight-4);
		background-color: rgba(var(--surface-1), 0.3);
		backdrop-filter: blur(var(--size-1));
	}

	.image {
		display: flex;
		flex-direction: row;
		justify-content: end;
		/* margin: var(--size-5); */
		margin-right: 0;
		padding: 0;
	}

	img {
		border-radius: var(--radius-6);
		object-fit: contain;
		width: var(--size-12);
		margin: auto;
		z-index: -1;
		box-shadow: var(--shadow-6);
	}
</style>
