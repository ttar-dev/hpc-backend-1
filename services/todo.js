let lists = [];

module.exports = {
  assignTodoList: ({ desc }) => {
    try {
      const newList = { id: lists?.length + 1, desc };
      lists.push(newList);
    } catch (error) {
      throw error;
    }
  },
};
