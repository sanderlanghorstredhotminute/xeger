# Regex cheatsheet
[info](https://www.regular-expressions.info)

## main selectors
* `.` alles behalve newline
* `[abc]` lijst van karakters
* `[a-z]` bereik van karakters
* `[^a-z]` alles behalve bereik van karakters
* `^` begin
* `$` eind
* `|` of
* `?` 0 of 1 keer
* `*` 0 of meer
* `+` 1 of meer
* `*? +?` lazy
* `()` groep
* `{n}` n keer
* `{n,}` minstens n keer
* `{n,m}` n tot m keer
* `\` escaped character

## special characters:
### Shorthands
* `\d` `[0-9]` digit
* `\D` `[^\d]` alles behalve digit
* `\w` `[A-Za-z0-9_]` woord
* `\W` `[^\w]` alles behalve woord
* `\b` woord boundary (zero length)
* `\B` alles behalve woord boundary (zero length)
* `\s` `[ \t\r\n\f]` whitespace
* `\S` `[^\s]` alles behalve whitespace

### Non-printable
* `\t` tab
* `\r` carier return
* `\n` newline
* `\a` bell
* `\e` escape
* `\f` form feed
* `\cA-Z` ASCII control characters
* `\x01-1A` ASCII control characters
* `\x{FFFF}` unicode character
* `\uFFFF` unicode character

### Looking around (not captured)
* `(?:)` non-capturing
* `(?=)` positive lookahead
* `(?!.)` negative lookahead
* `(?<=)` positive lookbehind
* `(?<!)` negative lookbehind

### Backreference
* `\1-99` backreference

## not supported
* `(?P<n>)` named groups
* `(?P=n)` referencing named groups