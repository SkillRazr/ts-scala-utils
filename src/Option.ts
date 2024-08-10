export abstract class Option<T> {
    abstract isDefined(): boolean;
    abstract getOrElse(defaultValue: T): T;
    abstract map<U>(f: (value: T) => U): Option<U>;
    abstract flatMap<U>(f: (value: T) => Option<U>): Option<U>;
    abstract filter(f: (value: T) => boolean): Option<T>;

    // Static methods to create instances
    static some<T>(value: T): Option<T> {
        return new Some(value);
    }

    static none<T>(): Option<T> {
        return new None<T>();
    }

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

// Internal implementation of Some and None

class Some<T> extends Option<T> {
    private readonly value: T;

    constructor(value: T) {
        super();
        this.value = value;
    }

    isDefined(): boolean {
        return true;
    }

    getOrElse(defaultValue: T): T {
        return this.value;
    }

    map<U>(f: (value: T) => U): Option<U> {
        return new Some(f(this.value));
    }

    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
        return f(this.value);
    }

    filter(f: (value: T) => boolean): Option<T> {
        return f(this.value) ? this : Option.none();
    }

    get(): T {
        return this.value;
    }

    getOrThrow(error: Error): T {
        return this.value;
    }

    fold<X>(ifEmpty: () => X, f: (value: T) => X): X {
        return f(this.value);
    }

    forEach(f: (value: T) => void): void {
        f(this.value)
    }

    orElse(alternative: Option<T>): Option<T> {
        return this;
    }

    exists(f: (value: T) => boolean): boolean {
        return f(this.value)
    }

    contains(value: T): boolean {
        return this.value === value;
    }

    toNullable(): T | null {
        return this.value;
    }

    toArray (): T[] {
        return [this.value];
    }
}

class None<T> extends Option<T> {
    isDefined(): boolean {
        return false;
    }

    getOrElse(defaultValue: T): T {
        return defaultValue;
    }

    map<U>(f: (value: T) => U): Option<U> {
        return Option.none();
    }

    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
        return Option.none();
    }

    filter(f: (value: T) => boolean): Option<T> {
        return Option.none();
    }

    getOrThrow(error: Error): T {
        throw error;
    }

    fold<U>(ifEmpty: () => U, f: (value: T) => U): U {
        return ifEmpty();
    }

    forEach(f: (value: T) => void): void {
       // 
    }

    orElse(alternative: Option<T>): Option<T> {
        return alternative;
    }

    exists(f: (value: T) => boolean): boolean {
        return false;
    }

    contains(value: T): boolean {
        return false;
    }

    toNullable(): T | null {
        return null;
    }

    toArray(): T[] {
        return [];
    }

    get() : T {
        throw new Error('No value present');
    }   
}