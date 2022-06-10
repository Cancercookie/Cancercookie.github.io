import Styles from "./styles.module.scss";

export const Button = ({children}) => (
    <span className={Styles.button}>{children}</span>
);

export const ButtonBack = () => (
    <a href="/">
        <Button>
            👈 Go Back
        </Button>
    </a>
);
