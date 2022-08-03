const explorer = {
  name: "Root",
  isGroup: false,
  items: [
    {
      name: "Op",
      id: 1,
      isGroup: false,
      items: [
        {
          name: "POST" + "   api/op/:op/:id",
          isGroup: false,
          items: [],
        },
        {
          name: "GET" + " api/op/:op/:id",
          isGroup: false,
          items: [],
        },
      ],
    },
    {
      name: "item",
      isGroup: false,
      items: [
        {
          name: "POST" + "   api/item/{{table}}",
          isGroup: false,
          items: [
            {
              name: "/api/item/term root",
              isGroup: true,
              id: 1,
              parentId: 0,
              items: [],
            },
            {
              name: "/api/item/term tg1",
              isGroup: true,
              id: 2,
              parentId: 1,
              items: [],
            },
            {
              name: "/api/item/term tg2",
              isGroup: true,
              id: 3,
              parentId: 1,
              items: [],
            },
            {
              name: "/api/item/term tg1-1",
              isGroup: true,
              id: 4,
              parentId: 2,
              items: [],
            },
            {
              name: "/api/item/term tg1-2",
              isGroup: true,
              id: 5,
              parentId: 2,
              items: [],
            },
            {
              name: "/api/item/term tg2-1",
              isGroup: true,
              id: 6,
              parentId: 3,
              items: [],
            },
            {
              name: "/api/item/term tg2-2",
              isGroup: true,
              id: 7,
              parentId: 3,
              items: [],
            },
            {
              name: "/api/item/term t1.1",
              isGroup: false,
              id: 8,
              parentId: 1,
              Data: "t1.1",
              items: [],
            },
            {
              name: "/api/item/term t1.2",
              isGroup: false,
              id: 9,
              parentId: 1,
              Data: "t1.2",
              items: [],
            },
            {
              name: "/api/item/term t2.1",
              isGroup: false,
              id: 10,
              parentId: 2,
              Data: "t2.1",
              items: [],
            },
            {
              name: "/api/item/term t1-1.1",
              isGroup: false,
              id: 11,
              parentId: 4,
              Data: "t1-1.1",
              items: [],
            },
            {
              name: "/api/item/term t1-2.1",
              isGroup: false,
              id: 12,
              parentId: 5,
              Data: "t1-2.1",
              items: [],
            },
            {
              name: "/api/item/term t2-1.1",
              isGroup: false,
              id: 13,
              parentId: 6,
              Data: "t2-1.1",
              items: [],
            },
            {
              name: "/api/item/term t2-2.1",
              isGroup: false,
              id: 14,
              parentId: 7,
              Data: "t2-2.1",
              items: [],
            },
          ],
        },
      ],
    },
    {
      name: "items",
      isGroup: false,
      items: [
        {
          name: "GET" + "   api/items/{{table}}",
          isGroup: false,
          items: [
            {
              name: "/api/items/term ",
              isGroup: false,
              items: [],
            },
          ],
        },
      ],
    },
  ],
};

export default explorer;