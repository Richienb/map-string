import test from "ava"
import mapString from "."

test("main", (t) => {
    t.is(mapString("abcd", (val) => {
        if (val === "b") return "!"
        return val
    }), "a!cd")
})
