export class UserModel {
  id: string;
  name: string;
  description: string;
  roles: string[];
  password: string;

  constructor(userDao: Corpix.Collections.UserDao ) {
    this.id = userDao.id;
    this.name = userDao.name;
    this.description = userDao.description;
    this.roles = userDao.roles;
    this.password = userDao.password;

  }
  
}
