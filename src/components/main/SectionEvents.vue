<template>
	<section class="section-events container">
		<h3 class="text-center mb-15">Eventos e Apresentações</h3>

		<div class="section-events__container-events">
			<div class="d-flex">
				<img
					@click="
						selectedImage = event.url;
						isModalShowImageOpen = true;
					"
					v-for="(event, index) in eventsItems"
					:key="'event-' + index"
					class="section-events__image"
					:alt="event.description"
					:src="event.url"
				/>
			</div>
		</div>
		<ModalShowImage :opened="isModalShowImageOpen" @close-modal="isModalShowImageOpen = false" :url="selectedImage" />
	</section>
</template>

<script>
import ModalShowImage from "./ModalShowImage.vue";

export default {
	name: "SectionEvents",
	components: { ModalShowImage },
	data() {
		return {
			isModalShowImageOpen: false,
			selectedImage: null,
			eventsItems: [
				{
					description: "Evento 2",
					url: "/static/eventos/2.jpeg",
				},
				{
					description: "Evento 3",
					url: "/static/eventos/3.jpeg",
				},

				{
					description: "Evento 5",
					url: "/static/eventos/5.jpeg",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.section-events {
	&__container-events {
		width: auto;
		display: flex;
		justify-content: center;

		margin: 0 auto;

		overflow-x: auto;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		&::-webkit-scrollbar {
			display: none;
		}

		@media screen and(max-width:1200px) {
			& {
				justify-content: unset;
			}
		}
		@media screen and (min-width: 2836px) {
			justify-content: center;
		}

		// &:active {
		// 	cursor: grabbing;
		// }
	}
	&__image {
		min-width: 400px;
		max-width: 400px;
		height: 250px;
		object-fit: cover;
		border-radius: $border-radius;
		margin-right: 20px;
		user-select: none;

		cursor: pointer;

		@media screen and(max-width:600px) {
			&:nth-of-type(1) {
				margin-left: 20px;
			}
			&:nth-last-of-type(1) {
				margin-right: 20px;
			}
		}
	}
}
</style>
