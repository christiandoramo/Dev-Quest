const Pokemon = {
  create(id, name, image, moves, abilities, type) {
    return {
      id,
      name,
      image,
      moves: [],
      abilities: [],
      type: [],
    };
  },
};

export default Pokemon;
