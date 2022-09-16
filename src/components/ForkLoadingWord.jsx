function ForkLoadingWord(){

    const words = ["programador", "astronauta", "médico"]
    const loadWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

    return(
        
        <div className="container">
            <p>A palavra {loadWord} possui {loadWord.length} letras</p>
        </div>
    );
};

export default ForkLoadingWord;