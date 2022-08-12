import folderOpen from "../icons/folder-open.png";
import folderClose from "../icons/folder-close.png";
import Term from "../icons/item-terminal-active.svg";
// import Open from "../icons/action-add.svg";
// import Close from "../icons/action-minus.svg";

const explorer = {
  name: "Root",
  isGroup: false,
  icon: folderOpen,
  iconClose: folderClose,
  // open: Open,
  // close: Close,
  items: [
    {
      name: "Op",
      id: 1,
      isGroup: false,
      icon: folderOpen,
      iconClose: folderClose,
      items: [
        {
          name: "POST" + "   api/op/:op/:id",
          id: 1,
          isGroup: false,
          icon: Term,
          iconClose: Term,
          items: [],
        },
        {
          name: "GET" + " api/op/:op/:id",
          id: 2,
          isGroup: false,
          icon: Term,
          iconClose: Term,
          items: [],
        },
      ],
    },
    {
      name: "item",
      id: 2,
      isGroup: false,
      icon: folderOpen,
      iconClose: folderClose,
      items: [
        {
          name: "POST" + "   api/item/{{table}}",
          id: 1,
          isGroup: false,
          icon: Term,
          iconClose: Term,
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
      id: 3,
      isGroup: false,
      icon: folderOpen,
      iconClose: folderClose,
      items: [
        {
          name: "GET" + "   api/items/{{table}}",
          id: 1,
          isGroup: false,
          icon: Term,
          iconClose: Term,
          items: [
            {
              name: "/api/items/term ",
              id: 1,
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
