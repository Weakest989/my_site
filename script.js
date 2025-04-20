const form = document.getElementById('postForm');
const postsDiv = document.getElementById('posts');

// 投稿保存時
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  const post = { title, content, date: new Date().toLocaleString() };
  const posts = JSON.parse(localStorage.getItem('posts') || '[]');
  posts.unshift(post); // 新しい順に
  localStorage.setItem('posts', JSON.stringify(posts));

  form.reset();
  renderPosts();
});

// 投稿表示
function renderPosts() {
  const posts = JSON.parse(localStorage.getItem('posts') || '[]');
  postsDiv.innerHTML = posts.map(p => `
    <div class="post">
      <h3>${p.title}</h3>
      <small>${p.date}</small>
      <p>${p.content.replace(/\n/g, "<br>")}</p>
    </div>
  `).join('');
}

// 初期表示
renderPosts();
