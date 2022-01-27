function findNeedle(haystack) {
    let a = haystack.findIndex(i => i == "needle")
    return "found the needle at position " + a
}