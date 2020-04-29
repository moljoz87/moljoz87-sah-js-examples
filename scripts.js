let name = "Joseph"

console.log(name + "'s apples")
console.log("Szia Lili! Lássuk az igazságot!")

$("h1").text("A nagy szerelem teszt")


$('#add-button').click(() => {
    $('ul').append("<li>Én is szeretlek!! :)</li>")
})

$('#remove-button').click(() => {
    $('ul').append("<li>Kapd be, akkor én sem téged! :(</li>")
})

