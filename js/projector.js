document.addEventListener("DOMContentLoaded", function(){
  var cards = [ 
    {
      title: 'Meu Artelie',
      description: 'Mandala Artist Porfolio. Concept created in Adobe XD, frontend implemented using NextJs using CSS modules.',
      cover: 'meuartelie.webp',
      github: 'https://github.com/robdll/meuartelie',
      website: 'https://meuartelie.com',
    },
    {
      title: 'BeMyFan',
      description: 'Web Application built in NextJs with a PHP backend allowing users to share links and sells videos via stripe.',
      cover: 'bemyfan.webp',
      website: 'https://bemyfan.com',
    },
    {
      title: 'Elaisian',
      description: 'Web Application created in Angular 4 with a REST API in Node Express hosted on AWS. Architecture also includes Lambdas, RDS, and Docker.',
      cover: 'elaisian.webp',
      website: 'elaisian.com',
      youtube: 'https://www.youtube.com/c/Elaisian'
    },
    {
      title: 'Movie Manager',
      description: 'Movie Manager React showcase using redux thunk and themoviedb API to fetch movies and adds them to your favorites list. ',
      cover: 'movieManager.webp',
      github: 'https://github.com/robdll/mimoma',
      website: 'https://robdll.github.io/mimoma/',
    },
    // {
    //   title: 'TwitchTV',
    //   description: 'React application used to showcase how to connect to Twitch API to keep track your favorite Twitch streamers.',
    //   cover: 'https://via.placeholder.com/300x200.png',
    //   github: 'https://github.com/robdll/FCC_twitchTv',
    //   website: 'https://robdll.github.io/FCC_twitchTv',
    // },
    {
      title: 'Hanoi Recursion',
      description: 'Assembly script to solve in the minimum amount of steps the hanoi tower game. The procedure it\'s a recursion written in Assembly',
      cover: 'hanoi.webp',
      github: 'https://github.com/robdll/Hanoi',
    },
    {
      title: 'Random quotes',
      description: 'Responsive page providing random quotes fetchED via external API which also allow to tweet them.',
      cover: 'randomQuoteBg.webp',
      github: 'https://github.com/robdll/random-quote-machine',
      website: 'https://robdll.github.io/random-quote-machine',
    },
    {
      title: 'Super Mario',
      description: 'Simple tribute page project developed to obtain FreeCodeCamp Certification.',
      cover: 'marioTribute.webp',
      github: 'https://github.com/robdll/super-mario-tribute',
      website: 'https://robdll.github.io/super-mario-tribute',
    },
    {
      title: 'Space Invaders',
      description: 'Remake of the 1978 arcade games completely rewrote by using Java. EasterEggs and cheats were added too.',
      cover: 'spaceInvaders.webp',
      github: 'https://github.com/robdll/spaceInvaders',
    },
    
    {
      title: 'DrJack/MrWhite',
      description: '2d Infinite Runner game created in Unity3d based on colors and shapes. The main character double personality will make your life harder',
      cover: 'drJack.webp',
      github: 'https://github.com/robdll/GlobalGameJam/tree/master/DrJack%26MrWhite',
      youtube: 'https://www.youtube.com/watch?v=em-Id-MdW94'
    },
    {
      title: 'Tango Legacy',
      description: 'Inspired by Zbigniew Rybczyński opera, this 2d isometric game made with Unity3d requires to time music and images to avoid characters collision',
      cover: 'tango.webp',
      github: 'https://github.com/robdll/GlobalGameJam/tree/master/TangoLegacy',
      youtube: 'https://www.youtube.com/watch?v=__DneSSMqfo'
    },
    {
      title: 'Obsession',
      description: '2d platform game made with Unity3d whose goal is to adventure in the character mind illeness to fix his paranoid disorder.',
      cover: 'obsession.webp',
      github: 'https://github.com/robdll/GlobalGameJam/tree/master/Obsession',
      youtube: 'https://www.youtube.com/watch?v=x10dBwZFi2Q'
    },
    {
      title: 'Mindgame',
      description: 'Isometric adventure game made with Gamemaker whose goal is to sync with a child branwaves to help him walk through his fears.',
      cover: 'mindgame.webp',
      github: 'https://youtu.be/pUZIxpSm8Jw',
      youtube: 'https://github.com/robdll/SpicyNerdParty'
    },
    {
      title: 'Weather App',
      description: 'This weather application uses GeoLocation and fetch FreeCodeCamp API to provides real time data about the weather',
      cover: 'meteo.webp',
      github: 'https://github.com/robdll/meteo',
      website: 'https://robdll.github.io/meteo',
      youtube: 'a'
    }
  ];

  // background-image: url("https://via.placeholder.com/300x200.png"); /* The image used - important! */


  var portfolioContainer = document.getElementsByClassName('section-container')[0];

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
    flipCardFront.style.backgroundImage = "url('./resources/" + card.cover + "')";

    const cardResources = document.createElement("div");
    cardResources.classList.add("card-resources");
    if(card.github) {
      const img = document.createElement("img");
      img.src = './resources/github.svg';
      img.alt = 'github logo';
      img.loading = 'lazy';
      const link = document.createElement("a");
      link.href = card.github;
      link.appendChild(img);
      cardResources.appendChild(link);
    }
    if(card.youtube) {
      const img = document.createElement("img");
      img.src = './resources/youtube.svg';
      img.alt = 'youtube logo';
      img.loading = 'lazy';
      const link = document.createElement("a");
      link.href = card.youtube;
      link.appendChild(img);
      cardResources.appendChild(link);
    }
    if(card.website) {
      const img = document.createElement("img");
      img.src = './resources/website.svg';
      img.alt = 'website logo';
      img.loading = 'lazy';
      const link = document.createElement("a");
      link.href = card.website;
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

});