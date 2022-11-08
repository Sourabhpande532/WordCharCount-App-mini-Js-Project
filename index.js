const textValue = document.getElementById("textarea");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const clear = document.getElementById("clear");

textValue.addEventListener("input",function(){
    // textValue.classList.toggle("p");
    let userText = this.value;
    // console.log(userText)
    charCount.textContent = ` and ${userText.length} character`;
    
    let word = userText.split(" ");
    // console.log(word)
    let newWord = word.filter((Ele)=>Ele !== "");
    // console.log(newWord);
    wordCount.textContent = `You have written ${newWord.length} Word`;

})

clear.addEventListener("click",()=>{

    charCount.textContent = "";
    wordCount.textContent= "";
    textValue.value = "";
    location.reload();
})