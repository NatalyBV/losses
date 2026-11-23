import re
from playwright.sync_api import Page, expect


def test_page_loads_with_headings(page: Page):
    """Check that the main page is opened and contains main titles"""
    page.goto("")
    expect(page).to_have_title(re.compile("losses", re.IGNORECASE))
    expect(page.get_by_text("The Russia-Ukraine losses").first).to_be_visible()
    expect(page.get_by_role("heading", name="Ukraine losses:")).to_be_visible()
    expect(page.get_by_role("heading", name="Russia losses:")).to_be_visible()


def test_controls_are_visible(page: Page):
    """Check that filters and 'Check losses' button are present on the page"""
    page.goto("")
    expect(page.get_by_text("Weapons platform:")).to_be_visible()
    expect(page.get_by_text("Model:")).to_be_visible()
    expect(page.get_by_role("button", name="Check losses")).to_be_visible()


def test_check_losses_interaction(page: Page):
    """Check selection of weapon state and click by 'Check losses' button"""
    page.goto("")

    state_select = page.locator("#stateDropdown")
    state_select.select_option(label="Destroyed")

    page.locator("#checkLosses").click()


def test_check_losses_tooltip_opens_notification(page: Page):
    """Clicking the Check losses tooltip opens a visible notification with the exact text."""
    page.goto("")

    page.get_by_role("img", name="Check losses info").click()

    notification = page.locator("#infoPopup")
    expect(notification).to_be_visible()
    expect(notification.locator("p").nth(0)).to_have_text(
        "Extracted data originating from Jakub Janovsky's Twitter account: https://twitter.com/Rebel44CZ."
    )
    expect(notification.locator("p").nth(1)).to_have_text(
        "The list only includes destroyed vehicles and equipment of which photo or videographic evidence is available. "
        "The amount of equipment destroyed is significantly higher than recorded. "
        "The list is constantly updated as additional footage becomes available."
    )
