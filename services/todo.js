let lists = [];

module.exports = {
  assignTodoList: ({ desc }) => {
    try {
      const newList = { id: lists?.length + 1, desc };
      lists.push(newList);
      return lists;
    } catch (error) {
      throw error;
    }
  },
  getTodos: () => {
    return lists;
  },
  getTodoById: (id) => {
    try {
      const list = lists.find((list) => list.id === id);
      if (!list) throw { statusCode: 404, message: "Not found." };
      return list;
    } catch (error) {
      throw error;
    }
  },
  updateTodoById: (id, { desc }) => {
    try {
      const list = lists.find((list) => list.id === id);
      if (!list) throw { statusCode: 404, message: "Not found." };

      list.desc = desc;
      return list;
    } catch (error) {
      throw error;
    }
  },
};
