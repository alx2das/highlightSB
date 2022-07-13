import { SectionType } from "../src";


export const sections: SectionType[] = [
    {
        title: "Section 1",
        subtitle: "Respond to Change Notifications",
        description: (
            <>
                <p>
                    If a user changes their reminders inside another app,
                    you want those changes to appear inside Today automatically.
                </p>
                <p>
                    In this section, you’ll create a function that reads all reminders
                    from EventKit whenever the store changes. You’ll register for a
                    notification so that your app can listen for changes from EventKit
                    and call your function when it receives a change notification.
                </p>
            </>
        ),
        source: {
            node: null,
            type: "image",
            url: "https://docs-assets.developer.apple.com/published/e0c9d4d6c1bf137d56eb95b43b9c175f/UIK_130-010-intro.png",
        },
        steps: [
            {
                id: "2211",
                title: "Step 1",
                description: (
                    <p>
                        In ReminderListViewController+DataSource.swift,
                        create a function named reminderStoreChanged()
                        that has an empty Task.
                    </p>
                ),
                fileName: "ReminderListViewController+DataSource.swift",
                fileContent: `export default func sum(a, b) {\n\treturn a + b;\n}`
            },
            {
                id: "2212",
                title: "Step 2",
                description: (
                    <>
                        <p>Await the result of readAll(), and assign it to reminders.</p>
                        <hr/>
                        <p>
                            Recall that the await keyword indicates that your task suspends
                            until the asynchronous method readAll() completes.
                        </p>
                    </>
                ),
                fileName: "ReminderListViewController+DataSource.swift",
                fileContent: `export default func sum(a, b) {\n\treturn (a + b) * 2;\n}`
            },
            {
                id: "2213",
                title: "Step 3",
                description: (
                    <p>Update the snapshot.</p>
                ),
                comment: (
                    <p>
                        Next, you’ll create an action method to call when
                        you receive a change notification.
                    </p>
                ),
                fileName: "ReminderListViewController+DataSource.swift",
                fileContent: `export default func sum(a, b) {\n\treturn (a + b) * 2;\n}`
            },
            {
                id: "2214",
                title: "Step 4",
                description: (
                    <p>
                        In ReminderListViewController+Actions.swift,
                        add an @objc function named eventStoreChanged(_:)
                        that accepts an NSNotification and calls reminderStoreChanged().
                    </p>
                ),
                comment: (
                    <p>
                        To listen for a notification, you need to register
                        your class as an observer.
                    </p>
                ),
                fileName: "ReminderListViewController+DataSource.swift",
                fileContent: `export default func sum(a, b) {\n\treturn (a + b) * 2;\n}`
            },
            {
                id: "2215",
                title: "Step 5",
                description: (
                    <>
                        <p>
                            Open ReminderListViewController+DataSource.swift.
                            In the prepareReminderStore() function, register for the
                            .EKEventStoreChanged notification.
                        </p>
                        <hr/>
                        <p>
                            When the system receives this change notification,
                            it calls the corresponding action method on your view controller.
                        </p>
                    </>
                ),
                fileName: "ReminderListViewController+DataSource.swift",
                fileContent: `export default func sum(a, b) {\n\treturn (a + b) * 2;\n}`
            },
            {
                id: "2216",
                title: "Step 6",
                description: (
                    <>
                        <p>
                            Build and run the app to test that reminders you
                            create in Reminders also appear in Today without
                            needing to restart the apps.
                        </p>
                        <hr/>
                        <p>
                            You might need to change the list style to Future
                            or All to view some reminders.
                        </p>
                        <p>
                            <strong>Tip</strong><br/>
                            Use App Switcher to switch between apps in Simulator
                            without closing them. You can access App Switcher by
                            pressing Control-Shift-Command-H.
                        </p>
                    </>
                ),
                source: {
                    node: null,
                    type: "video",
                    url: "https://docs-assets.developer.apple.com/published/c7d95cb7ac3766b005ce7d8117c7e02e/UIK_130-010-060~dark@2x.mp4"
                }
            }
        ]
    },
    {
        title: "Section 1",
        subtitle: "Read Reminders Individually",
        description: (
            <>
                <p>
                    Today maintains a version of reminders in memory,
                    but it relies on EventKit to persist reminders.
                    Before you can persist changes to a reminder,
                    you must first find the corresponding record
                    in the EventKit calendar.
                </p>
                <p>
                    In this section, you’ll write a function that retrieves
                    a reminder from EventKit by using a specific identifier.
                </p>
            </>
        ),
        source: {
            node: null,
            type: "image",
            url: "https://docs-assets.developer.apple.com/published/fb759f190b45ee324ae4dd02e7dffdf7/UIK_130-020-intro@2x.png",
        },
        steps: [
            {
                id: "2221",
                title: "Step 1",
                description: (
                    <p>
                        In TodayError.swift, add a case for .failedReadingCalendarItem
                        and a corresponding description.
                    </p>
                ),
                fileName: "TodayError.swift",
                fileContent: "import Foundation\n\nenum TodayError: LocalizedError {\n\tcase accessDenied\n\tcase accessRestricted\n\tcase failedReadingCalendarItem\n\tcase failedReadingReminders\n}"
            },
            {
                id: "2222",
                title: "Step 2",
                description: (
                    <p>
                        In ReminderStore.swift, create a private throwing function
                        named read(with:) that accepts a reminder identifier
                        and returns an EKReminder.
                    </p>
                ),
                comment: (
                    <p>
                        EventKit contains all data from a user’s calendar, not just
                        reminder data. You’ll query for a calendar item that
                        matches your reminder identifier.
                    </p>
                ),
                fileName: "TodayError.swift",
                fileContent: "import Foundation\n\nenum TodayError: LocalizedError {\n\tcase accessDenied;\n\tcase accessRestricted;\n\tcase failedReadingCalendarItem;\n\tcase failedReadingReminders;\n}"
            },

        ]
    }
];