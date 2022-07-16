export const SimpleCodeOne = `class Counter {
    var count = 0
    func increment() {
        count += 1
    }
    func increment(by amount: Int) {
        count += amount
    }
    func reset() {
        count = 0
    }
}`;
export const SimpleCodeTwo = `class Counter {
    var count = 0
    func increment() {
        count += 1
    }
    func decrement() {
        count -= 1
    }
    func increment(by amount: Int) {
        count += amount
    }
    func decrement(by amount: Int) {
        count -= amount
    }
    func reset() {
        count = 0
    }
}`;
export const SimpleCodeThree = `class Counter {
    var count = 10
    func increment() {
        count += 1
    }
    func decrement() {
        count -= 1
    }
    func increment(by amount: Int) {
    }
    func decrement(by amount: Int) {
    }
    func reset() {
        count = 10
    }
}`;