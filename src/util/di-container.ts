
import { Container } from 'inversify';
import { DBService } from '../db/dbService';
import { MongoDBService } from '../db/mongoDBService';
import { UserService } from '../service/services';

export const DIContainer = new Container();
DIContainer.bind<DBService>('MongoDBService').to(MongoDBService);
DIContainer.bind<UserService>(UserService).toSelf();
