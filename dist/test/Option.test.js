"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Option_1 = require("../src/Option");
describe("Option", () => {
    describe("Option.isDefined", () => {
        it("should return Some when value is defined", () => {
            const option = Option_1.Option.some(10);
            expect(option.isDefined()).toBe(true);
        });
        it("should return None when no value is defined", () => {
            const option = Option_1.Option.none();
            expect(option.isDefined()).toBe(false);
        });
    });
    describe("Option.get", () => {
        it("should return the value for Some", () => {
            const option = Option_1.Option.some(42);
            expect(option.get()).toBe(42);
        });
        it("should throw an error for None", () => {
            const option = Option_1.Option.none();
            expect(() => option.get()).toThrow("No value present");
        });
    });
    describe("Option.getOrElse", () => {
        it("should return the value for Some", () => {
            const option = Option_1.Option.some(10);
            expect(option.getOrElse(0)).toBe(10);
        });
        it("should return the default value for None", () => {
            const option = Option_1.Option.none();
            expect(option.getOrElse(-1)).toBe(-1);
        });
    });
    describe("Option.getOrThrow", () => {
        it("should return the value for Some", () => {
            const option = Option_1.Option.some(42);
            expect(option.getOrThrow(new Error("No value"))).toBe(42);
        });
        it("should throw an error for None", () => {
            const option = Option_1.Option.none();
            expect(() => option.getOrThrow(new Error("No value"))).toThrow("No value");
        });
    });
    describe("Option.fold", () => {
        it("should apply the function to the value in Some", () => {
            const option = Option_1.Option.some(10);
            const result = option.fold(() => 0, (x) => x * 2);
            expect(result).toBe(20);
        });
        it("should apply the ifEmpty function in None", () => {
            const option = Option_1.Option.none();
            const result = option.fold(() => 0, (x) => x * 2);
            expect(result).toBe(0);
        });
    });
    describe("Option.forEach", () => {
        it("should apply the function to the value in Some", () => {
            const option = Option_1.Option.some(10);
            let sideEffect = 0;
            option.forEach((x) => {
                sideEffect = x * 2;
            });
            expect(sideEffect).toBe(20);
        });
        it("should not apply the function in None", () => {
            const option = Option_1.Option.none();
            let sideEffect = 0;
            option.forEach((x) => {
                sideEffect = x * 2;
            });
            expect(sideEffect).toBe(0);
        });
    });
    describe("Option.orElse", () => {
        it("should return the current Some if defined", () => {
            const option = Option_1.Option.some(10);
            const alternative = Option_1.Option.some(20);
            const result = option.orElse(alternative);
            expect(result.getOrElse(0)).toBe(10);
        });
        it("should return the alternative if None", () => {
            const option = Option_1.Option.none();
            const alternative = Option_1.Option.some(20);
            const result = option.orElse(alternative);
            expect(result.getOrElse(0)).toBe(20);
        });
    });
    describe("Option.exists", () => {
        it("should return true if the predicate holds for Some", () => {
            const option = Option_1.Option.some(42);
            expect(option.exists((x) => x > 40)).toBe(true);
        });
        it("should return false if the predicate does not hold for Some", () => {
            const option = Option_1.Option.some(42);
            expect(option.exists((x) => x > 50)).toBe(false);
        });
        it("should return false for None", () => {
            const option = Option_1.Option.none();
            expect(option.exists((x) => x > 40)).toBe(false);
        });
    });
    describe("Option.contains", () => {
        it("should return true if the value is contained in Some", () => {
            const option = Option_1.Option.some(42);
            expect(option.contains(42)).toBe(true);
        });
        it("should return false if the value is not contained in Some", () => {
            const option = Option_1.Option.some(42);
            expect(option.contains(10)).toBe(false);
        });
        it("should return false for None", () => {
            const option = Option_1.Option.none();
            expect(option.contains(42)).toBe(false);
        });
    });
    describe("Option.toNullable", () => {
        it("should return the value in Some", () => {
            const option = Option_1.Option.some(42);
            expect(option.toNullable()).toBe(42);
        });
        it("should return null for None", () => {
            const option = Option_1.Option.none();
            expect(option.toNullable()).toBeNull();
        });
    });
    describe("Option.toArray", () => {
        it("should return an array with the value for Some", () => {
            const option = Option_1.Option.some(42);
            expect(option.toArray()).toEqual([42]);
        });
        it("should return an empty array for None", () => {
            const option = Option_1.Option.none();
            expect(option.toArray()).toEqual([]);
        });
    });
    describe("mapping", () => {
        it("should map over a Some value", () => {
            const option = Option_1.Option.some(10).map((x) => x * 2);
            expect(option.getOrElse(0)).toBe(20);
        });
        it("should flatMap over a Some value", () => {
            const option = Option_1.Option.some(10).flatMap((x) => Option_1.Option.some(x * 2));
            expect(option.getOrElse(0)).toBe(20);
        });
        it("should filter Some value", () => {
            const option = Option_1.Option.some(10).filter((x) => x > 5);
            expect(option.isDefined()).toBe(true);
            expect(option.getOrElse(0)).toBe(10);
            const filteredOption = Option_1.Option.some(10).filter((x) => x < 5);
            expect(filteredOption.isDefined()).toBe(false);
            expect(filteredOption.getOrElse(0)).toBe(0);
        });
    });
});
