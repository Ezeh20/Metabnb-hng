
const ButtonOption = {
    default: "default",
    inverse: "inverse",
    styleDefault: "styleDefault",
    styleOther: "styleOther"
}

const Button = ({ children, buttonType, styleType }) => {
    return <button className={`${ButtonOption[buttonType]} ${ButtonOption[styleType]}`}>{children}</button>
}

export default Button