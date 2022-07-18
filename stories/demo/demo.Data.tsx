export const BigCodeOne = `import Foundation
import UIKit
import Contentful

class ErrorTableViewCell: UITableViewCell, CellConfigurable {
    struct Model {
        let error: Error
        let services: Services
    }

    var didTapResetCredentialsButton: (() -> Void)?

    func configure(item: Model) {
        if item.error is SDKError || item.error is APIError {
            errorTitleLabel.text = "somethingWentWrongLabel".localized(contentfulService: item.services.contentful)
            errorDetailsLabel.attributedText = attributedErrorMessageHeader(
            	errorMessageKey: "",
                hintsKeys: ["contentModelChangedErrorHint", "draftOrPublishedErrorHint", "localeContentErrorHint"],
                fontSize: 14.0,
                contentfulService: item.services.contentful
            )

            resetCredentialsButton.setTitle(
            	"resetCredentialsLabel".localized(contentfulService: item.services.contentful),
            	for: .normal
            )
            resetCredentialsButton.isHidden = false
            return
        } else if let error = item.error as? NoContentError {
            errorTitleLabel.text = error.headline
            errorDetailsLabel.attributedText = error.message

            resetCredentialsButton.setTitle(
            	"resetCredentialsEnum".localized(contentfulService: item.services.contentful),
            	for: .normal
            )
            resetCredentialsButton.isHidden = false
            return
        }
        let error = item.error as NSError
        errorTitleLabel.text = "somethingWentWrongLabel".localized(contentfulService: item.services.contentful)
        errorDetailsLabel.text = error.localizedDescription
        resetCredentialsButton.isHidden = true
    }

    override func awakeFromNib() {
        super.awakeFromNib()
        selectionStyle = .none
    }

    @IBAction func resetCredentialsButtonAction(_ sender: Any) {
        didTapResetCredentialsButton?()
    }

    @IBOutlet weak var errorTitleLabel: UILabel! {
        didSet {
            errorTitleLabel.font = UIFont.systemFont(ofSize: 20.0, weight: .bold)
        }
    }
    @IBOutlet weak var resetCredentialsButton: UIButton!
    @IBOutlet weak var errorDetailsLabel: UILabel!
}`;

export const BigCodeTwo = `import Foundation
import UIKit
import Contentful

class ErrorTableViewCell: UITableViewCell, CellConfigurable {
    struct Model {
        let error: Error
        let services: Services
    }

    var didTapResetCredentialsButton: (() -> Void)?

    func configure(item: Model) {
        didTapResetCredentialsButton = {
            item.services.resetCredentialsAndResetLocaleIfNecessary()
        }
        if item.error is SDKError || item.error is APIError {
            errorTitleLabel.text = "somethingWentWrongLabel".localized(contentfulService: item.services.contentful)
            errorDetailsLabel.attributedText = attributedErrorMessageHeader(
            	errorMessageKey: "",
                hintsKeys: ["contentModelChangedErrorHint", "draftOrPublishedErrorHint", "localeContentErrorHint"],
                fontSize: 14.0,
                contentfulService: item.services.contentful
            )

            resetCredentialsButton.setTitle(
            	"resetCredentialsLabel".localized(contentfulService: item.services.contentful),
            	for: .normal
            )
            resetCredentialsButton.isHidden = false
            return
        } else if let error = item.error as? NoContentError {
            errorTitleLabel.text = error.headline
            errorDetailsLabel.attributedText = error.message

            resetCredentialsButton.setTitle(
            	"resetCredentialsLabel".localized(contentfulService: item.services.contentful),
            	for: .normal
            )
            resetCredentialsButton.isHidden = false
            return
        }
        let error = item.error as NSError
        errorTitleLabel.text = "somethingWentWrongLabel".localized(contentfulService: item.services.contentful)
        errorDetailsLabel.text = error.localizedDescription
        resetCredentialsButton.isHidden = true
    }

    func resetAllContent() {
        errorTitleLabel.text = nil
        errorDetailsLabel.text = nil
        resetCredentialsButton.isHidden = true
    }

    override func awakeFromNib() {
        super.awakeFromNib()
        selectionStyle = .none
    }

    @IBAction func resetCredentialsButtonAction(_ sender: Any) {
        didTapResetCredentialsButton?()
    }

    @IBOutlet weak var errorTitleLabel: UILabel! {
        didSet {
            errorTitleLabel.font = UIFont.systemFont(ofSize: 20.0, weight: .bold)
        }
    }
    @IBOutlet weak var resetCredentialsButton: UIButton!
    @IBOutlet weak var errorDetailsLabel: UILabel!
}`;

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
			sourceNode: undefined,
		},
	],
};
