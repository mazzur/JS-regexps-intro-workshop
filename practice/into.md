Some patterns examples

### Filtering by file name (globs)
ls *.json

### Email validation
regex: `^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$`
Valid:
some@gmail.com
my-Awesome.Email@mail.ru
Invalid:
invalid@email@gmail.com

### Phone number validation
Regex: `^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$`
Valid:
+7-9811647583
+79811655583
+7(981)1655583
Invalid:
+834-54
345234523422332
+7(9811)655583

### Search files by name pattern
Run only integration and e2e tests
Regex: `^.+\.(?:integration|e2e)\.spec\.js$`
Valid:
user-account.integration.spec.js
cart-page.integration.spec.js
cart-page.e2e.spec.js
Invalid:
user-account.spec.js
user-account-integration.spec.js

Search/replace in project
`(:\s*["']<spring:theme)((\s(?!javaScriptEscape)|[^\s])+\/>["'])`

