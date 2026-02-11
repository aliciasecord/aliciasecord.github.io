let fuel = ['chaos-gremlin energy', 'pixie dust', 'fae bargains', 'unicorn plushies', 'romantasy novels', 'moonlit intentions', 'pocket-sized spellbooks', 'moon water', 'a little bit of spite', 'eldritch ambitions', 'so much glitter', 'to-do lists', 'artisanal CSS patterns', 'unicode sigils', 'unhinged whimsy', 'sapphic yearning', 'emotional support chapstick', 'the latest loot drop', 'stolen wifi', 'a good pair of boots', 'mischievous daydreams', 'celestial alignments', 'mystical energies', 'the magic of friendship', 'a pinch of mischief', 'a spoonful of dreams', 'a cup of ambition', 'midnight stardust', 'nostalgia', 'wanderlust', 'curiosity', 'tea leaves', 'found-object poetry', 'digital necromancy', 'femme nonsense', 'cottagecore sweaters', 'flowy gowns', 'dramatic monologues', 'unhinged doodles', 'stickers', 'side quests', 'cheerios for dinner', 'naive optimism', 'pretty rocks', 'tiny rebellions', 'queer joy', 'tight deadlines', 'blanket forts', 'treasure maps', 'pocket bacon', '9th-level spell slots', 'library cards', 'secret snacks', 'enamel pins', 'veggies I grew', 'dreams', 'early mornings', 'fresh dirt', 'stubborn hope', 'margin notes'];

const fuelSpan = document.querySelectorAll('#fueled-by .fuel');

function randomFuel() {
    return fuel[Math.floor(Math.random() * fuel.length)];
}

function getTwoDifferent() {
    const first = Math.floor(Math.random() * fuel.length);
    let second = Math.floor(Math.random() * fuel.length);

    while (second === first) {
        second = Math.floor(Math.random() * fuel.length);
    }
    return [fuel[first], fuel[second]];
}

function randomizeFueledBy() {
    const [a, b] = getTwoDifferent();

    fuelSpan[0].textContent = a;
    fuelSpan[1].textContent = b;
    }

randomizeFueledBy();
setInterval(randomizeFueledBy, 3000);