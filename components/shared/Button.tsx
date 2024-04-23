
type ButtonProps = {
    children: any,
    disabled?: boolean,
    onClick?: () => void
}

const Button = ({ children, disabled, onClick }: ButtonProps) => {

    const sharedStyles = "w-full bg-black p-3 rounded-md text-2xl text-white flex-center font-mono cursor-pointer disabled:bg-black/60 disabled:cursor-not-allowed"

    const renderButton = () => (
        <button onClick={onClick} disabled={disabled} className={sharedStyles}>
            {children}
        </button>
    )

    return renderButton()
}

export default Button
