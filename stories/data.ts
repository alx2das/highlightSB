export const prevValue = `import UIKit

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
export const nextValue = `import UIKit

class ReminderListDataSource: NSObject {
    typealias ReminderCompletedAction = (Int) -> Void
    typealias ReminderDeletedAction = () -> Void

    enum Filter: Int {
        case today
        case future
        case all
        
        func shouldInclude(date: Date) -> Bool {
            let isInToday = Locale.current.calendar.isDateInToday(date)
            switch self {
            case .today:
                return isInToday
           	case .yesterday:
                return isInYesterday
            case .future:
                return (date > Date()) && !isInToday
            case .all:
                return false
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

export const query_sections = {
	lecture_sections: [
		{
			id: 1,
			title: "Load a Specific Reminder",
			description:
				"Today represents reminders using its internal Reminder model. Before writing reminder data to the event store, you need to retrieve the corresponding EKReminder object. In this section, write a new method that retrieves an EKReminder object for a given identifier.",
			image_video_url: "https://i.ya-webdesign.com/images/cellphone-png-2.png",
			lecture_steps: [
				{
					id: 1,
					name: "Название шага 1. Секция 1.",
					description: "Add a method named readReminder to the bottom of the extension in ReminderListDataSource.swift. The method accepts a string and a completion handler of type (EKReminder?) -> Void.",
					comment: "Start by adding a method to fetch an individual reminder from the event store.",
					code_title: "НазваниеФайла_1.swift",
					code: prevValue,
					position: 1,
					image_video_url: null
				},
				{
					id: 2,
					name: "Название шага 2. Секция 1.",
					description: "Описание шага 2. Секция 1.",
					comment: "Коментарий",
					code_title: "НазваниеФайла_1.swift",
					code: nextValue,
					position: 1,
					image_video_url: null,
				},
				{
					id: 3,
					name: "Название шага 1. Секция 2.",
					description: "Описание шага 1. Секция 2.",
					comment: "Коментарий",
					code_title: "НазваниеФайла_2.swift",
					code: prevValue,
					position: 1,
					image_video_url:
						"https://www.kindpng.com/picc/m/116-1160843_png-file-svg-download-icon-telephone-png-transparent.png",
				},
				{
					id: 4,
					name: "Название шага 2. Секция 2.",
					description: "Описание шага 2. Секция 2.",
					comment: "Коментарий",
					code_title: "НазваниеФайла_2.swift",
					code: nextValue,
					position: 1,
					image_video_url:
						"https://www.kindpng.com/picc/m/116-1160843_png-file-svg-download-icon-telephone-png-transparent.png",
				},
			],
		}
	],
};
