const initialState = {
  perusers: [
    { id: 0, idAcc: 1, name: "Mama" },
    { id: 1, idAcc: 2, name: "Mihail" },
    { id: 2, idAcc: 3, name: "Yuliya" },
    { id: 3, idAcc: 4, name: "Ekaterina" },
  ],
};

const reducerSidebar = (sidebar = initialState, action) => {
  return sidebar;
};

export default reducerSidebar;
