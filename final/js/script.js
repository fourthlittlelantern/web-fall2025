 function me() {
            var p = document.getElementById('me');
            p.innerHTML='Me.';

        }

function you() {
        var p = document.getElementById('you');
        p.innerHTML='You.';
    }

function simpleMath() {
    var p = document.getElementById('simple-math');
    p.innerHTML=1+2;
}

function tree() {
    var p = document.getElementById('tree');
    p.innerHTML='Asghbgahn.';
}

function pocketWatch() {
    var p = document.getElementById('pocket-watch');
    p.innerHTML='Asghbgahn.';
}

function crow() {
    var p = document.getElementById('crow');
    p.innerHTML='Asghbgahn.';
}

function directionNorth(button) {
    button.innerHTML='North (onwards).';
}

let villageWords = [
    '"Hello there. Would you like to sit down for a chat, maybe a drink?"',
    '"Contemplating? Yes, contemplating."',
    '"Asghbgahn."',
    '"...100. 100. 101.5. 101.5. 100.5. 100.5..."',
    '"Where has my son disappeared off to this time... can you stop that infernal counting?"',
    '"Why, I am simply counting the population. 100.5, 100.5..."',
    "<br><i>You have heard enough. It is time to leave.</i>"];
let vWords = 0;

function villageTalk() {
    if (vWords < villageWords.length) {
        document.getElementById('village-talk').innerHTML += "<br>" + villageWords[vWords] + " ";
        vWords += 1;
    }

}

let streamWords = [
    '"And where are <i>you</i> heading, hm?"', 
    '<i>...?-</i>',
    '"<b>North</b>, hm? That must be it."',
    '<i>You only see his vague reflection in the running water.</i>',
    '"Do be careful. You never know what you\'ll find up <b>north."',
    '<i>He turns and continues on his way, downstream. And then he is gone.</i>',
    '<i>When you look up, you do not see him. You and the signpost are the only beings in sight.</i>'

];
let sWords = 0;

function streamTalk() {
    if (sWords < streamWords.length) {
        document.getElementById('stream-talk').innerHTML += "<br>" + streamWords[sWords] + " ";
        sWords += 1;
    }
    
}

let cityWords = [
    '"Fresh apples for sale, 10 asghbgahns each! Get your fresh apples here, for only 10 asghbgahns each!"',
    '"...I\'m late again, I can\'t be late again..."',
    '"Ah, <b>north</b>. But what about <b>north</b>?"',
    '"...sister told me that they met with his cousin last week and..."',
    '"Hey! Watch where you\'re going, kid!"',
    '"...don\'t think the king has much say in these things, typically it\'s The Tour Guide that..."',
    '"Of course it is. When is it not?"',
    '"...just came back from The Capital, and it\'s weird, man, it\'s weird..."',
    '"So, this time were they-"',
    '"...but I swear, none of them had any monocle!"',
    '"A monocle, you say?"',
    '"Yes! None of them! So why do I remember..."',
    '<br><i>You have heard enough. It is time to leave.</i>'];
let cWords = 0;

function cityTalk() {
    if (cWords < cityWords.length) {
        document.getElementById('city-talk').innerHTML += "<br>" + cityWords[cWords] + " ";
        cWords += 1;
    }

}

function capitalTalk() {
    var p = document.getElementById('capital-talk');
    p.innerHTML='<i>They? Who? There is no one to listen to. No one.</i>';
}


let towerWords = [
    '<b>1.3?</b>',
    'There is something <b>severely</b> wrong with that number.',
    '<b>1.3.</b>',
    'Why, the <b>0.3</b> is what remains of a once clever and young soul.',
    'It\'s a pity, the fate that befell him. He had too many ideas, too much intelligence for his own good. His discoveries destroyed him. Now, he is nothing more than <b>0.3</b>.',

];

let tWords = 0;

function towerTalk() {
    if (tWords < towerWords.length) {
        document.getElementById('tower-talk').innerHTML += "<br><br>" + towerWords[tWords] + " ";
        tWords += 1;
    }

}

let labWords = [
    'And the last one, folded up and hidden, tucked between another paper and the wall?',
    '<b>No</b>. There is no mistaking it.',
    'It is a drawing of <b>you</b>. There is no mistaking it.',
    'You frantically turn around, your back to the papers. The laboratory is dark and silent as ever.',
    'How? How could it possibly be <b>you</b>?',
    '<b>No.</b> You have seen too much. You have seen <b>far</b> too much. It is time to go.',
    'Go? Go <b>onwards</b>, of course. Where else can you go? The door is gone. The landing is gone. The stairs are gone.<br>And now the laboratory itself is gone too. <b>Onwards</b> is the only way left.',
    '<button><a href="you.html">Onwards.</button>',

];

let lWords = 0;

function labTalk() {
    if (lWords < labWords.length) {
        document.getElementById('lab-talk').innerHTML += "<br><br>" + labWords[lWords] + " ";
        lWords += 1;
    }

}