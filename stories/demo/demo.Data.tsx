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

export const section = {
	title: "Section 1",
	subtitle: "Respond to Change Notifications",
	description: (
		<>
			<p>
				If a user changes their reminders inside another app, you want those
				changes to appear inside Today automatically.
			</p>
			<p>
				In this section, you’ll create a function that reads all reminders from
				EventKit whenever the store changes. You’ll register for a notification
				so that your app can listen for changes from EventKit and call your
				function when it receives a change notification.
			</p>
		</>
	),

	sourceUrl:
		"https://docs-assets.developer.apple.com/published/e0c9d4d6c1bf137d56eb95b43b9c175f/UIK_130-010-intro.png",
	sourceType: "image",
	sourceNode: undefined,

	steps: [
		{
			title: "Step 1",
			description:
				"In ReminderListViewController+DataSource.swift, create a function named reminderStoreChanged() that has an empty Task.",
			comment: undefined,

			sourceUrl: undefined,
			sourceType: undefined,
			sourceNode: undefined,

			fileName: "SimpleCodeOne.swift",
			fileContent: SimpleCodeOne,
		},
		{
			title: "Step 2",
			description: "Await the result of readAll(), and assign it to reminders.",
			comment: undefined,

			sourceUrl: undefined,
			sourceType: undefined,
			sourceNode: undefined,

			fileName: "SimpleCodeOne.swift",
			fileContent: SimpleCodeTwo,
		},
		{
			title: "Step 3",
			description: "Await the result of readAll(), and assign it to reminders.",
			comment: undefined,

			sourceUrl: undefined,
			sourceType: undefined,
			sourceNode: undefined,

			fileName: "SimpleCodeOne.swift",
			fileContent: SimpleCodeThree,
		},
		{
			title: "Step 4",
			description:
				"Build and run the app to test that reminders you create in Reminders also appear in Today without needing to restart the apps.",
			comment: undefined,

			sourceUrl:
				"https://docs-assets.developer.apple.com/published/c7d95cb7ac3766b005ce7d8117c7e02e/UIK_130-010-060~dark@2x.mp4",
			sourceType: "video",
			sourceNode: undefined
		},
	],
};
