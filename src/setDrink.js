const setDrink = section => {
  section.addEventListener('click', e => {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
