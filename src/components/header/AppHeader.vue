<template>
	<header class="header container">
		<v-row class="d-flex justify-space-between">
			<v-col md="6" class="d-flex justify-center align-center">
				<div>
					<h1 data-aos="zoom-in" data-aos-duration="1000" class="header__title">Olá ,Sou<br />João Paulo</h1>
					<h4 class="mb-3" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">Desenvolvedor Front-end</h4>
					<div data-aos="zoom-in" data-aos-duration="1000" class="header__socials" title="Redes Sociais">
						<a
							target="_blank"
							href="https://linkedin.com/in/joão-paulo-8b38b8254"
							aria-label="Linkedin"
							title="Ícone Linkedin"
						>
							<linkedin-icon />
						</a>
						<a target="_blank" href="mailto:joaopauloneto3687@gmail.com" aria-label="Email" title="Ícone Email">
							<email-icon />
						</a>
						<a
							target="_blank"
							href="https://www.instagram.com/joao_paulo.png/"
							aria-label="Instagram"
							title="Ícone Instagram"
						>
							<instagram-icon />
						</a>
						<img class="header__socials-gif" src="/static/icons/mario.gif" alt="Icon" />
					</div>

					<v-btn class="mt-7" dark rounded color="#36B7FF" href="/static/arquivos/resume.pdf" target="_blank"
						>Ver Resume</v-btn
					>
				</div>
			</v-col>
			<v-col cols="12" md="6" class="d-flex justify-center align-center">
				<img
					data-aos="zoom-in"
					data-aos-delay="500"
					data-aos-duration="1000"
					class="header__avatar"
					src="/static/foto.PNG"
				/>
			</v-col>
		</v-row>
		<div class="header__decorator"></div>
	</header>
</template>

<script>
import EmailIcon from "../icons/EmailIcon.vue";
import InstagramIcon from "../icons/InstagramIcon.vue";
import LinkedinIcon from "../icons/LinkedinIcon.vue";
export default {
	name: "AppHeader",
	components: { EmailIcon, InstagramIcon, LinkedinIcon },
};
</script>

<style lang="scss" scoped>
.header {
	margin-top: 50px;
	&__socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			display: flex;
			align-items: center;
		}
	}
	&__socials-gif {
		max-width: 40px;
		object-position: center;
		margin-top: -15px;
	}
	&__title {
		position: relative;
		z-index: 1;

		&::after {
			content: "";
			position: absolute;
			top: 20px;
			left: -10px;
			background: url("/public/static/header-detail.svg");
			width: 120px;
			height: 120px;
			background-repeat: no-repeat;
			z-index: -1;
		}
	}

	&__avatar {
		object-position: center;
		border-radius: 50%;
		width: 280px;
		height: 280px;
		min-width: 280px;
		min-height: 280px;
	}
	&__decorator {
		margin-top: 20px;
		width: 100%;
		height: 4px;
		background-color: $blue-5;
	}

	@media (max-width: 500px) {
		&__title {
			font-size: 3rem;
		}

		&__avatar {
			width: 300px;
			height: 300px;
		}
		&__decorator {
			margin-top: 10px;
			width: 100%;
			height: 2px;
			background-color: $blue-5;
		}

		& {
			margin-top: 10px;
		}
	}
}
</style>
