import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    console.log(user_id);
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User not found");
    }

    if (!user.admin) {
      throw new Error("Permission denied");
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
