document.getElementById("navbar-container").innerHTML = `
  <nav>
    <a href="/">
      <img class="nav--logo" src="resources/icons/robdll-logo.svg" alt="robdll logo">
    </a>
    <ul id="navbar" class="nav--link-container">
      <li><a class="nav--link" href="/">Home</a></li>
      <li><a class="nav--link" href="#contacts">Contacts</a></li>
      <li><a class="nav--link" href="portfolio.html">Portfolio</a></li>
    </ul>
    <div id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
`;