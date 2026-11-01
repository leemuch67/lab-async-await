# Lab: Bookstore Manager

This lab builds a small social feed from the JSONPlaceholder posts API. The page fetches posts, renders each title and body, and lets the reader show one random post.

## Run locally

1. Clone your fork and open the project folder in VS Code.
2. Run `npm install`.
3. Start the page with a local static server (for example, the Live Server extension in VS Code). Opening the HTML as a `file://` URL may prevent the browser from making the API request.
4. Open browser developer tools and check the Console tab for request errors.

## Implementation

- `loadPosts()` uses `async`/`await` and Fetch to request `https://jsonplaceholder.typicode.com/posts`.
- `displayPosts(posts)` builds a list item for every post, using an `h1` for its title and a paragraph for its body.
- The random post button selects and displays one post from the fetched results.
- A failed request is written to the console and displayed as a readable message on the page.

## Check the code

Run `npm test`. The repository's tests make a live request to JSONPlaceholder, so internet access is needed. Review the browser Console when the page is open to check for client-side errors.

## Maintain the project

Use Git commits to track focused changes and make it possible to review or revert them. Review the API endpoint, dependencies, and examples periodically, and update this README when the setup or behavior changes.
