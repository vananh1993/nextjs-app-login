import List from "@/components/ListUsers";
import axios from 'axios'
const CreateUser = async () => {
    const response = await axios.get("https://dvinci.pro/the-gioi-an-dam-training/api/api/user/all");
    const {users} = response.data;
  return (
    <div className=" users">
      <List users={users ? users : []}/>
    </div>
  );
};

export default CreateUser;