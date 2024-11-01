document.addEventListener("DOMContentLoaded", function () {
  var cards = [
    {
      tags: ["Frontend", "Backend", "AI/ML"],
      title: "Sentiment Analysis",
      description:
        "Sentiment Analysis Web Application created in NextJs using HuggingFace to predict the sentiment of a given text",
      cover: "sentiment.webp",
      github: "https://github.com/robdll/SentimentAnalysisForm",
      website: "https://sentiment-analysis-form.vercel.app/",
    },
    {
      tags: ["Frontend", "Backend"],
      title: "Meu Artelie",
      description:
        "Mandala Artist Porfolio. Concept created in Adobe XD, frontend implemented using NextJs using CSS modules.",
      cover: "meuartelie.webp",
      github: "https://github.com/robdll/meuartelie",
      website: "https://meuartelie.com",
    },
    {
      tags: ["Frontend", "Backend"],
      title: "Bitphoenix",
      description:
        "Bitcoin Orderbook, Ticker and Trade history written in Reactjs Featuring SCSS modules and Websocket",
      cover: "bitphoenix.webp",
      github: "https://github.com/robdll/bitphoenix",
      website: "https://robdll.com/bitphoenix",
    },
    {
      tags: ["Frontend"],
      title: "CourseShop",
      description:
        "Neobrutalistic design courshop platform Poc created in nextJs using CSS modules. Designed by AkintanIteoluwa",
      cover: "courseshop.webp",
      github: "https://github.com/robdll/neobrutalist-courseshop",
      website: "https://neobrutalist-courseshop.vercel.app/",
    },
    {
      tags: ["Frontend", "Backend"],
      title: "BeMyFan",
      description:
        "Web Application built in NextJs with a PHP backend allowing users to share links and sells videos via stripe.",
      cover: "bemyfan.webp",
      website: "https://bemyfan.com",
    },
    {
      tags: ["Frontend", "Backend", "AI/ML"],
      title: "Elaisian",
      description:
        "Web Application created in Angular 4 with a REST API in Node Express hosted on AWS. Architecture also includes Lambdas, RDS, and Docker.",
      cover: "elaisian.webp",
      website: "https://elaisian.com",
      youtube: "https://www.youtube.com/c/Elaisian",
    },
    {
      tags: ["Frontend"],
      title: "Awesome movie",
      description:
        "Movie Manager App created with React, Redux and Redux Thunk. It makes use of themoviedb API to fetch movies and features favorites and watchlater lists.",
      cover: "awemovie.webp",
      github: "https://github.com/robdll/awesome-movies",
      website: "https://robdll.github.io/awesome-movies/",
    },
    {
      tags: ["Frontend"],
      title: "Tomaclock",
      description:
        "A Tomato Clock App written in React with two countdown timers switching between each other when reaching 0",
      cover: "tomaclock.webp",
      github: "https://github.com/robdll/tomaclock",
      website: "https://robdll.github.io/tomaclock/",
    },
    {
      tags: ["Frontend", "Backend"],
      title: "ShortUrl",
      description:
        "Microservice node API featuring NextJs and mongoDB to shorten long url's",
      cover: "shorturl.webp",
      github: "https://github.com/robdll/short-url",
      website: "https://short-url-six-sigma.vercel.app/",
    },
    {
      tags: ["Frontend"],
      title: "DrumDrum",
      description:
        "An easy to play Drum Machine responsive application written in React which also uses keydown events to provide a better user experience",
      cover: "drumdrum.webp",
      github: "https://github.com/robdll/DrumDrum",
      website: "https://robdll.github.io/DrumDrum",
    },
    {
      tags: ["Frontend"],
      title: "Markdown Preview",
      description:
        "An easy to use Markdown previewer responsive application written in React",
      cover: "previewer.webp",
      github: "https://github.com/robdll/MarkdownPreviewer",
      website: "https://robdll.github.io/MarkdownPreviewer",
    },
    {
      tags: ["Backend"],
      title: "MetaFile",
      description:
        "File metadata parser microservice featuring NextJs and nodeJs",
      cover: "metafile.webp",
      github: "https://github.com/robdll/file-metadata-microservice",
      website: "https://robdll.github.io/tomaclock/",
    },
    {
      tags: ["Frontend"],
      title: "Neobrutalism",
      description:
        "Neobrutalism Design custom component Snackbar written in Angular using framework animation",
      cover: "neobrutal.webp",
      github: "https://github.com/robdll/neobrutal-snackbar",
      website: "https://robdll.github.io/neobrutal-snackbar",
    },
    {
      tags: ["Backend"],
      title: "Timestamp Microservice",
      description:
        "Microservice API to convert timestamp and dates to human readable format",
      cover: "timestampMicro.webp",
      github: "https://github.com/robdll/timestamp-microservice",
      website: "https://timestamp-microservice-three.vercel.app/",
    },
    {
      tags: ["Frontend"],
      title: "Random quotes",
      description:
        "Responsive page providing random quotes fetchED via external API which also allow to tweet them.",
      cover: "randomQuoteBg.webp",
      github: "https://github.com/robdll/random-quote-machine",
      website: "https://robdll.github.io/random-quote-machine",
    },
    {
      tags: ["Backend", "Frontend"],
      title: "Movie Manager",
      description:
        "Movie Manager React showcase using redux thunk and themoviedb API to fetch movies and adds them to your favorites list. ",
      cover: "movieManager.webp",
      github: "https://github.com/robdll/mimoma",
      website: "https://robdll.github.io/mimoma/",
    },
    {
      tags: ["Frontend"],
      title: "Weather App",
      description:
        "This weather application uses GeoLocation and fetch FreeCodeCamp API to provides real time data about the weather",
      cover: "meteo.webp",
      github: "https://github.com/robdll/meteo",
      website: "https://robdll.github.io/meteo",
    },
    {
      tags: ["Frontend", "Games"],
      title: "Minesweeper",
      description:
        "Simple javascript, html, css of the famous mineweeper game featuring 3 difficulties",
      cover: "minesweeper.webp",
      github: "https://github.com/robdll/minesweeper",
      website: "https://robdll.github.io/minesweeper",
    },
    {
      tags: ["Frontend"],
      title: "TwitchTV",
      description:
        "React application used to showcase how to connect to Twitch API to keep track your favorite Twitch streamers.",
      cover: "twitchtv.webp",
      github: "https://github.com/robdll/FCC_twitchTv",
      website: "https://robdll.github.io/FCC_twitchTv",
    },
    {
      tags: ["Frontend"],
      title: "Super Mario",
      description:
        "Simple tribute page project developed to obtain FreeCodeCamp Certification.",
      cover: "marioTribute.webp",
      github: "https://github.com/robdll/super-mario-tribute",
      website: "https://robdll.github.io/super-mario-tribute",
    },
    {
      tags: ["Games"],
      title: "Hanoi Recursion",
      description:
        "Assembly script to solve in the minimum amount of steps the hanoi tower game. The procedure it's a recursion written in Assembly",
      cover: "hanoi.webp",
      github: "https://github.com/robdll/Hanoi",
    },
    {
      tags: ["Games"],
      title: "Space Invaders",
      description:
        "Remake of the 1978 arcade games completely rewrote by using Java. EasterEggs and cheats were added too.",
      cover: "spaceInvaders.webp",
      github: "https://github.com/robdll/spaceInvaders",
    },
    {
      tags: ["Games"],
      title: "DrJack/MrWhite",
      description:
        "2d Infinite Runner game created in Unity3d based on colors and shapes. The main character double personality will make your life harder",
      cover: "drJack.webp",
      github:
        "https://github.com/robdll/GlobalGameJam/tree/master/DrJack%26MrWhite",
      youtube: "https://www.youtube.com/watch?v=em-Id-MdW94",
    },
    {
      tags: ["Games"],
      title: "Tango Legacy",
      description:
        "Inspired by Zbigniew Rybczyński opera, this 2d isometric game made with Unity3d requires to time music and images to avoid characters collision",
      cover: "tango.webp",
      github: "https://github.com/robdll/GlobalGameJam/tree/master/TangoLegacy",
      youtube: "https://www.youtube.com/watch?v=__DneSSMqfo",
    },
    {
      tags: ["Games"],
      title: "Obsession",
      description:
        "2d platform game made with Unity3d whose goal is to adventure in the character mind illeness to fix his paranoid disorder.",
      cover: "obsession.webp",
      github: "https://github.com/robdll/GlobalGameJam/tree/master/Obsession",
      youtube: "https://www.youtube.com/watch?v=x10dBwZFi2Q",
    },
    {
      tags: ["Games"],
      title: "Mindgame",
      description:
        "Isometric adventure game made with Gamemaker whose goal is to sync with a child branwaves to help him walk through his fears.",
      cover: "mindgame.webp",
      github: "https://github.com/robdll/SpicyNerdParty",
      youtube: "https://youtu.be/pUZIxpSm8Jw",
    },
  ];

  function getTags(projects) {
    const tags = [];
    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });
    return tags;
  }

  const tags = getTags(cards);
  const filterContainer = document.querySelector('.filter');
  filterContainer.innerHTML = '';
  const allButton = document.createElement('button');
  allButton.classList.add('filter-btn');
  allButton.setAttribute('data-tag', 'all');
  allButton.textContent = 'All';
  allButton.classList.add('active'); 
  filterContainer.appendChild(allButton);
  tags.forEach((tag) => {
    const button = document.createElement('button');
    button.classList.add('filter-btn');
    button.setAttribute('data-tag', tag);
    button.textContent = tag;
    filterContainer.appendChild(button);
  });


  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach((button) => {
    button.addEventListener('click', (element) => {
      filterButtons.forEach((btn) => { 
        btn.classList.remove('active'); 
      });
      element.target.classList.add('active');
      const tag = button.getAttribute('data-tag');
      if (tag === 'all') {
        displayProjects(cards);
      } else {
        const filteredProjects = cards.filter((project) => {
          return project.tags.includes(tag);
        });
        displayProjects(filteredProjects);
      }
    });
  });

  displayProjects();

  function displayProjects(projects = cards) {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = '';
    projects.forEach(function (card) {
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
      flipCardFront.style.backgroundImage =
        "url('resources/" + card.cover + "')";
      const cardResources = document.createElement("div");
      cardResources.classList.add("card-resources");
      ['github', 'youtube', 'website'].forEach((resource) => {
        if (card[resource]) {
          const img = document.createElement("img");
          img.src = `resources/${resource}.svg`;
          img.alt = `${resource} logo`;
          img.loading = "lazy";
          const link = document.createElement("a");
          link.href = card[resource];
          link.appendChild(img);
          cardResources.appendChild(link);
          if(resource === 'website') {
            link.target = "_blank";
          }
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
        projectsContainer.appendChild(flipCard);
      });
    });
  }
});
