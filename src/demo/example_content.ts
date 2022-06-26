export const first =
`import UIKit

class ReminderListDataSource: NSObject {
    typealias ReminderCompletedAction = (Int) -> Void
    typealias ReminderDeletedAction = () -> Void
    typealias RemindersChangedAction = () -> Void

    enum Filter: Int {
        case today
        case future
        case all

        func shouldInclude(date: Date) -> Bool {
            let isInToday = Locale.current.calendar.isDateInToday(date)
            switch self {
                case .today:
                    return isInToday
                case .future:
                    return (date > Date()) && !isInToday
                case .all:
                    return true
            }
        }
    }

    var filter: Filter = .today

    var filteredReminders: [Reminder] {
        return reminders.filter { filter.shouldInclude(date: $0.dueDate) }.sorted { $0.dueDate < $1.dueDate }
    }

    var percentComplete: Double {
        guard filteredReminders.count > 0 else {
            return 1
        }
        let numComplete: Double = filteredReminders.reduce(0) { $0 + ($1.isComplete ? 1 : 0) }
        return numComplete / Double(filteredReminders.count)
    }
}`;

export const second =
`import UIKit

class ReminderListDataSource: NSObject {
    typealias ReminderCompletedAction = (Int) -> Void
    typealias ReminderDeletedAction = () -> Void
    typealias RemindersChangedAction = () -> Void

    enum Filter: Int {
        case today
        case future
        case all

        func shouldInclude(date: Date) -> Bool {
            let isInToday = Locale.current.calendar.isDateInToday(date)
            switch self {
                case .today:
                    return isInToday
                case .future:
                    return (date > Date()) && !isInToday
                case .all:
                    return true
            }
        }
    }

    var filter: Filter = .today

    var filteredReminders: [Reminder] {
        return reminders.filter { filter.shouldInclude(date: $0.dueDate) }.sorted { $0.dueDate < $1.dueDate }
    }

    // var percentComplete: Double {
    //     guard filteredReminders.count > 0 else {
    //         return 1
    //     }
    //     let numComplete: Double = filteredReminders.reduce(0) { $0 + ($1.isComplete ? 1 : 0) }
    //     return numComplete / Double(filteredReminders.count)
    // }
}`;