export default [
  {
    data:
    {
      attributes: {
        name: 'Jeff\'s Living Room',
        location: '123 First Ave. Nashville, TN 37215',
        costPerHour: '25',
        squareFeet: '500',
        amenities: [
          'A/C',
          'Bathrooms',
          'Snack Bar'
        ],
        availableEquipment: [
          'M32 Mixing Console',
          'JBL PA',
          'Gretsch Custom Drumkit'
        ],
        spaceHostName: 'Dave Matthews',
        hostEmail: 'dave@matthews.com',
        hostPhone: '123-1234',
        featured: 'yes',
        description: 'This is a description of the space',
        rules: 'these are the rules of the space...'
      },
      id: '1',
      relationships: {},
      type: 'users'
    },

    links: {
      self: '/register'
    },
  },
  {
    data:
    {
      attributes: {
        name: 'Test for description length 2',
        location: '123 First Ave. Nashville, TN 37215',
        costPerHour: '25',
        squareFeet: '500',
        amenities: [
          'A/C',
          'Bathrooms',
          'Snack Bar'
        ],
        availableEquipment: [
          'M32 Mixing Console',
          'JBL PA',
          'Gretsch Custom Drumkit'
        ],
        spaceHostName: 'Dave Matthews',
        hostEmail: 'dave@matthews.com',
        hostPhone: '123-1234',
        featured: 0,
        description: 'This is a description of the space',
        rules: 'these are the rules of the space...'
      },
      id: '2',
      relationships: {},
      type: 'users'
    },

    links: {
      self: '/register'
    },
  }
];
