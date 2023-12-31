import axios from "axios";
import { config } from "../configs/api.config";

export async function getOrders(data) {
  let url;
  if (data.queryKey[3]) {
    url =
      config.endpoints.host + `/orders?email=${data.queryKey[3]}&populate=user`;
  } else {
    switch (data.queryKey[1]) {
      case "single":
        url =
          config.endpoints.host +
          `/orders?limit=-1&order_status=0&populate=user`;
        break;
      case "pending":
        url =
          config.endpoints.host +
          `/orders?limit=-1&order_status=0&populate=user`;
        break;
      case "approved":
        url =
          config.endpoints.host +
          `/orders?limit=-1&order_status=1&populate=user`;
        break;
      case "cancled":
        url =
          config.endpoints.host +
          `/orders?limit=-1&order_status=2&populate=user`;
        break;
      case "deliverd":
        url =
          config.endpoints.host +
          `/orders?limit=-1&order_status=3&populate=user`;
        break;
      case "search":
        url =
          config.endpoints.host +
          `/orders?limit=-1&search=${data.queryKey[3]}&populate=user`;
        break;
      default:
        url =
          config.endpoints.host +
          `/orders?limit=10&page=${data.queryKey[1]}&populate=user`;
        break;
    }
  }

  const headers = {
    "Cache-Control": "no-cache",
    Authorization: `Bearer ${data.queryKey[2]}`,
  };

  try {
    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}
export async function updateOrder({ data, token, id }) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const response = await axios.patch(
    config.endpoints.host + `/orders/${id}`,
    data,
    {
      headers,
    }
  );

  if (response.status !== 200) {
    throw new Error("Error updating order");
  }
  return response.data;
}
