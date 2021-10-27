let words1 = {
    'apple': 'яблоко',
    'pear': 'груша',
    'orange': 'апельсин'
};
let words2 = {
    'school': 'школа',
    'teacher': 'учитель',
    'book': 'книга'
};
let words3 = {
    'window': 'окно',
    'door': 'дверь',
    'wall': 'стена'
};
let word;
function start() {
    let themes1 = [arg1, arg2, arg3];
    let rand = Math.floor(Math.random() * themes1.length);
    let n = prompt("Введите количетсво повторов");
    let lang = prompt("Если вы хотите с рус. на англ. , то введите ruEn. Если хотите с англ. на рус. , то введите enRu.")
    let ball = 0; // счетчик правильных ответов
    let errors = 0; // счетчик ошибок
    let translate; // переменная для хранения того, что ввел пользователь
    label: // метка блока (цикла while)
    if (lang == "enRu") {
        for (let i = 0; i < n;) {
            n--; // бесконечный цикл while
            for (word in themes1[rand]) { // проходим в цикле ассоциативный массив words, каждое английское слово попадает в переменную word
                alert("Слово: " + word);
                translate = prompt("Введите перевод, для завершения -'!'"); // пользователь вводит перевод
                if (translate == "!") break label; // если пользователь ввел восклицательный знак, выходим из всех циклов
                if (translate == themes1[rand][word]) { // если перевод был введен правильно, выводим сообщение и увеличиваем на 1 счетчик правильных ответов
                    alert("Правильно!");
                    ball++;
                } else { // если перевод был введен неправильно, выводим сообщение и увеличиваем на 1 счетчик неправильных ответов
                    alert("Неправильно!");
                    errors++;
                }
            }
        }
    }
    else if (lang == "ruEn") {
        for (let i = 0; i < n;) {
            n--; // бесконечный цикл while
            for (word in themes1[rand]) { // проходим в цикле ассоциативный массив words, каждое английское слово попадает в переменную word
                alert("Слово: " + themes1[rand][word]);
                translate = prompt("Введите перевод, для завершения -'!'"); // пользователь вводит перевод
                if (translate == "!") break label; // если пользователь ввел восклицательный знак, выходим из всех циклов
                if (translate == word) { // если перевод был введен правильно, выводим сообщение и увеличиваем на 1 счетчик правильных ответов
                    alert("Правильно!");
                    ball++;
                } else { // если перевод был введен неправильно, выводим сообщение и увеличиваем на 1 счетчик неправильных ответов
                    alert("Неправильно!");
                    errors++;
                }
            }
        }
    }
    alert("Правильно: " + ball + ", неправильно: " + errors); // выводим сообщение и значения счетчиков правильных и неправильных ответов
    for (word in themes1[rand]) {
        document.write(themes1[rand][word] + ': ' + word + '<br>'); // выводим в цикле все слова словаря
    }
}

function dictionary() {
    let lang = prompt("Если вы хотите с рус. на англ. , то введите ruEn. Если хотите с англ. на рус. , то введите enRu.");
    if (lang == "ruEn") {
        for (word in words1) {
            document.write(words1[word] + ': ' + word + '<br>');
        }
        for (word in words2) {
            document.write(words2[word] + ': ' + word + '<br>');
        }
        for (word in words3) {
            document.write(words3[word] + ': ' + word + '<br>');
        }
    }
    if (lang == "enRu") {
        for (word in words1) {
            document.write(word + ': ' + words1[word] + '<br>');
        }
        for (word in words2) {
            document.write(word + ': ' + words2[word] + '<br>');
        }
        for (word in words3) {
            document.write(word + ': ' + words3[word] + '<br>');
        }
    }
}