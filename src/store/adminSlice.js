editUser: async (userId, formData) => {
  const usersBeforeSubmit = get().allUsers;
  const newUsersList = get().allUsers.filter((user) => user._id !== userId);
  newUsersList.push(formData);
  try {
    const data = await apiRequest(
      `http://localhost:8000/users/${userId}/edit`,
      "PUT",
      { formData }
    );
    set((state) => ({ allUsers: newUsersList }));
  } catch (err) {
    set((state) => ({ allUsers: usersBeforeSubmit }));
    throw new Error(err.message);
  }
}

findUser: (userId) => {
  const userToEdit = get().allUsers.find((user) => {
    return user._id === userId;
  });
  return userToEdit;
}