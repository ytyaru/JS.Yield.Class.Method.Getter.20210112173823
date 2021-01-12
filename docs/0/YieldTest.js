// yield動作確認。連番を取得する。start〜length の範囲にある整数値をiterableで返す。
class YieldTest {
    #start = 0;
    #length = 0;
    constructor(start=0, length=10) {
        this.#start = start;
        this.#length = length;
    }
    get Start() { return this.#start; }
    get Length() { return this.#length; }
    set Start(value) { if (-1 < value) { this.#start = value; } }
    set Length(value) { if (-1 < value) { this.#length = value; } }
    /* syntax error
    get* Numbers() {
        yield this.#GetNumbers(this.#start, this.#length);
    }
    */
    get Numbers() { return this.#GetNumbers(this.#start, this.#length); }
    * GetNumbers(start=0, length=10) {
        yield* this.#GetNumbers(start, length);
    }
    * #GetNumbers(start=0, length=10) {
        if (start < 0) { return null; }
        if (length < 1) { return null; }
        for (let i=start; i<start+length; i++) {
            yield i;
        }
    }
    /*
    * GetNumbersTest(start=0, length=10) {
        if (start < 0) { return null; }
        if (length < 1) { return null; }
        for (let i=start; i<start+length; i++) {
            yield i;
        }
    }
    */
}

