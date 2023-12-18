

function randomText(){
    var quote = [
        `" So many books, so little time. "`,
        `" A room without books is like a body without a soul. "`,
        `" Be the change that you wish to see in the world. "`,
        `" In three words I can sum up everything I've learned about life: it goes on. "`,
        `" If you tell the truth, you don't have to remember anything. "`,
        `" A friend is someone who knows all about you and still loves you. "`,
        `" Always forgive your enemies; nothing annoys them so much. "`,
        `" Without music, life would be a mistake. "`];
    var author = [
        `--Frank Zappa`,
        `--Marcus Tullius Cicero`,
        `--Mahatma Gandhi`,
        `--Robert Frost`,
        `--Mark Twain`,
        `--Elbert Hubbard`,
        `--Oscar Wilde`,
        `--Friedrich Nietzscheten`];
    var result = Math.round(Math.random() * author.length ) ;
    document.getElementById('authortext').innerHTML= quote[result] ;
    document.getElementById('authorname').innerHTML= author[result];
}


