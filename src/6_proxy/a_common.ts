
// 抽象主题类
export interface Subject {
    /**
     * request
     */
    request();
}

// 真实主题类
export class RealSubject implements Subject {
    public request(): void {
        console.log('真实主题->request...');
    }
}

export class Proxy implements Subject {
    private subject: Subject;

    // 
    constructor(_subject: Subject) {
        this.subject = _subject;
    }

    public request(): void {
        this.before();
        this.subject.request();
        this.after();
    }

    private before(): void {
        console.log('Proxy->before...');
    }
    private after(): void {
        console.log('Proxy->before...');
    }
}


class Client {
    public static main() {
        const sub = new RealSubject();
        const proxy = new Proxy(sub);
        proxy.request();
    }
}

// 执行代码
Client.main();

/**
 * Output:
 * 
Proxy->before...
真实主题->request...
Proxy->before...
 */