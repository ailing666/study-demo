interface IStorage {
  save(key: string, value: any): void;
  read(key: string): any;
}
class UserInfo {
  public name: string;
  constructor(name: string, public storage: IStorage) {
    this.name = name;
  }
  save() {
    this.storage.save('userInfo', JSON.stringify(this));
  }
  read() {
    return this.storage.read('userInfo');
  }
}

// 当想把信息存到localStorage时
class LocalStorage implements IStorage {
  save(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
  read(key: string) {
    return localStorage.getItem(key);
  }
}
let local = new LocalStorage();
let userInfo = new UserInfo('loveZero', local);
console.log(userInfo.name);


// 当想把信息存到mysql时，只需要
class MysqlStorage implements IStorage {
  save(key: string, value: any): void {
    //mysql.setItem(key, value);
  }
  read(key: string) {
    //return mysql.getItem(key);
  }
}
let mysqlStorage = new MysqlStorage();
let userInfo2 = new UserInfo('loveZero', mysqlStorage);
console.log(userInfo2.name);


