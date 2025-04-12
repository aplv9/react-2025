function Button({ texto, color, mensaje }) {
    const style = { 
        backgroundColor: color
    };
    return (
        <button style={style} onClick={() => alert(mensaje)}>{texto}</button>

    )
}

export default Button;
