export const setupPageBasics = (parentEl) => {
  parentEl.innerHTML = `
    <h1>Intro To Fetch!</h1>
    <div id='status'></div>
    <div id='users'>
      <h2>Users</h2>
      <ul id='users-list'></ul>
    </div>
    <div id='posts'>
      <h2>Posts</h2>
      <ul id='posts-list'></ul>
    </div>
    <form id='new-user-form' aria-labelledby='new-user-heading'>
      <h2 id='new-user-heading'>Create A New Blog User!</h2>
      <label for='username'>Username:</label>
      <input type='text' id='username' name='username' />
      <label for='email'>Email:</label>
      <input type='email' id='email' name='email' />
      <button>Submit</button>
    </form>
    <div id='new-user'></div>
  `;

  const statusDiv = parentEl.querySelector('#status');
  const usersUl = parentEl.querySelector('#users-list');
  const postsUl = parentEl.querySelector('#posts-list');
  const newUserForm = parentEl.querySelector('#new-user-form');
  const newUserDiv = parentEl.querySelector('#new-user');

  return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

export const renderStatus = (statusDiv, statusInfoObj) => {
 const statusHeading = document.createElement('h2');
 statusHeading.setAttribute('id', 'status-heading');
 statusHeading.textContent = `Info on - ${statusInfoObj.url}`;

 const statusCode = document.createElement('p');
 statusCode.setAttribute('id', 'status-code');
 
 if (statusInfoObj.ok) {
   statusCode.textContent = `Status code: ${statusInfoObj.status}, OK!`
 } else {
    statusCode.textContent = `Status code: ${statusInfoObj.status}, FAIL!`
   }
 statusDiv.append(statusCode, statusHeading);
};

export const renderUsers = (usersUl, users) => {
  usersUl.innerHTML = '';
  // clears space inside usersUl
  users.forEach((user) => {
    const li = document.createElement('li');
    // li.setAttribute("class", "user-card");
    li.classList.add("user-card");
    const button = document.createElement('button');
    // button.setAttribute("data-user-id", user.id);
    button.dataset.userId = user.id;
    button.textContent = `Load ${user.username}'s posts`;
    li.append(button);
    usersUl.append(li);
  });
};

export const renderPosts = (postsUl, posts) => {
  postsUl.innerHTML = '';
  // clears space inside usersUl
  posts.forEach((postElement) => {
    const h2 = document.createElement('h2');
    h2.textContent = postElement.title;
    const p = document.createElement('p');
    p.textContent = postElement.body;
    const li = document.createElement('li');  

    li.append(h2, p);

    postsUl.append(li);
  });
}

export const renderNewUser = (newUserDiv, newUserInfo) => {
  newUserDiv.innerHTML = '';
 // clears space inside newUserDiv
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  h2.textContent = newUserInfo.username;
  p.textContent = newUserInfo.email;
  newUserDiv.append(h2, p);
}