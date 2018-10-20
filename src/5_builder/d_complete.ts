import { Director } from "./base/director";



// 场景类
// 假如要生产 A奔驰 10, B奔驰5, C宝马5, D宝马10 
class Client {
    public static main() {
        const director = new Director();
        for (let i = 0; i < 10; i++) {
            director.getABenzModel().run();
        }
        for (let i = 0; i < 5; i++) {
            director.getBBenzModel().run();
        }
        for (let i = 0; i < 5; i++) {
            director.getCBMWModel().run();
        }
        for (let i = 0; i < 10; i++) {
            director.getDBMWModel().run();
        }
    }
}
// 执行代码
Client.main();