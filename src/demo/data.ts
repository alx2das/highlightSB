const fileContentOne = `import UIKit

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

    var filteredReminders {
        return false;
    }

    var percentComplete: Double {
        guard filteredReminders.count > 0 else {
            return 1
        }
        let numComplete: Double = filteredReminders.reduce(0) { $0 + ($1.isComplete ? 1 : 0) }
        return numComplete / Double(filteredReminders.count)
    }
}`;
const fileContentTwo = `import UIKit

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
const fileContentThree = `import UIKit

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
        let numComplete_one: Double = filteredReminders.reduce(0) { $0 + ($1.isComplete ? 1 : 0) }
        let numComplete_two: Double = filteredReminders.reduce(0) { $0 + ($1.isComplete ? 1 : 0) }
        return numComplete / Double(filteredReminders.count)
    }
}`;

export default [
	{
		title: "Секция 1",
		subtitle: "Load a Specific Reminder",
		description:
			"Today represents reminders using its internal Reminder model. Before writing reminder data to the event store, you need to retrieve the corresponding EKReminder object. In this section, write a new method that retrieves an EKReminder object for a given identifier.",
		image: "example",
		steps: [
			{
				title: "Шаг 1",
				description: "Add a method named readReminder to the bottom of the extension in ReminderListDataSource.swift.",
				comment: "Start by adding a method to fetch an individual reminder from the event store.",
				code: {
					filename: "ReminderListDataSource.swift",
					image: " ",
					previewCode: fileContentOne,
					markers: [],
				},
			},
			{
				title: "Шаг 2",
				description:
					"Call the completion handler with nil and exit the method if the user hasn’t granted access to their reminders.",
				comment: "",
				code: {
					filename: "ReminderListDataSource.swift",
					previewCode: fileContentTwo,
				},
			},
		],
	},
	{
		title: "Секция 2",
		subtitle: "Load a Specific Reminder",
		description:
			"Today represents reminders using its internal Reminder model. Before writing reminder data to the event store, you need to retrieve the corresponding EKReminder object. In this section, write a new method that retrieves an EKReminder object for a given identifier.",
		image: "example",
		steps: [
			{
				title: "Шаг 1",
				description: "Add a method named readReminder to the bottom of the extension in ReminderListDataSource.swift.",
				comment: "Start by adding a method to fetch an individual reminder from the event store.",
				code: {
					filename: "ReminderListDataSource.swift",
					previewCode: fileContentThree,
					markers: [30, 31, 32],
				},
			},
			{
				title: "Шаг 2",
				description:
					"Call the completion handler with nil and exit the method if the user hasn’t granted access to their reminders.",
				comment: "",
				code: {
					filename: "ReminderListDataSource.swift",
					previewCode: fileContentThree,
					markers: [35, 36],
				},
			},
		],
	},
];
