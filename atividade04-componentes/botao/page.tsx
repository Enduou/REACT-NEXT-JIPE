const Botao = ({ texto, onClick }) => {
    return (
        <button
            style={{
                padding: '10px',
                fontSize: '16px',
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            {texto}
        </button>
    );
}
  
  export default Botao;