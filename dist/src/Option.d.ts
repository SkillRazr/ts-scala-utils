export declare abstract class Option<T> {
    abstract isDefined(): boolean;
    abstract getOrElse(defaultValue: T): T;
    abstract map<U>(f: (value: T) => U): Option<U>;
    abstract flatMap<U>(f: (value: T) => Option<U>): Option<U>;
    abstract filter(f: (value: T) => boolean): Option<T>;
    static some<T>(value: T): Option<T>;
    static none<T>(): Option<T>;
    abstract getOrThrow(error: Error): T;
    abstract fold<U>(ifEmpty: () => U, f: (value: T) => U): U;
    abstract forEach(f: (value: T) => void): void;
    abstract orElse(alternative: Option<T>): Option<T>;
    abstract exists(f: (value: T) => boolean): boolean;
    abstract contains(value: T): boolean;
    abstract toNullable(): T | null;
    abstract toArray(): T[];
    abstract get(): T | null;
}
