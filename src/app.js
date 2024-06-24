import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

export default function app(appDiv) {
  const { statusDiv, usersUl, postsUl, newUserForm, newUserDiv } = setupPageBasics(appDiv);
  checkResponseStatus()
   .then((statusInfoObj) =>
    renderStatus(statusDiv, statusInfoObj)
  )
  getUsers()
   .then((users) =>
    renderUsers(usersUl, users)
   );
  usersUl.addEventListener('click', (event) => {
   if (event.target.matches("button")) {
    const currentUserId = event.target.dataset.userId;
    getUserPosts(currentUserId)
     .then((posts) => 
       renderPosts(postsUl, posts))
   }
  })
  
  newUserForm.addEventListener('submit', (event) => {
   event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    createNewUser(formObject)
      .then((newUserInfo) =>
        renderNewUser(newUserDiv, newUserInfo)
    )
    event.target.reset;
  })
};