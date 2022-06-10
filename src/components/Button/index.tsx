import Styles from "./styles.module.scss";
export function Button({
  children
}) {
  return <span className={Styles.button}>{children}</span>;
}
export function ButtonBack() {
  return <a href="/">
            <Button>
                👈 Go Back
            </Button>
        </a>;
}