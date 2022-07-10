import { ViewCode } from "../src";

const prevValue = `import UIKit

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
const nextValue = `import UIKit

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
    
    var generateMarkers {
        return 0;
    }

    var percentComplete: Double {
        guard filteredReminders.count > 0 else {
            return 1
        }
        let numComplete: Double = filteredReminders.reduce(0) { $0 + ($1.isComplete ? 1 : 0) }
        return numComplete / Double(filteredReminders.count)
    }
}`;

const Template = (args) => ({});
const PrimaryViewCode = Template.bind({});

PrimaryViewCode.args = {};

export const Primary = {
	args: {
		prevValue: prevValue,
		value: nextValue,
		startNumber: 1,
	},
};

export default {
	title: "ViewCode",
	component: ViewCode,
};
