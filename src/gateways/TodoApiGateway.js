import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001/todos/",
});

// TODO - add error handling
function todoGateway() {
  const getAll = async () => {
    const resp = await client.get("");
    return resp.data;
  };

  // TODO - add error handling
  const saveNew = async (newItem) => {
    const resp = await client.post("", newItem);
    return resp.data;
  };

  const save = async (item) => {
    const resp = await client.put(`${item.id}`, item);
    return resp.data;
  };

  const remove = async (item) => {
    const resp = await client.delete(`${item.id}`);
    if (resp.status !== 200) {
      throw new Error("unable to remove the item");
    }
  };

  return {
    getAll,
    saveNew,
    save,
    remove,
  };
}

export default todoGateway();
