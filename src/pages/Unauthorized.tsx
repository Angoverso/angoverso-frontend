const Unauthorized: React.FC = () => {
    return <div className="w-screen h-screen flex justify-center items-center flex-col gap-2">

        <h1 className="text-4xl">Desculpe, ocorreu um  erro!</h1>
        Volte para a página inicial.
        <a href="/" className="text-blue-400 font-bold">Clique aqui</a>
    </div>
}

export default Unauthorized