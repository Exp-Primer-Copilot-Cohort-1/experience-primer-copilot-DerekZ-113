function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    path: 'skills',
    fields: {
      name: {
        type: 'string',
        required: true,
      },
      level: {
        type: 'number',
        required: true,
      },
    },
  };
}