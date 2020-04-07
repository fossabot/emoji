var titles = ["😀", "🦊", "🅰️", "🍎", "🏳️‍🌈", "🏊", "🖱️", "👗", "🖐️", "🛎️"];
var emojis = [];
/*smileys*/
emojis[0] = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚", "😙", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "😤", "😡", "😠", "🤬", "😈", "👿", "🤡", "👽", "👾", "🤖", "👹", "👻", "👶", "🧒", "👧", "🧑", "👱", "👨", "🧔", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👩‍🦲", "👱‍♀️", "👱‍♂️", "🧓", "👴", "👵", "👼", "🎅", "🤶", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "👰", "🤰", "🤱"];
/*animals*/
emojis[1] = ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "🐵", "🐒", "🦍", "🐶", "🐕", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🦔", "🦇", "🐻", "🐨", "🐼", "🦘", "🦡", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊️", "🦅", "🦆", "🦢", "🦉", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🐟", "🐠", "🐡", "🦈", "🐙", "🐚", "🐌", "🦋", "🐛", "🐜", "🐝", "🐞", "🦗", "🕷️", "🦂", "🦟", "🦀", "🦞", "🦐", "🦑"];
/*symbols*/
emojis[2] = ["💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💯", "💬", "💤", "♠️", "♥️", "♦️", "♣️", "🏧", "🎵", "🎶", "🔔", "🔕", "🔈", "🔉", "🔊", "🔇", "⛔", "🚫", "🚳", "🚭", "🚯", "🚱", "🚷", "🔞", "☢️", "☣️", "⬆️", "↗️", "➡️", "↘️", "⬇️", "↙️", "⬅️", "↖️", "↕️", "↔️", "↩️", "↪️", "⤴️", "⤵️", "🔃", "🔄", "🔙", "🔚", "🔛", "🔜", "🔝", "🛐", "⚛️", "🕉️", "✡️", "☸️", "☯️", "✝️", "☦️", "☪️", "☮️", "🕎", "🔯", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "⛎", "🔀", "🔁", "🔂", "▶️", "◀️", "🔼", "🔽", "⏩", "⏪", "⏫", "⏬", "⏹️", "⏏️", "🎦", "📶", "✖️", "➕", "➖", "➗", "♾️", "‼️", "⁉️", "❓", "❔", "❕", "❗", "⭕", "☑️", "✔️", "❌", "✅", "❎", "#️⃣", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "🔠", "🔡", "🔢", "🔤", "🅰️", "🆎", "🅱️", "🆑", "🆒", "🆓", "ℹ️", "🆔", "🆕", "🅾️", "🆗", "🅿️", "🆘", "🆙", "🆚", "🔴", "🔵", "⚫", "⚪", "⬛", "⬜", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔳", "🔲", "©️", "®️", "™️"];
/*food and drinks*/
emojis[3] = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶️", "🥒", "🥬", "🥦", "🍄", "🥜", "🌰", "🍞", "🥐", "🥖", "🥨", "🥯", "🥞", "🧀", "🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙", "🍳", "🥘", "🍲", "🥣", "🥗", "🍿", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🥠", "🥡", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼", "🥛", "☕", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🥢", "🍽️", "🍴", "🥄"];
/*flags*/
emojis[4] = ["🏁", "🚩", "🎌", "🏴", "🏳️", "🏳️‍🌈", "🏳️‍⚧️", "🏴‍☠️", "🇺🇳", "🇪🇺", "🇧🇸", "🇨🇦", "🇨🇭", "🇨🇳", "🇩🇪", "🇩🇰", "🇪🇪", "🇪🇬", "🇪🇸", "🇫🇮", "🇫🇷", "🇬🇧", "🇬🇱", "🇬🇷", "🇭🇺", "🇮🇪", "🇮🇱", "🇮🇩", "🇮🇳", "🇮🇶", "🇮🇷", "🇮🇸", "🇮🇹", "🇯🇵", "🇯🇲", "🇰🇪", "🇰🇷", "🇰🇵", "🇱🇺", "🇲🇹", "🇲🇽", "🇳🇴", "🇳🇱", "🇳🇿", "🇵🇱", "🇵🇹", "🇷🇺", "🇸🇪", "🇸🇮", "🇹🇳", "🇺🇦", "🇺🇸", "🇻🇪", "🇻🇬", "🇻🇮", "🇿🇦", "🇿🇼", "🇦🇪", "🇦🇷", "🇦🇹", "🇦🇺", "🇧🇷"];
/*sports*/
emojis[5] = ["🧗", "🏇", "⛷️", "🏂", "🏌️", "🏄", "🚣", "🏊", "⛹️", "🏋️", "🚴", "🚵", "🤸", "🤼", "🤽", "🤾", "🤹", "🧘", "🏆", "🏅", "🥇", "🥈", "🥉", "⚽", "⚾", "🥎", "🏀", "🏐", "🏈", "🏉", "🎾", "🥏", "🎳", "🏏", "🏑", "🏒", "🥍", "🏓", "🏸", "🥊", "🥋", "⛳", "⛸️", "🎣", "🎽", "🎿", "🛷", "🥌", "🎯", "🎱", "🎮", "♟️", "🏹"];
/*technologies (smartphones, laptops, ect.) and office*/
emojis[6] = ["⌚", "⏰", "⏱️", "⏲️", "🕰️", "🕹️", "🎙️", "🎚️", "🎛️", "📻", "📱", "📲", "☎️", "📞", "📟", "📠", "🔋", "🔌", "💻", "🖥️", "🖨️", "⌨️", "🖱️", "🖲️", "💽", "💾", "💿", "📀", "🎥", "🎞️", "📽️", "📺", "📷", "📸", "📹", "📼", "💳", "📧", "📨", "📩", "📤", "📥", "📮", "📁", "📂", "🗂️", "📅", "📈", "📉", "📊", "📌", "📋", "📍", "📎", "📏", "📐", "✂️", "✏️", "✒️", "🖋️", "🖊️", "🖌️", "🖍️", "📝", "🗑️", "📡", "🔭", "🔬"];
/*clothes and accessories*/
emojis[7] = ["👣", "👓", "🕶️", "🥽", "🥼", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "🎒", "👞", "👟", "🥾", "🥿", "👠", "👡", "👢", "👑", "👒", "🎩", "🎓", "🧢", "⛑️", "💼"]
/*hands and parts of body*/
emojis[8] = ["👋", "🤚", "✋", "🖖", "👌", "✌️", "🤞", "🤟", "🤘", "🤙", "🤏", "👈", "👉", "👆", "👇", "☝️", "🖕", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💪", "🦵", "🦶", "👂", "👃", "🧠", "🦷", "👀", "👁️", "👅", "👄"]
/*other*/
emojis[9] = ["💩", "💋", "💅", "🤳", "🦴", "🧳", "🌂", "☂️", "🧵", "🧶", "💄", "💍", "💥", "💫", "💦", "💨", "🐾", "🕸️", "🦠", "💐", "🌍", "🌎", "🌏", "🌐", "🌑", "🌓", "🌕", "🌗", "🌙", "🌛", "🌜", "☀️", "⭐", "☁️", "⛅", "⛈️", "🌤️", "🌥️", "🌦️", "🌧️", "🌨️", "🌩️", "🌪️", "🌫️", "🌈", "❄️", "☃️", "⛄", "☄️", "🔥", "💧", "🌊", "🎄", "🌻", "🌼", "🌷", "🌹", "🌹", "🌳", "🌴", "☘️", "🔑", "🗝️", "🔨", "⛏️", "🔒", "🔓", "🔏", "🔐", "🗡️", "⚔️", "🔫", "🧰", "🧲", "⛓️", "💉", "🧬", "🧪", "🛏️", "🚪", "🚽", "🚿", "🛁", "🧴", "🧷", "🧺", "🧻", "🧼", "🧽", "🧯", "🚬", "⚰️", "⚱️", "🗿", "🛡️", "⚙️", "⚖️", "🔗", "💀", "☠️", "🦻", "🦸", "🦸‍♀️", "🦹", "🦹‍♀️", "🧙", "🧙‍♀️", "🧚", "🧚‍♀️", "🧛", "🧛‍♀️", "🧜", "🧜‍♀️", "🧝", "🧝‍♀️", "🧞‍♂️", "🧞", "🕵️", "💂", "💂‍♀️", "👮", "👮‍♀️", "👨‍🚒", "👩‍🚒", "👨‍‍✈️", "👩‍✈️", "👨‍‍💻", "👩‍💻", "👨‍‍🎤", "👩‍🎤", "👨‍‍🎨", "👩‍🎨", "👷‍♂️", "👷‍♀️", "💑", "👨‍❤️‍👨", "👩‍❤️‍👩"];
var selectedTitle = 0;
var char_copied_n = 0;

generateTitles();

function copyEmoji(text) {
    document.getElementById("text_to_copy").style.display = "block";
    document.getElementById("text_to_copy").value = text;
    var copyText = document.getElementById("text_to_copy");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("text_to_copy").style.display = "none";
    showCopied()
}

function generateTitles() {
    var widthToSet = 100 / titles.length;
    for (var i = 0; i < titles.length; i++) {
        document.getElementById("titles").innerHTML += "<input type='button' class='section_title' id='title" + i + "' value='" + titles[i] + "' />";
        document.getElementsByClassName("section_title")[i].style.width = widthToSet + "%";
    }
    for (var i = 0; i < titles.length; i++) {
        document.getElementsByClassName("section_title")[i].onclick = function (e) {
            setTitle(this.id.replace("title", ""));
        };
    }
    setTitle(0);
}

function setTitle(newTitle) {
    document.getElementsByClassName("section_title")[selectedTitle].style.borderTopColor = "transparent";
    selectedTitle = newTitle;
    document.getElementsByClassName("section_title")[selectedTitle].style.borderTopColor = "rgb(10, 132, 255)";
    generateEmojis(newTitle);
}

function generateEmojis(title) {
    //emoji[title][i]
    document.getElementById("emojis").innerHTML = "";
    var n_emojis = emojis[title].length;
    for (var i = 0; i < n_emojis; i++) {
        document.getElementById("emojis").innerHTML += "<input type=\"button\" class=\"emoji\" value=\"" + emojis[title][i] + "\" />";
    }

    for (var i = 0; i < n_emojis; i++) {
        document.getElementsByClassName("emoji")[i].onclick = function (e) {
            copyEmoji(this.value);
        };
    }
    setHeight();
}

function setHeight() {
    var max_columns = 9;
    var max_rows = 6;
    var n_emojis = emojis[selectedTitle].length;
    var rows = parseInt(n_emojis / max_columns + "");
    if ((n_emojis % max_columns) != 0) rows += 1;

    document.getElementById("emojis").style.height = max_rows * 50 + 4 + "px";
    document.getElementById("popup-content").style.height = max_rows * 50 + 4 + 36 + "px"; //36 is the height of titles

    var widthToSet = max_columns * 50 + 4 + 10; //50 is the height of one row, 4 is the padding of emojis div, 10 is the width of scrollbar (customised), otherwise it would be 18
    if (rows > max_rows) {
        document.body.style.width = widthToSet + "px";
        document.getElementById("emojis").style.overflowY = "auto";
    } else {
        document.body.style.width = max_columns * 50 + 4 + "px";
        document.getElementById("emojis").style.overflowY = "hidden";
    }
    //var n_emojies_in_section = rows * max_columns - (max_columns - n_emojis % max_columns);
    document.getElementById("emojis").scrollTop = (0, 0);
}

function showCopied() {
    let index_to_use = char_copied_n;
    char_copied_n++;
    let new_b_element = document.createElement("b");
    new_b_element.className = "character-copied";
    new_b_element.id = "character-copied-" + index_to_use;
    new_b_element.innerHTML = "Copied ✔";
    document.getElementById("popup-content").append(new_b_element);
    setTimeout(function () {
        hideCopied(index_to_use);
    }, 1500);
}

function hideCopied(index_to_use) {
    document.getElementById("character-copied-" + index_to_use).style.display = "none";
}