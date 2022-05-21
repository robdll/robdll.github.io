document.addEventListener("DOMContentLoaded", function(){
  var cards = [ 
    {
      title: 'Meu Artelie',
      description: 'Mandala Artist Porfolio. Concept created in Adobe XD, frontend implemented using NextJs using CSS modules.',
      cover: 'meuartelie.webp',
      github: 'https://github.com/robdll/meuartelie',
      website: 'https://meuartelie.com',
      y: '20px'
    },
    {
      title: 'BeMyFan',
      description: 'Web Application built in NextJs with a PHP backend allowing users to share links and sells videos via stripe.',
      cover: 'bemyfan.webp',
      website: 'https://bemyfan.com',
      y: '42px'
    },
    {
      title: 'Elaisian',
      description: 'Web Application created in Angular 4 with a REST API in Node Express hosted on AWS. Architecture also includes Lambdas, RDS, and Docker.',
      cover: 'elaisian.webp',
      website: 'https://elaisian.com',
      youtube: 'https://www.youtube.com/c/Elaisian',
      y: '44px',
      x: '2px'
    },
    {
      title: 'Movie Manager',
      description: 'Movie Manager React showcase using redux thunk and themoviedb API to fetch movies and adds them to your favorites list. ',
      cover: 'movieManager.webp',
      github: 'https://github.com/robdll/mimoma',
      website: 'https://robdll.github.io/mimoma/',
      y: '44px',
      x: '5px'
    },
    {
      title: 'Tomaclock',
      description: 'A Tomato Clock App written in React with two countdown timers switching between each other when reaching 0',
      cover: 'tomaclock.webp',
      github: 'https://github.com/robdll/tomaclock',
      website: 'https://robdll.github.io/tomaclock/',
      y: '44px',
      x: '5px'
    },
    {
      title: 'DrumDrum',
      description: 'An easy to play Drum Machine responsive application written in React which also uses keydown events to provide a better user experience',
      cover: 'drumdrum.webp',
      github: 'https://github.com/robdll/drumdrum',
      website: 'https://robdll.github.io/drumdrum/',
      y: '55px',
      x: '0px'
    },
    {
      title: 'Random quotes',
      description: 'Responsive page providing random quotes fetchED via external API which also allow to tweet them.',
      cover: 'randomQuoteBg.webp',
      github: 'https://github.com/robdll/random-quote-machine',
      website: 'https://robdll.github.io/random-quote-machine',
      y: '-4px',
    },
    {
      title: 'Weather App',
      description: 'This weather application uses GeoLocation and fetch FreeCodeCamp API to provides real time data about the weather',
      cover: 'meteo.webp',
      github: 'https://github.com/robdll/meteo',
      website: 'https://robdll.github.io/meteo',
      y: '52px',
      x: '0px'
    },
    {
      title: 'TwitchTV',
      description: 'React application used to showcase how to connect to Twitch API to keep track your favorite Twitch streamers.',
      cover: 'twitchtv.webp',
      github: 'https://github.com/robdll/FCC_twitchTv',
      website: 'https://robdll.github.io/FCC_twitchTv',
      y: '42px',
      x: '5px'
    },
    {
      title: 'Super Mario',
      description: 'Simple tribute page project developed to obtain FreeCodeCamp Certification.',
      cover: 'marioTribute.webp',
      github: 'https://github.com/robdll/super-mario-tribute',
      website: 'https://robdll.github.io/super-mario-tribute',
      y: '42px',
      x: '-27px',
    },
    {
      title: 'Hanoi Recursion',
      description: 'Assembly script to solve in the minimum amount of steps the hanoi tower game. The procedure it\'s a recursion written in Assembly',
      cover: 'hanoi.webp',
      github: 'https://github.com/robdll/Hanoi',
    },
    {
      title: 'Space Invaders',
      description: 'Remake of the 1978 arcade games completely rewrote by using Java. EasterEggs and cheats were added too.',
      cover: 'spaceInvaders.webp',
      github: 'https://github.com/robdll/spaceInvaders',
      y: '47px',
      x: '21px',
    },
    {
      title: 'DrJack/MrWhite',
      description: '2d Infinite Runner game created in Unity3d based on colors and shapes. The main character double personality will make your life harder',
      cover: 'drJack.webp',
      github: 'https://github.com/robdll/GlobalGameJam/tree/master/DrJack%26MrWhite',
      youtube: 'https://www.youtube.com/watch?v=em-Id-MdW94',
      y: '42px',
      x: '5px',
    },
    {
      title: 'Tango Legacy',
      description: 'Inspired by Zbigniew Rybczyński opera, this 2d isometric game made with Unity3d requires to time music and images to avoid characters collision',
      cover: 'tango.webp',
      github: 'https://github.com/robdll/GlobalGameJam/tree/master/TangoLegacy',
      youtube: 'https://www.youtube.com/watch?v=__DneSSMqfo',
      y: '45px',
      x: '15px',
    },
    {
      title: 'Obsession',
      description: '2d platform game made with Unity3d whose goal is to adventure in the character mind illeness to fix his paranoid disorder.',
      cover: 'obsession.webp',
      github: 'https://github.com/robdll/GlobalGameJam/tree/master/Obsession',
      youtube: 'https://www.youtube.com/watch?v=x10dBwZFi2Q',
      y: '45px',
      x: '15px'
    },
    {
      title: 'Mindgame',
      description: 'Isometric adventure game made with Gamemaker whose goal is to sync with a child branwaves to help him walk through his fears.',
      cover: 'mindgame.webp',
      github: 'https://github.com/robdll/SpicyNerdParty',
      youtube: 'https://youtu.be/pUZIxpSm8Jw',
      y: '35px',
      x: '3px'
    }
  ];

  // background-image: url("https://via.placeholder.com/300x200.png"); /* The image used - important! */



  const portfolioContainer = document.createElement("section");
  portfolioContainer.classList.add("portfolio-container");
  
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("portfolio-title");
  
  const title = document.createElement("h2");
  title.textContent = 'Here you can find some of the projects I\'ve been working on!';
  titleContainer.appendChild(title);
  portfolioContainer.appendChild(titleContainer);
  
  cards.forEach( function(card) {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");
    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = card.title;
    cardTitle.classList.add("title-cutout");

    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("flip-card-front");
    flipCardFront.appendChild(cardTitle);
    flipCardFront.style.backgroundImage = "url('../resources/" + card.cover + "')";

    if(card.y) {
      flipCardFront.style.backgroundPositionY = card.y;
    }

    if(card.x) {
      flipCardFront.style.backgroundPositionX = card.x;
    }

    const cardResources = document.createElement("div");
    cardResources.classList.add("card-resources");
    if(card.github) {
      const img = document.createElement("img");
      img.src = '../resources/github.svg';
      img.alt = 'github logo';
      img.loading = 'lazy';
      const link = document.createElement("a");
      link.href = card.github;
      link.appendChild(img);
      cardResources.appendChild(link);
    }
    if(card.youtube) {
      const img = document.createElement("img");
      img.src = '../resources/youtube.svg';
      img.alt = 'youtube logo';
      img.loading = 'lazy';
      const link = document.createElement("a");
      link.href = card.youtube;
      link.appendChild(img);
      cardResources.appendChild(link);
    }
    if(card.website) {
      const img = document.createElement("img");
      img.src = '../resources/website.svg';
      img.alt = 'website logo';
      img.loading = 'lazy';
      const link = document.createElement("a");
      link.href = card.website;
      link.target = '_blank';
      link.appendChild(img);
      cardResources.appendChild(link);
    }
    const description = document.createElement("p");
    description.textContent = card.description;

    const flipCardBack = document.createElement("div");
    flipCardBack.classList.add("flip-card-back");
    flipCardBack.appendChild(description);
    flipCardBack.appendChild(cardResources);

    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);
    portfolioContainer.appendChild(flipCard);
  })

  document.body.appendChild(portfolioContainer);

});