const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string', 'poop')

    // Styled
    console.log('%c I am some great text', 'font-size: 50px; background: cyan; text-shadow: 10px 10px 0 white');

    // warning!
    console.warn('OH NOOOO');

    // Error :|
    console.error('OH SHIT');

    // Info
    console.info('You are gogeous !'); //doesn't work anymore

    // Testing
    console.assert(1 === 2, 'That is wrong !');

    // clearing
    console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/tatiana-sthl')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });
