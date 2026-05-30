const info = document.querySelector(".info");

async function getPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
    );

    const data = await response.json();
    console.log(data);
    data.forEach((post) => {
      info.innerHTML += `<p>${post.body}</p>`;
    });
  } catch (error) {
    console.log(error);
  }
}
getPosts();

const post = {
  title: "My Test Post",
  body: "This is a test",
  userId: 1,
};

async function Posts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
Posts();
