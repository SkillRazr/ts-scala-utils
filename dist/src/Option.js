"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
class Option {
    // Static methods to create instances
    static some(value) {
        return new Some(value);
    }
    static none() {
        return new None();
    }
}
exports.Option = Option;
// Internal implementation of Some and None
class Some extends Option {
    constructor(value) {
        super();
        this.value = value;
    }
    isDefined() {
        return true;
    }
    getOrElse(defaultValue) {
        return this.value;
    }
    map(f) {
        return new Some(f(this.value));
    }
    flatMap(f) {
        return f(this.value);
    }
    filter(f) {
        return f(this.value) ? this : Option.none();
    }
    get() {
        return this.value;
    }
    getOrThrow(error) {
        return this.value;
    }
    fold(ifEmpty, f) {
        return f(this.value);
    }
    forEach(f) {
        f(this.value);
    }
    orElse(alternative) {
        return this;
    }
    exists(f) {
        return f(this.value);
    }
    contains(value) {
        return this.value === value;
    }
    toNullable() {
        return this.value;
    }
    toArray() {
        return [this.value];
    }
}
class None extends Option {
    isDefined() {
        return false;
    }
    getOrElse(defaultValue) {
        return defaultValue;
    }
    map(f) {
        return Option.none();
    }
    flatMap(f) {
        return Option.none();
    }
    filter(f) {
        return Option.none();
    }
    getOrThrow(error) {
        throw error;
    }
    fold(ifEmpty, f) {
        return ifEmpty();
    }
    forEach(f) {
        // 
    }
    orElse(alternative) {
        return alternative;
    }
    exists(f) {
        return false;
    }
    contains(value) {
        return false;
    }
    toNullable() {
        return null;
    }
    toArray() {
        return [];
    }
    get() {
        throw new Error('No value present');
    }
}
