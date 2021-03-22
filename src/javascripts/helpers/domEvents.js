const domEvents = () => {
  $('body').on('click', (e) => {
    console.warn(e.target.id);
  });
};

export default domEvents;
