# Basic dictionary

Only basic elements described here, for the full list see [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Special_characters_meaning_in_regular_expressions)

## Character Classes

- `\s`: Whitespace
- `\w`: Word
- `\d`: Digit

## Groups and Ranges

- `.`: Any character except newline (\n)
- `[abc]`: a, b or c (`[a-z]`, `[A-Z]`, `[0-9]`)
- `[^abc]`: Not a, b or c
- `(…)`: Group
- `(abc)`: matches 'abc'
- `(a|b)`: a or b

## Quantifiers

- `*`: 0 or more
- `+`: 1 or more
- `?`: 0 or 1
- `{3}`: Exactly 3 (`{3,}`, `{3,5}`)

> Note: Quantifiers are greedy - they match as many times as possible. Add a ? after the quantifier to make it ungreedy.

## Position Matching

- `^`: Start of string or start of line in multi-line mode
- `$`: End of string or end of line in multi-line mode

## Assertions
- `x(?=y)`: Matches x only if x is followed by y
- `x(?!y)`: Matches x only if x is not followed by y

## Escape Sequences

- `\`:Escape following character. Used to escape any of the following metacharacters: {}[]()^$.|*+?\.

## Flags

- `g`: Global match
- `i`: Case-i­nse­nsitive
