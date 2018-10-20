
export interface IGamePlayer {
    login(user: String, password: string): void;
    killBoss(): void;
    upgrade(): void;
}

// 玩家
export class GamePlayer implements IGamePlayer {
    private name: String = '';

    constructor(name) {
        this.name = name;
    }

    public login(user, password) {
        console.log(`登录名为${user}的用户: ${this.name} 登录成功.`);
    }

    public killBoss() {
        console.log(`${this.name} 在打怪...`);
    }
    public upgrade() {
        console.log(`${this.name} 升级了...`);
    }
}

// 代理
export class GamePlayerProxy implements IGamePlayer {
    private gamePlayer: IGamePlayer = null;

    constructor(_player: IGamePlayer) {
        this.gamePlayer = _player;
    }

    public killBoss() {
        this.gamePlayer.killBoss();
    }
    public upgrade() {
        this.gamePlayer.upgrade();
    }
    public login(user, password) {
        this.gamePlayer.login(user, password);
    }
}


// 场景类
class Client {
    public static main() {

        const player = new GamePlayer('张三');
        const proxy = new GamePlayerProxy(player);

        proxy.login('zhangsan', 'password');
        proxy.killBoss();
        proxy.upgrade();
    }
}

// 执行代码
Client.main();

/**
 * Output:
 * 
登录名为zhangsan的用户: 张三 登录成功.
张三 在打怪...
张三 升级了...
 */