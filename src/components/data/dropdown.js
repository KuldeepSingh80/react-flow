export const conditions = [
  "USER_ORDERS",
  "ORDER_COMPLETED",
  "USER_ABANDONS_CX",
];

export const events = ["USER_SUBSCRIBES", "USER_ORDERED"];

export const actions = [
  "SEND_SMS",
  "TAG_USER",
  "SEND_ABANDONED_CX_FLOW",
  "SEND_FLOW",
];
export const orders = [
  "order_id",
  "receipt_url",
  "order_created_at",
  "order_type",
];

export const merchant = [
  "merchant_name",
  "merchant_id",
  "facebook_page_id",
  "location_id",
];

export const user = ["user_name", "phone_number", "last_seen_at"];
