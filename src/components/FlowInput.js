import {
  actions,
  conditions,
  events,
  user,
  merchant,
  orders,
} from "./data/dropdown";
import Dropdown from "./Dropdown";

export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: <Dropdown selectData={user} title="User" /> },
    position: { x: 175, y: 25 },
  },
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <Dropdown selectData={events} title="events" /> },
    position: { x: 170, y: 100 },
  },
  {
    id: "3",
    // you can also pass a React component as a label
    data: {
      label: <Dropdown selectData={merchant} title="Merchant" />,
    },
    position: { x: 0, y: 100 },
  },
  {
    id: "4",
    // you can also pass a React component as a label
    data: {
      label: (
        <Dropdown
          selectData={["TAG_USER", "USER_ABANDONS_CX"]}
          title="USER_SUBSCRIBES"
        />
      ),
    },
    position: { x: 0, y: 175 },
  },
  {
    id: "5",
    // you can also pass a React component as a label
    data: {
      label: "SEND_SMS",
    },
    position: { x: 0, y: 250 },
  },
  {
    id: "6",
    // you can also pass a React component as a label
    data: {
      label: "SEND_FLOW",
    },
    position: { x: 0, y: 325 },
  },
  {
    id: "7",
    // you can also pass a React component as a label
    data: {
      label: "SEND_ABANDONED_CX_FLOW",
    },
    position: { x: -175, y: 250 },
  },
  {
    id: "8",
    // you can also pass a React component as a label
    data: {
      label: (
        <Dropdown
          selectData={["USER_ORDERS", "USER_ABANDONS_CX"]}
          title="USER_ORDERED"
        />
      ),
    },
    position: { x: 340, y: 100 },
  },
  {
    id: "9",
    // you can also pass a React component as a label
    data: {
      label: <Dropdown selectData={orders} title="USER_ORDERS" />,
    },
    position: { x: 340, y: 175 },
  },
  {
    id: "10",
    // you can also pass a React component as a label
    data: {
      label: "ORDER_COMPLETED",
    },
    position: { x: 340, y: 250 },
  },
  {
    id: "11",
    // you can also pass a React component as a label
    data: {
      label: "SEND_SMS",
    },
    position: { x: 340, y: 325 },
  },
  {
    id: "12",
    // you can also pass a React component as a label
    data: {
      label: "SEND_FLOW",
    },
    position: { x: 340, y: 400 },
  },
  {
    id: "13",
    // you can also pass a React component as a label
    data: {
      label: "SEND_ABANDONED_CX_FLOW",
    },
    position: { x: 510, y: 110 },
  },
];
export const initialEdges = (animateTo) => {
  return [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animate: true,
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      animate: animateTo === "subscribe" ? true : false,
    },
    {
      id: "e2-8",
      source: "2",
      target: "8",
      animate: animateTo === "order" ? true : false,
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      animated: animateTo === "subscribe" ? true : false,
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      animated: animateTo === "tag" ? true : false,
    },
    {
      id: "e4-7",
      source: "4",
      target: "7",
      animated: animateTo === "tagAbandon" ? true : false,
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      animated: animateTo === "tag" ? true : false,
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      animated: animateTo === "orderConfirm" ? true : false,
    },
    {
      id: "e9-10",
      source: "9",
      target: "10",
      animated: animateTo === "orderConfirm" ? true : false,
    },
    {
      id: "e10-11",
      source: "10",
      target: "11",
      animated: animateTo === "orderConfirm" ? true : false,
    },
    {
      id: "e11-12",
      source: "11",
      target: "12",
      animated: animateTo === "orderConfirm" ? true : false,
    },
    {
      id: "e8-9",
      source: "8",
      target: "13",
      animated: animateTo === "abandonOrder" ? true : false,
    },
    // { id: "e2-3", source: "3", target: "2", animated: true },
  ];
};
