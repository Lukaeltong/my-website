// Simple password protection
const SECRET = "290800"; // change this to your own

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === SECRET) {
    document.getElementById("owner-controls").style.display = "block";
  } else {
    alert("Wrong password!");
  }
}

// Load announcements + news
async function loadContent() {
  const ann = await fetch("announcements.json").then(r => r.json());
  const news = await fetch("news.json").then(r => r.json());

  // Announcement bar
  const bar = document.getElementById("announcement-bar");
  if (bar) bar.innerText = ann.text || "";

  // News list
  const newsList = document.getElementById("news-list");
  if (newsList) {
    newsList.innerHTML = "";
    news.items.forEach(item => {
      const div = document.createElement("div");
      div.innerText = item;
      newsList.appendChild(div);
    });
  }
}

// Add news (prints updated JSON to console)
async function addNews() {
  const input = document.getElementById("news-input").value;
  const news = await fetch("news.json").then(r => r.json());
  news.items.unshift(input);
  console.log("Updated news.json:", JSON.stringify(news, null, 2));
  alert("News added! Copy console output into news.json on GitHub.");
}

// Add announcement
async function addAnnouncement() {
  const input = document.getElementById("announce-input").value;
  const ann = { text: input };
  console.log("Updated announcements.json:", JSON.stringify(ann, null, 2));
  alert("Announcement updated! Copy console output into announcements.json on GitHub.");
}

loadContent();
