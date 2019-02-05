*** Settings ***
Documentation  Verify that API is working correctly.

Resource  common.robot

Test Setup  Initialize
Test Teardown  Delete All Sessions

*** Variables ***

*** Test Cases ***

Check API
  [Tags]  API  Requirement
  Check API path   koodistot/tietolajit  nop
  Check API path   koodistot/hallinnollinenluokka
  Check API path   koodistot/kunnat  salo
# Check API path   raportit/graafi1/20-07-2018/20-07-2018/734/190/1,2,3,99

*** Keywords ***

Check API path
  [Arguments]  ${path}  ${q}=${EMPTY}
  &{params}  Create Dictionary  q=${q}
  Get API Request  ${URL_CTX}/${path}  ${params}
  Get API Request Should Have Returned JSON

