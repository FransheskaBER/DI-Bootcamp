class Result<T> {
    public readonly value: T | null;
    public readonly error: string | null;

    // Private constructor so users must go through ok() / fail() and not new Result..
    private constructor(value: T | null, error: string | null) {
        this.value = value;
        this.error = error;
    }

    static ok<T>(value: T): Result<T> {
        return new Result<T>(value, null);
    }
    static fail<T>(error: string): Result<T> {
        return new Result<T>(null, error);
    }

    isSuccess(): boolean {
        return this.error === null;
    }

    unwrap(): T {
        if (this.error !== null) {
            throw new Error(this.error);
        }
        return this.value as T;
    }
}
const success = Result.ok<number>(42);
console.log(success.isSuccess()); // true
console.log(success.unwrap()); // 42

const failure = Result.fail("Something went wrong");
console.log(failure.isSuccess()); // false
failure.unwrap(); // should throw
