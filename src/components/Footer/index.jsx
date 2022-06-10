import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Jari Tarabelli
			<small className={Styles.byline}>🚀 Built with <a target="_blank" href="https://astro.build/" className={Styles.removeDecorations}>Astro</a></small>
		</footer>
	);
}
export default Footer;
