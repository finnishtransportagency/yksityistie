*** Settings ***
Documentation  Verify that HTTPD service is working correctly.

Resource  common.robot

Test Setup  Initialize
Test Teardown  Delete All Sessions

*** Variables ***
${XML_ROOT_TAG}  Capabilities

*** Test Cases ***
Check HTTPD Headers
  [Tags]  HTTPD  Requirement
  Check HTTPD Header Exists  X-Proxy-Id-Be

Check HTTPD Routes
  [Tags]  HTTPD  Requirement
  Check HTTPD Route Exists  ${URL_CTX}

*** Keywords ***

Check HTTPD Header Exists
  [Arguments]  ${expected_header}
  Check HTTPD Route Exists  /alive-check-drreport
  ${header}  Get From Dictionary  ${RESPONSE.headers}  ${expected_header}
  Should Not Be Empty  ${header}

Check HTTPD Route Exists
  [Arguments]  ${route}  ${params}=${EMPTY_DICT}
  Get API Request  ${route}  ${params}
  Get API Request Should Have Succeed
