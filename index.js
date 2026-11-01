const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let allPosts = [];

function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  if (!postList) {
    throw new Error('Could not find the element with id "post-list".');
  }

  postList.replaceChildren();

  posts.forEach((post) => {
    const listItem = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");

    title.textContent = post.title;
    body.textContent = post.body;
    listItem.append(title, body);
    postList.append(listItem);
  });
}

async function loadPosts() {
  const postList = document.getElementById("post-list");
  const randomButton = document.getElementById("random-post-button");
  const feedStatus = document.getElementById("feed-status");

  if (randomButton) {
    randomButton.disabled = true;
  }

  try {
    const response = await fetch(POSTS_URL);

    if (!response.ok) {
      throw new Error(`The posts request failed (${response.status}).`);
    }

    allPosts = await response.json();
    displayPosts(allPosts);

    if (randomButton) {
      randomButton.disabled = allPosts.length === 0;
      randomButton.addEventListener("click", () => {
        if (allPosts.length === 0) return;

        const randomIndex = Math.floor(Math.random() * allPosts.length);
        displayPosts([allPosts[randomIndex]]);
        if (feedStatus) feedStatus.textContent = "Showing one random post.";
      });
    }
  } catch (error) {
    console.error("Unable to load posts:", error);

    if (postList) {
      const message = document.createElement("li");
      message.className = "error-message";
      message.textContent = "Posts could not be loaded. Please try again later.";
      postList.replaceChildren(message);
    }

    if (feedStatus) feedStatus.textContent = "The posts feed is unavailable.";
  }
}

loadPosts();
