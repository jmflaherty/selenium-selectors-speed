Feature: Find Elements

  As a Selenium user
  I want to find web elements using diverse Selenium selector techniques
  So I can compare their ease of use and performance

  Scenario Outline: Search for elements
    Given I have visited Wikipedia
    When I search for the <element> by <selector>
    Then I register how long it took to find it

    Examples:
      | element     | selector  |
      | logo        | xpath     |
      | logo        | css       |
#      | logo        | id        |
      | logo        | badXpath  |
#      | searchBar   | xpath     |
#      | searchBar   | css       |
#      | searchBar   | id        |
#      | searchBar   | badXpath  |
