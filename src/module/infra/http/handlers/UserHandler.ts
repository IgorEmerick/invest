import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserBodyType } from '../schemas/bodies/createUserBodySchema';
import { UserService } from '../../../services/UserService';

interface ICreateRequest extends FastifyRequest {
  body: CreateUserBodyType;
}

export class UserHandler {
  constructor(private userService: UserService) {}

  async create(request: ICreateRequest, reply: FastifyReply): Promise<void> {
    const user = await this.userService.create(request.body);

    delete user.password;

    reply.status(201).send(user);
  }
}
