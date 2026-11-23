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
