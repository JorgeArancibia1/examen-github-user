// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/getUser";
import { User } from "../interfaces/user";

const getUserInfo = async(searchName: string = "JorgeArancibia1"): Promise<User> => {

  const { data } =  await githubApi.get<User>(`users/${searchName}`)
  console.log(data)

  return data;
}

export const useUser = (searchName: string) => {

  const userQuery = useQuery({
    queryKey: ['user', searchName],
    queryFn: () => getUserInfo(searchName)
  })

  return {
    user: userQuery.data
  }

}