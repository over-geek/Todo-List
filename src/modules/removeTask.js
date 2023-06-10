const removeTask = (index) => {
  const taskIndex = document.getElementById(index);
  taskIndex.remove();
};

export default removeTask;