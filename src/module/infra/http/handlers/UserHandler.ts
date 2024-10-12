import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateUserBodyType } from '../schemas/bodies/createUserBodySchema';
import { UserService } from '../../../services/UserService';
import { AuthenticateUserBodyType } from '../schemas/bodies/authenticateUserBodySchema';

interface ICreateRequest extends FastifyRequest {
  body: CreateUserBodyType;
}

interface IAuthenticateRequest extends FastifyRequest {
  body: AuthenticateUserBodyType;
}

export class UserHandler {
  constructor(private userService: UserService) {}

  async create(request: ICreateRequest, reply: FastifyReply): Promise<void> {
    const user = await this.userService.create(request.body);

    delete user.password;

    reply.status(201).send(user);
  }

  async authenticate(
    { body }: IAuthenticateRequest,
    reply: FastifyReply,
  ): Promise<void> {
    const token = await this.userService.authenticate(body);

    reply.status(200).send({ token });
  }
}
