// Write your code here!
async function fetchPosts() {
  try {
    // Step 1: Fetch data
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Step 2: Convert to JSON
    const posts = await response.json();

    // Step 3: Call display function
    displayPosts(posts);

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

function displayPosts(posts) {
  const ul = document.getElementById('post-list');

  // Step 4: Loop through posts
  posts.forEach(post => {

    // Create li
    const li = document.createElement('li');

    // Create h1
    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    // Create p
    const p = document.createElement('p');
    p.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // Append li to ul
    ul.appendChild(li);
  });
}

// Step 5: Call the function
fetchPosts();